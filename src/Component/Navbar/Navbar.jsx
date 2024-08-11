import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/upsc_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [menu, setMenu] = useState("Home")

  return (
    <div className=' navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <h1>UPSC Quizz App</h1>
      </div>
      <ul className='nav-menu'>
  <li onClick={() => setMenu("Home")}>
    <Link  to="/" style={{textDecoration: 'none', color:'black'}}>Home</Link>
    {menu === "Home" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("About")}>
    <Link to="/myquizz" style={{textDecoration: 'none', color:'black'}}>My Quizz</Link>
    {menu === "My Quizz" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("Create New Quizz")}>
    <Link to="/createquizz" style={{textDecoration: 'none', color:'black'}}>Create Quizz</Link>
    {menu === "Create New Quizz" ? <hr/> : <></>}
  </li>
      </ul>
      <div className='login-btn'>
      {
  localStorage.getItem('auth-token') ? (
    <button onClick={() => { 
      localStorage.removeItem('auth-token'); // corrected 'auth-tiken' to 'auth-token'
      window.location.replace('/'); // Redirect to the home page after logout
    }}>Log Out</button>
  ) : (
    <Link to='/login'><button>Login</button></Link> // Use Link to navigate to the login page
  )
}
      </div>
    </div>
  )
}

export default Navbar
