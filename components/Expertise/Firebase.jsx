import { db, storage } from "../../app/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const expertiseCollection = collection(db, "expertise");

export const fetchExpertise = async () => {
  const expertiseSnapshot = await getDocs(expertiseCollection);
  return expertiseSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addExpertise = async (expertise) => {
  const docRef = await addDoc(expertiseCollection, expertise);
  return { ...expertise, id: docRef.id };
};

export const updateExpertise = async (id, expertise) => {
  const expertiseDoc = doc(db, "expertise", id);
  await updateDoc(expertiseDoc, expertise);
  return { ...expertise, id };
};

export const deleteExpertise = async (id) => {
  const expertiseDoc = doc(db, "expertise", id);
  await deleteDoc(expertiseDoc);
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

export const updateExpertiseImages = async (id, imageUrls) => {
  const docRef = doc(db, "expertise", id);
  await updateDoc(docRef, { imageUrls });
};
