import React, { useRef } from "react";
import './styles/contact.css';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { FaUser, FaPhoneAlt} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithubSquare,  FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_3mhl27y', 'template_uq9rlrs', form.current, {
          publicKey: 'rD_Qxmh7BLYZOYPIO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
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
export default Contact;