import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/'>
        Home
      </Link>

      <Link className='nav-bar__item' to='/about'>
        About the band
      </Link>

      <Link className='nav-bar__item' to='/contact'>
        Contact us
      </Link>
      <Link className='nav-bar__item' to='/music'>
        Music videos
      </Link>
      <Link className='nav-bar__item' to='/forum'>
        Forums
      </Link>
      <Link className='nav-bar__item' to='/merch'>
        Merch
      </Link>
    </div>
  );
};

export default NavBar;
