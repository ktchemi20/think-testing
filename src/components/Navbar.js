import React from 'react'
import Logo from '../images/ThinkTesting-logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <Link to= '/'> 
        <img src={Logo} />
        </Link>
       
        </div>
        <div className='rightSide'>
            <Link to= '/'> Home</Link>
            <Link to= '/about'> About</Link>
            <Link to= '/manual'> Manual Testing</Link>
            <Link to= '/automated'> Automated Testing</Link>
        </div>
    </div>
  )
}

export default Navbar
