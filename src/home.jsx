import React, { Component } from "react";
import "./styles/home.css";
import Thibash from "./images/thibash01.jpg";
// import Navbar from "./navbar";
import Resume from "./images/Thibash FullStack Resume.pdf.pdf";
import { FaUserGraduate, FaDownload, FaGithubSquare,  FaLinkedin, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

export default class Home extends Component {
    render() {
        return (
            <main id="home" className="Overall-container">
                {/* <Navbar/> */}
                <main className="home-container">
                    <article className="home-content">
                        <h1> Hello, I'm Thibash </h1>
                        <h3> I am Java Full Stack Developer</h3>
                        <p> I am a Java Full Stack Developer with experience building scalable and high-performance applications. Proficient in Java SE/EE, Spring Boot, Hibernate, React, and MySQL. I love creating user-friendly interfaces and writing clean, efficient code.
                        </p>
                        <div>
                            <a href="#contact"><button className="hire"> Hire Me <FaUserGraduate/></button></a>
                            <a href={Resume} download><button className="resume"> Download CV <FaDownload/></button></a>
                        </div>
                        <aside>
                            <a href="https://github.com/Thibash4842" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="icon"/></a>
                            <a href="https://www.linkedin.com/in/thibash-t-578427299/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon"/></a>
                            <a href="https://wa.me/91887000991" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className="icon"/></a>
                            <a href="https://www.instagram.com/lovely_4842_official/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="icon"/></a>
                        </aside>
                        <figure className="shape"></figure>
                        <div className="square"></div>
                    </article>
                    <article className="home-image">
                        <aside>
                            <img src={Thibash} alt="thibash.img" />
                            <div className="top box"></div>
                            <div className="bot box"></div>
                        </aside>
                    </article>
                </main>
            </main>
        )
    }
}