import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Product } from '../product';

interface IProps {
  title: string;
}

export const Products = (props: IProps) => {
  const { title } = props;
  return (
    <div className='space-y-3'>
      <div className='flex justify-between '>
        <p className='text-gray-500'>{title}</p>
        <p className='flex gap-x-2 items-center cursor-pointer'>
          <span>Show All</span>
          <span>
            <ArrowRightIcon className='w-4 ' />
          </span>
        </p>
      </div>

      <div className='flex justify-between gap-x-4'>
        <Product />
        <Product />
      </div>
    </div>
  );
};
