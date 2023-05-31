<<<<<<< HEAD
import React,{useRef,useEffect,useState} from 'react'
=======
import React,{useRef} from 'react'
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
import logo from "../../Assets/Icons/logo.png"
import './style.scss'
import {BiSearch} from 'react-icons/bi'
import {SlBag} from 'react-icons/sl'
import {BiChevronDown} from 'react-icons/bi'
<<<<<<< HEAD

=======
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
const Nav = () => {
    const menuIcon = useRef(".hamburger");
    const sideNav = useRef(".sidenav");
    const MenuClicked = () => {
<<<<<<< HEAD
     
      // burdan ashagi

     
=======
      
    
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
        menuIcon.current.classList.toggle("x");
        sideNav.current.classList.toggle("active");
      };
  return (
    <nav>
       <div className="container">
        <img src={logo} alt="" />
        <ul>
<<<<<<< HEAD

            <li>
              Home
            <BiChevronDown/>
            </li>
            <li>
              Shop
              <BiChevronDown/>
              </li>
            <li>
                Product
=======
            <li>Contact</li>
            <li>Products</li>
            <li>
                Category
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
                <BiChevronDown/>
                <div className="sub-link">
                    <div className="subsubLink">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Child</li>
                    </div>
                </div>
<<<<<<< HEAD

            </li>
            <li>
              News
              <BiChevronDown/>
              </li>
            <li>
              Pages
              <BiChevronDown/>
              </li>
            <li>Buy Now</li>
=======
            </li>
            <li>About</li>
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
            <BiSearch/>
            <SlBag/>
            <div ref={menuIcon} onClick={MenuClicked} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ul>
        <div ref={sideNav} className="sidenav">
            <li>Contact</li>
            <li>Products</li>
            <li> Category </li>
            <li>About</li>
        </div>
       </div>
<<<<<<< HEAD
      
     







=======
>>>>>>> b5a250ec9c55d8aa28525e60254885ef71462fbc
    </nav>
  )
}

export default Nav