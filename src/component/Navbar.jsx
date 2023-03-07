import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

 
  return (

<nav className="navbar">

            <ul className="ul">

                <Link to='./'><li><img src="https://previews.123rf.com/images/glopphy/glopphy1205/glopphy120500023/13643141-health-nature-logo.jpg"/></li></Link>
               <div className='navi'>
               <div className="dropdown">
                    <p className="dropbtn">about</p>
                    <div className="dropdown-content">
                      <a href="#">About</a>
                      <a href="#">Pages</a>
                      <a href="#">Contact</a>
                    </div>
                  </div>
                <Link to ='./login'><li>Login</li></Link>
               <Link to='./register'> <li>APOIMENT</li></Link>
                <Link to='./service'><li>service</li></Link>
                
  
                </div>
                <a href="javascript:void(0);" classNameName="icon">
    <i className="fa fa-bars"></i>
    <div className="new-box">
    <Link to ='./login'><li>about</li></Link>

    <Link to ='./login'><li>Login</li></Link>
               <Link to='./register'> <li>APOIMENT</li></Link>
                <Link to='./service'><li>service</li></Link>
    </div>
    </a>
            </ul>
        </nav>
    
  )
}

export default Navbar

