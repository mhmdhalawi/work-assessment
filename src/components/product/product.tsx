export const Product = () => {
  return (
    <div className='shadow-lg rounded-md cursor-pointer hover:bg-gray-50'>
      <img
        src='https://static.menasa.net/637b4c17cbe3c05f1e76fa77/item/IMG_5074_1671621757465_gYoWo.jpg'
        className=' rounded-t-md'
      />
      <div className='p-2'>
        <p className='font-semibold'>Swing dress pumpkin</p>
        <p className='text-gray-400 '>50% off</p>
        <p className='mt-4 px-2 font-semibold inline-flex border-2 rounded'>KWD 8.500</p>
      </div>
    </div>
  );
};
