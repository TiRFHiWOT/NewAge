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

const projectsCollection = collection(db, "projects");

export const fetchProjects = async () => {
  const projectsSnapshot = await getDocs(projectsCollection);
  return projectsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addProject = async (project) => {
  const docRef = await addDoc(projectsCollection, project);
  return { ...project, id: docRef.id };
};

export const updateProject = async (id, project) => {
  const projectDoc = doc(db, "projects", id);
  await updateDoc(projectDoc, project);
  return { ...project, id };
};

export const deleteProject = async (id) => {
  const projectDoc = doc(db, "projects", id);
  await deleteDoc(projectDoc);
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

export const updateProjectImages = async (projectId, imageUrls) => {
  const projectDoc = doc(db, "projects", projectId);
  await updateDoc(projectDoc, { imageUrls });
};
