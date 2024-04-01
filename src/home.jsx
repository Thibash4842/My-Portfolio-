import React, { Component } from "react";
import "./styles/home.css";
import Thibash from "./images/imagetp.jpg";
import Navbar from "./navbar";
import Resume from "./images/resume.pdf";
import { FaUserGraduate, FaDownload, FaGithubSquare,  FaLinkedin, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

export default class Home extends Component {
    render() {
        return (
            <main id="home" className="Overall-container">
                <Navbar/>
                <main className="home-container">
                    <article className="home-content">
                        <h1> Hello, I'm Thibash </h1>
                        <h3> I am a Web Developer</h3>
                        <p> As a recent graduate, I am seeking a role which allows me to continue learning and perfecting my
                            skills as I provide high-quality work, and encourages me to flourish as a network technician.
                        </p>
                        <div>
                            <a href="#contact"><button className="hire"> Hire Me <FaUserGraduate/></button></a>
                            <a href={Resume} download><button className="resume"> Download CV <FaDownload/></button></a>
                        </div>
                        <aside>
                            <a href="https://github.com/Thibash4842" target="_blank"><FaGithubSquare className="icon"/></a>
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank"><FaLinkedin className="icon"/></a>
                            <a href=""><FaWhatsappSquare className="icon"/></a>
                            <a href="https://www.instagram.com/lovely_4842_official/" target="_blank"><FaInstagramSquare className="icon"/></a>
                        </aside>
                        <figure className="shape"></figure>
                        <div className="square"></div>
                    </article>
                    <article className="home-image">
                        <aside>
                            <img src={Thibash} alt="thibash.img" />
                            <div class="top box"></div>
                            <div class="bot box"></div>
                        </aside>
                    </article>
                </main>
            </main>
        )
    }
}