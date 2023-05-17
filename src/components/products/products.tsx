import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Product } from '../product';

import { useEffect, useState } from 'react';
import { getProducts } from '../../helpers';
import { DocumentData } from 'firebase/firestore/lite';

interface IProps {
  title: string;
}

export const Products = (props: IProps) => {
  const { title } = props;
  const [products, setProducts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getProducts();
        setProducts(newData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='space-y-3 '>
      <div className='flex justify-between  pr-6'>
        <p className='text-gray-500'>{title}</p>
        <p className='flex gap-x-2 items-center cursor-pointer'>
          <span>Show All</span>
          <span>
            <ArrowRightIcon className='w-4 ' />
          </span>
        </p>
      </div>

      <div className='flex justify-between gap-x-4  overflow-x-auto pr-6 pb-6 products-slider'>
        {products &&
          products.map(({ image, name, price, sale }) => (
            <Product key={name} image={image} name={name} price={price} sale={sale} />
          ))}
      </div>
    </div>
  );
};
