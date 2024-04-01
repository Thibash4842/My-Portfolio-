import React, { Component } from "react";
import "./styles/service.css";

import { GoBrowser } from "react-icons/go";
import { MdDesignServices,MdAppSettingsAlt  } from "react-icons/md";
import { FaRegWindowRestore,FaLaptopCode } from "react-icons/fa";
import { BiSolidColor } from "react-icons/bi";

export default class Service extends Component {
    render() {
        return (
            <main id="service" className="service-container">
                <div className="heading">
                    MY SERVICE
                    <h1><span>MY</span> SERVICE</h1>
                </div>
                <figcaption>
                    <article>
                        <div>
                            <GoBrowser className="design" />
                            <h1>Web Development</h1>
                        </div>
                        <p> Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    </article>
                    <article>
                        <div>
                            <MdDesignServices className="design" />
                            <h1>Web Design</h1>
                        </div>
                        <p>Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.</p>
                    </article>
                    <article>
                        <div>
                            <FaRegWindowRestore className="design"/>
                            <h1>Responsive Design</h1>
                        </div>
                        <p>a design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch.</p>
                    </article>
                    <article>
                        <div>
                            <MdAppSettingsAlt className="design"/>
                            <h1>App Design</h1>
                        </div>
                        <p>In the web application design process, users are the top priority. It focuses on the following: How users interact with the web app. Whether the app meets user needs ...</p>
                    </article>
                    <article>
                        <div>
                            <FaLaptopCode className="design"/>
                            <h1>Web Application</h1>
                        </div>
                        <p>A web application web app is an application program that is stored on a remote server and delivered over the internet through a browser interface. Web ...</p>
                    </article>
                    <article>
                        <div>
                            <BiSolidColor className="design"/>
                            <h1>UI/UX</h1>
                        </div>
                        <p>UI design involves the look of a product — namely, the visual components and interactive elements that contribute to a strong user experience. Meanwhile, UX ...</p>
                    </article>
                </figcaption>
            </main>
        )
    }
}