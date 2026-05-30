import { Link, NavLink } from 'react-router';

const Header = () => {
  const menus = (
    <>
      <li>
        <NavLink to='/' className='link-neutral'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/products' className='link-neutral'>Products</NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>                 
        <Link className='text-xl' to='/'>
          Khati
        </Link>
      </div>
      <div className='navbar-center sm:hidden block lg:flex'>
        <ul className='menu menu-horizontal px-1'>
            {menus}
        </ul>
      </div>
      <div className='navbar-end'>
        <Link className='btn' to='/login'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
