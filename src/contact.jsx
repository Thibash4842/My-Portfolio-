import React, { Component } from "react";
import './styles/contact.css';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { FaUser, FaPhoneAlt} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithubSquare,  FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


export default class Contact extends Component {
    render() {
//         let id = (id) => document.getElementById(id);
//         let classes = (classes) => document.getElementsByClassName(classes);

//     let username = id("username"),
//     email = id("email"),
//     subject =id("subject"),
//     form = id("form"),

//     errorMsg = classes("error"),
//     successIcon = classes("success"),
//     failureIcon = classes("failure");

// let engine = (id, serial, message) =>{
//     if(id.value.trim() === ""){
//         errorMsg[serial].innerHTML=message;
//         id.style.border="2px solid red";
//         // icons
//         failureIcon[serial].style.opacity="1";
//         successIcon[serial].style.opacity="0";
//     }else {
//         errorMsg[serial].innerHTML="";
//         id.style.border="2px solid green";
//         // icons
//         failureIcon[serial].style.opacity="0";
//         successIcon[serial].style.opacity="1";
//     }
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.dir(e.target[0].value);
//     engine(username,0,"Username cannot be blank");
//     engine(email,1,"Email cannot be blank");
// });

        return (
            <>
            <main id="contact" className="contact-container">
                <div className="heading">
                    CONTACT ME
                    <h1><span>CONTACT</span> ME</h1>
                </div>
                <div class="title">
                    <h1>Let's Discuss Your Project</h1>
                    <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                </div>
                <figcaption>
                    <figure>
                        <h1>Contact info</h1>
                        <section>
                            <div>
                                <h2><IoMdMail/> Email</h2>
                                <p>projecttp4248@gmail.com</p>
                            </div>
                            <div>
                                <h2><FaPhoneAlt/> Phone</h2>
                                <p>+91 88700 20991</p>
                            </div>
                            <div>
                                <h2><FaLocationDot /> Address</h2>
                                <p>Velachery, Chennai-600 042</p>
                            </div>
                            <aside>
                                <h4>Visite my social profile and get connected</h4>
                                <a href="https://github.com/Thibash4842" target="_blank"><p><FaGithubSquare className="share"/><span> Github</span></p></a>
                                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank"><p><FaLinkedin className="share"/><span> Linkedin</span></p></a>
                                <a href="" target="_blank"><p><FaWhatsappSquare className="share"/><span> Whatsapp</span></p></a>
                            </aside>
                        </section>
                    </figure>
                    <form id="form">
                        <h1>Just say Hello</h1>
                        <section>
                        <div>
                            <label for="username">USER NAME</label>
                            <FaUser className="icon" />

                            <input type="text" name="username" id="username" placeholder="The Boss *" required/>
                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div className="error"></div>

                        </div>
                        <div>
                            <label for="email">EMAIL</label>
                            <IoMdMail className="icon" />

                            <input type="email" name="email" id="email" placeholder="thibash@gmail.com *" required/>

                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div className="error"></div>

                        </div>
                        </section>
                        <div>
                            <label for="subject">SUBJECT</label>

                            <input type="text" name="subject" id="subject" placeholder="Subject *" required/>

                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div className="error"></div>

                        </div>
                        <div>
                            <label for="message">YOUR MESSAGE</label>

                            <textarea name="message" id="message" placeholder="Your message *" rows={4} required/>

                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div class="error"></div>

                        </div>
                        <button id="btn" type="submit">SEND MESSAGE</button>
                    </form>
                </figcaption>
            </main>
            <footer>
                <p>© 2024. Designed by Thibash. copyright all right reserved.</p>
            </footer>
            </>
        )
    }
}