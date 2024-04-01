import React, {useState } from "react";
import "./styles/nav.css";
import { SiCodesignal } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    //menu open and close bar
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    // nav  scrolling change color

        return (
            <nav className="nav-container">  
                <div>
                    <h2 className="user"><SiCodesignal className="logo"/> Thibash. TP</h2>
                </div>
                <input type="checkbox" id="menubar" />
                <label for="menubar" className="burger-menu" onClick={handleClick}>
                    {click ? (<IoMdClose className="close" />) : (<FaBars className="menu" />)}
                </label>
                <div className="page">
                    <a href="#home" className="link">HOME</a>
                    <a href="#about" className="link">ABOUT ME</a>
                    <a href="#project" className="link">PROJECTS</a>
                    <a href="#service" className="link">SERVICE</a>
                    <button><a href="#contact">CONTACT</a></button>
                </div>
            </nav>
        )
    }
export default Navbar;