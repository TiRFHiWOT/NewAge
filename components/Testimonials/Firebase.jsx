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

const testimonialsCollection = collection(db, "testimonials");

export const fetchTestimonials = async () => {
  const testimonialsSnapshot = await getDocs(testimonialsCollection);
  return testimonialsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addTestimonial = async (testimonial) => {
  const docRef = await addDoc(testimonialsCollection, testimonial);
  return { ...testimonial, id: docRef.id };
};

export const updateTestimonial = async (id, testimonial) => {
  const testimonialDoc = doc(db, "testimonials", id);
  await updateDoc(testimonialDoc, testimonial);
  return { ...testimonial, id };
};

export const deleteTestimonial = async (id) => {
  const testimonialDoc = doc(db, "testimonials", id);
  await deleteDoc(testimonialDoc);
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

export const updateTestimonialImages = async (
  testimonialId,
  profilePictures
) => {
  const testimonialDoc = doc(db, "testimonials", testimonialId);
  await updateDoc(testimonialDoc, { profilePictures });
};
