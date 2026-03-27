import React, { Component } from "react";
import './styles/project.css';
import Men from './images/men.jpg';
import Tour from './images/tour.jpg';
import Portfolio from './images/Portfolio-Desk.jpg'
import fruits from './images/fruits.jpg';
export default class Project extends Component {
    render() {
        return (
            <main id="project" className="project-container">
                <div className="heading">
                    MY PROJECTS
                    <h1><span>MY</span> PROJECTS</h1>
                </div>
                <article>
                    <section>
                        <div>
                            <img src={Men} alt="men.img" />
                        </div>
                        <aside>
                            <div>
                                <p>Your visit this website</p>
                                <button><a href="https://thibash4842.github.io/E-Commerce-Website-men/" title="project link" target="_blank" rel="noopener noreferrer">Click Me</a></button>
                            </div>
                        </aside>
                        <figure>
                            <div>
                                <h3>Ecommerce website</h3>
                                <p>Technology : HTML and CSS</p>
                                <p>Web desingn<button>Hover this card</button></p>
                            </div>

                        </figure>
                    </section>
                    <section>
                        <div>
                            <img src={Tour} alt="tour.img" />
                        </div>
                        <aside>
                            <div>
                                <p>Your visit this website</p>
                                <button><a href="https://git-soundhar.github.io/tourist-website/" title="project link" target="_blank" rel="noopener noreferrer">Click Me</a></button>
                            </div>
                        </aside>
                        <figure>
                            <div>
                                <h3>Tourist website</h3>
                                <p>Technology : HTML and CSS</p>
                                <p>Web desingn<button>Hover this card</button></p>
                            </div>

                        </figure>
                    </section>
                    <section>
                        <div>
                            <img src={Portfolio} alt="portfolio.img" />
                        </div>
                        <aside>
                            <div>
                                <p>Your visit this website</p>
                                <button><a href="myportfolio" title="project link">Click Me</a></button>
                            </div>
                        </aside>
                        <figure>
                            <div>
                                <h3>Portfolio website</h3>
                                <p>Technology : HTML, CSS, JS and React</p>
                                <p>Web desingn<button>Hover this card</button></p>
                            </div>

                        </figure>
                    </section>
                    <section>
                        <div>
                            <img src={fruits} alt="portfolio.img" />
                        </div>
                        <aside>
                            <div>
                                <p>Your visit this website</p>
                                <button><a href="https://thibash4842addtocats.netlify.app/" title="project link" target="_blank" rel="noopener noreferrer">Click Me</a></button>
                            </div>
                        </aside>
                        <figure>
                            <div>
                                <h3>AddToCarts website</h3>
                                <p>Technology : React Framework</p>
                                <p>Web desingn<button>Hover this card</button></p>
                            </div>

                        </figure>
                    </section>

                </article>
            </main>
        )
    }
}