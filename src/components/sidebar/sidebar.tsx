import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const Sidebar = () => {
  return (
    <div className='flex-[0.3] py-2  max-h-[100vh]  space-y-2 divide-y'>
      <p className='mx-6 py-2 text-center  hover:bg-gray-100 cursor-pointer rounded'>Delivery</p>
      <div className='px-6 w-full space-y-2'>
        <div className='w-full relative py-4'>
          <MagnifyingGlassIcon className='w-5 absolute top-[50%] left-2 translate-y-[-50%]' />
          <input
            type='text'
            placeholder='Search in Menu'
            className='bg-gray-100 py-2 px-4 pl-10 rounded w-full leading-6 tracking-[0.01071em]  placeholder:text-[#717171] focus:outline-none'
          />
        </div>
      </div>
    </div>
  );
};
