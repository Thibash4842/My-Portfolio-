import React, { useRef, useState } from "react";
import './styles/contact.css';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState(null); // 'success', 'error', null

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setSendStatus(null);

        try {
            const result = await emailjs.sendForm(
                'service_3mhl27y',
                'template_uq9rlrs',
                form.current,
                'rD_Qxmh7BLYZOYPIO'
            );
            
            console.log('SUCCESS!', result.text);
            setSendStatus('success');
            form.current.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSendStatus(null);
            }, 5000);
            
        } catch (error) {
            console.log('FAILED...', error);
            setSendStatus('error');
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSendStatus(null);
            }, 5000);
        } finally {
            setIsSending(false);
        }
    };    

    return (
        <>
            <main id="contact" className="contact-container">
                <div className="heading">
                    CONTACT ME
                    <h1><span>CONTACT</span> ME</h1>
                </div>
                <div className="title">
                    <h1>Let's Discuss Your Project</h1>
                    <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                </div>
                <figcaption>
                    <figure>
                        <h1>Contact info</h1>
                        <section>
                            <a className="contact-box" href="mailto:thibashthirumalai@gmail.com">
                                <h2><IoMdMail />&nbsp;Email</h2>
                                <p>thibashthirumalai@gmail.com</p>
                            </a>
                            <a className="contact-box" href="tel:+918870020991">
                                <h2><FaPhoneAlt />&nbsp;Phone</h2>
                                <p>+91 88700 20991</p>
                            </a>
                            <div>
                                <h2><FaLocationDot />&nbsp;Address</h2>
                                <p>Villupuram - 605 755, TamilNadu, India</p>
                            </div>
                            <aside>
                                <h4>Visite my social profile and get connected</h4>
                                <a href="https://github.com/Thibash4842" target="_blank" rel="noopener noreferrer"><p><FaGithubSquare className="share" /><span> Github</span></p></a>
                                <a href="https://www.linkedin.com/in/thibash-t-578427299/" target="_blank" rel="noopener noreferrer"><p><FaLinkedin className="share" /><span> Linkedin</span></p></a>
                                <a href="https://wa.me/918870020991" target="_blank" rel="noopener noreferrer"><p><FaWhatsappSquare className="share" /><span> Whatsapp</span></p></a>
                            </aside>
                        </section>
                    </figure>
                    <form id="form" ref={form} onSubmit={sendEmail}>
                        <h1>Just say Hello</h1>
                        <section>
                            <div>
                                <label htmlFor="username">USER NAME</label>
                                <FaUser className="icon" />

                                <input type="text" name="username" id="username" placeholder="The Boss *" required />
                                <AiOutlineCheckCircle className="success" />
                                <AiOutlineExclamationCircle className="failure" />

                                <div className="error"></div>

                            </div>
                            <div>
                                <label htmlFor="email">EMAIL</label>
                                <IoMdMail className="icon" />

                                <input type="email" name="email" id="email" placeholder="thibash@gmail.com *" required />

                                <AiOutlineCheckCircle className="success" />
                                <AiOutlineExclamationCircle className="failure" />

                                <div className="error"></div>

                            </div>
                        </section>
                        <div>
                            <label htmlFor="subject">SUBJECT</label>

                            <input type="text" name="subject" id="subject" placeholder="Subject *" required />

                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div className="error"></div>

                        </div>
                        <div>
                            <label htmlFor="message">YOUR MESSAGE</label>

                            <textarea name="message" id="message" placeholder="Your message *" rows={4} required />

                            <AiOutlineCheckCircle className="success" />
                            <AiOutlineExclamationCircle className="failure" />

                            <div class="error"></div>

                        </div>
                        <button id="btn" type="submit" disabled={isSending}
                        style={{ opacity: isSending ? 0.7 : 1 }}> {isSending ? "Sending..." : sendStatus === 'success' ? "Sent" : sendStatus === 'error' ? "Failed" : "SEND MESSAGE"}</button>
                        {sendStatus === 'success' && (
                        <div style={{ color: 'green', marginTop: '10px' }}>
                            Message sent successfully!
                        </div>
                    )}
                    {sendStatus === 'error' && (
                        <div style={{ color: 'red', marginTop: '10px' }}>
                            Failed to send message. Please try again.
                        </div>
                    )}
                    </form>
                </figcaption>
            </main>
            <footer>
                <p>© 2024. Designed by Thibash. Copyright all right reserved.</p>
            </footer>
        </>
    )

}
export default Contact;