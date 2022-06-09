import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  const isActive = ({ isActive }) => (isActive ? 'link active' : 'link');

  return (
    <nav className='navbar'>
      <NavLink to='/' className={isActive}>
        Home
      </NavLink>
      <NavLink to='/about' className={isActive}>
        About
      </NavLink>
      <NavLink to='/products' className={isActive}>
        Products
      </NavLink>
      <NavLink to='/login' className={isActive}>
        Login
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
