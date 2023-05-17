import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../lib/firebase';

export const getProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCollection);
  const products = productsSnapshot.docs.map((doc) => doc.data());

  return products;
};
