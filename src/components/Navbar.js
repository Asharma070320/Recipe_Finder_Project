import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navi = useNavigate();
  return (
    <div className="navbar_container">
      <h2><i onClick={() => navi('/')}> Recipe Finder </i></h2>
      <ul>
        <a href="">
          <li onClick={() => navi('/')}>Home</li>
        </a>
        <a href="">
          <li>Menu</li>
        </a>
        <a href="">
          <li>Mobile App</li>
        </a>
        <a href="">
          <li>Contact Us</li>
        </a>
      </ul>
      <div className="signUp">
        <i onClick={() => navi('/cart')} className="ri-shopping-cart-line icon"></i>
        <button onClick={() => navi('/signup')} className="signup_btn">Sign Up</button>
      </div>  
    </div>
  )
}

export default Navbar
