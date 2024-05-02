import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    
      <nav className="navbar">

        <Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem', }}> Home </Link> |
        <Link to='/favoritos' style={{  textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}> Favoritos </Link>
      </nav>
  
  );  
};
export default Navbar;
