
// import React, { Component } from "react";
import './styles/about.css';
import Thibash from "./images/thibash.jpg";
import Html from './images/HTML5.png';
import Css from './images/CSS3_logo.svg.png';
import Bootstrap from './images/bootstrap-5-logo-icon.webp';
import JavaScript from './images/javascript-logo.svg';
import JQuery from './images/JQuery.png';
import Rreact from './images/React.webp';
import Java from './images/java-icon-png.jpg';
import Spring from './images/spring-boot-logo.png';
import Mysql from './images/Mysql.png';
import git from './images/git-icon-logo-png.png';
import { FaGraduationCap } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import React, {useState} from "react";

const About =()=> {

    const [counterOn, setCounterOn] = useState(false);
            
        return (
            <main id="about">
                <main className="about-container">
                    <div className="heading">
                        ABOUT ME
                        <h1><span>ABOUT</span> ME</h1>
                    </div>
                    <figcaption>
                        <article className="abt-image">
                            <section>
                                <figure></figure>
                                <div>
                                    <img src={Thibash} alt="thibash.img" />
                                    <aside>
                                        <h2>THIBASH T</h2>
                                        <p>JAVA FULL STACK DEVELOPER</p>
                                        <a href="#contact"><button>CONTACT ME</button></a>
                                    </aside>
                                </div>
                            </section>
                        </article>
                        <article className="details">
                            <ul class="info">
                                <h1>PERSONAL INFO</h1>
                                <table>
                                    <tr>
                                        <td>Name</td>
                                        <td> : </td>
                                        <td>Thibash T</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td> : </td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail</td>
                                        <td> : </td>
                                        <td>thibashthirumalai@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td> : </td>
                                        <td>Villupuram(District) - 605 755, Tamil Nadu</td>
                                    </tr>
                                    <tr>
                                        <td>Freelence</td>
                                        <td> : </td>
                                        <td>Avoilable</td>
                                    </tr>
                                    <tr>
                                        <td>Skill</td>
                                        <td> : </td>
                                        <td>Java Full Stack developer</td>
                                    </tr>
                                </table>
                                <h1>LANGUAGE</h1>
                                <table>
                                    <tr>
                                        <td>Tamil</td>
                                        <td> - </td>
                                        <td>Native or billingual</td>
                                    </tr>
                                    <tr>
                                        <td>English</td>
                                        <td> - </td>
                                        <td>Professional working</td>
                                    </tr>
                                </table>
                            </ul>
                            <ul type="square" className="strength">
                                <h1>PERSONAL STRENGTH</h1>
                                <li>Good planning skills</li>
                                <li>Quick learner</li>
                                <li>Self motivated</li>
                                <li>Sincerity and punctuallity</li>
                                <li>problem-solving skills</li>
                                <h1>HOBBIES</h1>
                                <li>Coding side projects</li>
                                <li>Photo and Video editing</li>
                                <li>Travelling and listening music</li>
                            </ul>
                        </article>
                    </figcaption>
                    <aside className="course">
                        <h1> <FaCertificate/> CERTIFICATE</h1>
                        <h2>Java Full Stack Course</h2>
                        <p>Login 360 Technology - Velachery</p>
                    </aside>
                </main>

                <main className="skills-container">
                    <div className="heading h-skill">
                        MY SKILLS
                        <h1 className="skills"><span>MY</span> SKILLS</h1>
                    </div>
                    <article>
                            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Html} alt="html.png" />
                            <h1>HTML</h1>
                            <div>
                                {counterOn && <CountUp start={0} end={100} duration={2} />}%
                            </div>
                        </figure>
                            </ScrollTrigger>
                            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Css} alt="css.png" />
                            <h1 class="skill1">CSS</h1>
                            <div class="css">
                                {counterOn && <CountUp start={0} end={98} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={JavaScript} alt="js.png" />
                            <h1 class="skill3">JAVA SCRIPT</h1>
                            <div class="js">
                                {counterOn && <CountUp start={0} end={89} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={JQuery} alt="js.png" />
                            <h1 class="skill5">JQuery</h1>
                            <div class="jquery">
                                {counterOn && <CountUp start={0} end={80} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Bootstrap} alt="bootstrap.png" />
                            <h1 class="skill2">BOOTSTRAP</h1>
                            <div class="boot">
                                {counterOn && <CountUp start={0} end={98} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Rreact} alt="react.png" />
                            <h1 class="skill4">REACT</h1>
                            <div class="react">
                                {counterOn && <CountUp start={0} end={80} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Java} alt="react.png" />
                            <h1 class="skill5">Java</h1>
                            <div class="jquery">
                                {counterOn && <CountUp start={0} end={96} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Spring} alt="react.png" />
                            <h1 class="skill6">SpringBoot</h1>
                            <div class="spring">
                                {counterOn && <CountUp start={0} end={89} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={Mysql} alt="react.png" />
                            <h1 class="skill5">MYSQL</h1>
                            <div class="jquery">
                                {counterOn && <CountUp start={0} end={94} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <figure>
                            <img src={git} alt="react.png" />
                            <h1>Git</h1>
                            <div>
                                {counterOn && <CountUp start={0} end={95} duration={2} delay={0}/>}%
                            </div>
                        </figure>
                        </ScrollTrigger>
                    </article>
                </main>
                <main className="education-container">
                    <div className="heading">
                        MY EDUCATION
                        <h1><span>MY</span> EDUCATION</h1>
                    </div>
                    <hr></hr>
                        <article>
                            <section>
                                <div></div>
                                <h1> <FaGraduationCap className='grade'/><span>2020 - 2023</span> </h1>
                                <figure>
                                    <h2> Bachelor of Science in Computer Science </h2>
                                    <h3> Saraswathy College of Arts and Science - Tindivanam <br></br> Thiruvalluvar University - Vellore</h3>
                                    <h2> 80% </h2>
                                </figure>
                            </section>
                            <section>
                                <div className="line"></div>
                                <h1> <FaGraduationCap className='grade'/><span>2019 - 2020</span> </h1>
                                <figure>
                                    <h2> Higher Secondary Certificate </h2>
                                    <h3> Government Higher Secondary School - Mambalapattu </h3>
                                    <h2> 60% </h2>
                                </figure>
                            </section>
                            <section>
                                <div className="line linetwo"></div>
                                <h1> <FaGraduationCap className='grade'/><span>2017 - 2018</span> </h1>
                                <figure>
                                    <h2> Secondary School Leaving Certificate </h2>
                                    <h3> Government High School - Sennakunam </h3>
                                    <h2> 77% </h2>
                                </figure>
                            </section>
                        </article>
                </main>
            </main>
        )
    
}
export default About;