import { db, storage } from "../../app/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const aboutCollection = collection(db, "about");

export const fetchAboutItems = async () => {
  const aboutSnapshot = await getDocs(aboutCollection);
  return aboutSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addAboutItem = async (item) => {
  const docRef = await addDoc(aboutCollection, item);
  return { ...item, id: docRef.id };
};

export const updateAboutItem = async (id, item) => {
  const aboutDoc = doc(db, "about", id);
  await updateDoc(aboutDoc, item);
  return { ...item, id };
};

export const deleteAboutItem = async (id) => {
  const aboutDoc = doc(db, "about", id);
  await deleteDoc(aboutDoc);
};

export const uploadImage = async (imageFile) => {
  const storageRef = ref(storage, `images/${imageFile.name}`);
  await uploadBytes(storageRef, imageFile);
  const url = await getDownloadURL(storageRef);
  return url;
};

export const removeImage = async (url) => {
  const storageRef = ref(storage, url);
  await deleteObject(storageRef);
};
