import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className="nav-logo" alt="BackRoads"/>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon"/>
       
      </div>
    </nav>
  )
}
export default NavBar