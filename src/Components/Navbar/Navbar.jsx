import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Use `menuOpen` for clarity

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div className='navbar'>
      {/* <input type="checkbox" class="myCheckbox" id="myCheck"></input> */}

        <label class="logo">
            <Link to='/'>HotCoffee</Link>
        </label>
        
        <input className='search' type="text" placeholder='search' />
        <ul className={menuOpen ? 'active' : ''}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>  
        </ul>
        <button className='menu-button' onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Replace with your preferred icon */}
      </button>

        {/* <div className="menu" onClick={() => {
          setMenuopen(!menuopen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        {/* <label for="myCheck" class="checkButton">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </label> */}
    </div>
  )
}
