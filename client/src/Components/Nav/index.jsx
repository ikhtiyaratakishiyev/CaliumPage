import React,{useRef,useEffect,useState} from 'react'
import logo from "../../Assets/Icons/logo.png"
import './style.scss'
import {BiSearch} from 'react-icons/bi'
import {SlBag} from 'react-icons/sl'
import {BiChevronDown} from 'react-icons/bi'

const Nav = () => {
    const menuIcon = useRef(".hamburger");
    const sideNav = useRef(".sidenav");
    const MenuClicked = () => {
     
      // burdan ashagi

     
        menuIcon.current.classList.toggle("x");
        sideNav.current.classList.toggle("active");
      };
  return (
    <nav>
       <div className="container">
        <img src={logo} alt="" />
        <ul>

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
                <BiChevronDown/>
                <div className="sub-link">
                    <div className="subsubLink">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Child</li>
                    </div>
                </div>

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
      
     







    </nav>
  )
}

export default Nav