import './navbar.css';
import navlogo from '../../assets/nav-logo.png';

const Navbar = ()=>{
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="navlogo" />
      <p>Admin pannel</p>
    </div>
  )
}

export default Navbar