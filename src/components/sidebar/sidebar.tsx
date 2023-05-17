import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Products } from '../products';

export const Sidebar = () => {
  return (
    <div className='flex-[0.3] w-1/3 py-2  max-h-[100vh] overflow-y-auto pb-16 space-y-2 divide-y relative'>
      <p className='mx-6 py-2 text-center  hover:bg-gray-100 cursor-pointer rounded'>Delivery</p>
      <div className=' w-full'>
        <div className='pl-6 w-full space-y-2 relative '>
          <div className='w-full relative py-4'>
            <MagnifyingGlassIcon className='w-5 absolute top-[50%] left-2 translate-y-[-50%]' />
            <input
              type='text'
              placeholder='Search in Menu'
              className='bg-gray-100 py-2 px-4 pl-10 rounded w-full leading-6 tracking-[0.01071em]  placeholder:text-[#717171] focus:outline-none'
            />
          </div>
          <div className='space-y-6'>
            <Products title='Sale' />
            <Products title='Shoes' />
            <Products title='Swimwear' />
            <Products title='Family Sets' />
          </div>
          <p className='text-center py-4  text-gray-500'>Powered by menasa</p>
        </div>
        <button className='mx-6 fixed bottom-2 left-0 bg-[#E3D0B8] hover:bg-[#ddc6a9] text-white w-[26.9%] py-3 rounded border-none'>
          Start Ordering
        </button>
      </div>
    </div>
  );
};
