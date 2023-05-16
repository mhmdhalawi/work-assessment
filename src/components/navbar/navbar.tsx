export const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'My Account',
    },
    {
      id: 3,
      name: 'More',
    },
  ];
  return (
    <div className='flex-[0.7] pt-6 h-[100vh] bg-image w-full '>
      <nav>
        <ul className='flex w-full justify-center gap-x-8 '>
          {menu.map((item, index) => (
            <li
              className={`${index === 0 ? 'bg-white' : 'text-white'} px-6 py-2 rounded-full `}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
