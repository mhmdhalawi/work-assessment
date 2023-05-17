interface IProps {
  name: string;
  price: number;
  image: string;
  sale: number;
}

export const Product = (props: IProps) => {
  const { image, name, price, sale } = props;
  return (
    <div className='shadow-lg  rounded-md cursor-pointer hover:bg-gray-50 min-w-[190px]'>
      <img src={image} className=' rounded-t-md' />
      <div className='p-2'>
        <p className='font-semibold'>{name}</p>
        <p className='text-gray-400 '>{sale}% off</p>
        <p className='mt-4 px-2 font-semibold inline-flex border-2 rounded'>KWD {price}</p>
      </div>
    </div>
  );
};
