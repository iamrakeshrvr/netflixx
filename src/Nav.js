import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Navigate, useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const Navigate = useNavigate();
    
    function handleClick() {
        Navigate("/profile")
    }

    function click() {
        Navigate("/")
    }

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);
    return (
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <img onClick={click} className ="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>
          <img onClick={handleClick} className ="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82CQK33y63CCvCwkLdiF90qoYSObxvuWqNQ&usqp=CAU" alt=""/>
        </div>
      </div>
    );
}

export default Nav;