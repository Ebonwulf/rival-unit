import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../Assets/Images/rival-unit.png';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img className='nav-bar__logo' src={logo} alt='Rival Unit' />
      <div className='nav-bar__links'>
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
    </div>
  );
};

export default NavBar;
