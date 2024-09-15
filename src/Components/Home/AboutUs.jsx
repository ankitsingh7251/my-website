import React from 'react';
import whoIAm from "../../Assets/images/who_i_am.webp";
import mySkils from "../../Assets/images/myskils.webp";
import myapproach from "../../Assets/images/myapproach.jpg";
import fron_end from "../../Assets/images/Front-End.webp";
import continueimg from "../../Assets/images/continue.webp";
import { JackInTheBox, Bounce, Fade } from 'react-awesome-reveal';
import '../../css/Home/AboutUs.css'; // Ensure the path is correct

const AboutUs = () => {
    return (
        <>
            <div className='about_main_container'>
                <h1 >
                    <Bounce>ABOUT US</Bounce>
                </h1>

                <div className="About_container">
                    <div className='About_container_img1'>
                        <img
                            src={whoIAm}
                            alt="Who I Am"

                        />
                    </div>
                    <div className='About_Details_box'>
                        <h2 className=''>
                            <JackInTheBox>Who I Am</JackInTheBox>
                        </h2>
                        <Fade>
                            <p>
                                I am a dedicated front-end developer with a passion for crafting intuitive and visually engaging web experiences. With a strong foundation in modern web technologies, I bring ideas to life on the screen, ensuring each project is not just functional but also user-friendly. My approach blends creativity with technical expertise to build websites that leave a lasting impression.
                            </p>
                        </Fade>
                    </div>
                    <div className='about_show_mobileOnly'>
                        <img
                            src={whoIAm}
                            alt="Who I Am"

                        />
                    </div>
                </div>



                <div className="About_container">
                    <div className='About_Details_box'>
                        <h2 className='About_container-heading'>
                            <Bounce>My Skills</Bounce>
                        </h2>
                        <Fade>
                            <p>
                                I specialize in HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS, and Redux Toolkit, which allow me to create responsive, dynamic, and scalable web applications. My expertise in these technologies ensures that I can handle everything from building sleek user interfaces to optimizing performance and managing state efficiently. Whether it&apos;s coding from scratch or enhancing existing websites, I take pride in delivering quality code and seamless experiences.
                            </p>
                        </Fade>
                    </div>
                    <div className='About_container_img1'>
                        <img
                            src={mySkils}
                            alt="My Skills"

                        />
                    </div>
                </div>

                <div className="About_container">
                    <div className='About_container_img1'>
                        <img
                            src={myapproach}
                            alt="My Approach"

                        />
                    </div>
                    <div className='About_Details_box'>
                        <h2 className='About_container-heading'>
                            <Bounce>My Approach</Bounce>
                        </h2>
                        <Fade>
                            <p>
                                My approach to development revolves around clean, maintainable code and a user-first mindset. I start by understanding the project’s requirements and target audience before diving into the design and development process. I believe that a website should not only look good but also function smoothly across all devices. Every line of code I write is meant to ensure speed, accessibility, and responsiveness, making sure the final product exceeds expectations.
                            </p>
                        </Fade>
                    </div>
                    <div className='about_show_mobileOnly'>
                        <img
                            src={myapproach}
                            alt="My Approach"

                        />
                    </div>
                </div>

                <div className="About_container">
                    <div className='About_Details_box'>
                        <h2 className='About_container-heading'>
                            <Bounce>Why I Love Front-End Development</Bounce>
                        </h2>
                        <Fade>
                            <p>
                                Front-end development allows me to merge my love for design and coding. I enjoy taking static designs and transforming them into fully interactive web experiences that engage users. The ever-evolving nature of front-end technologies keeps me motivated to keep learning, and I embrace the challenges that come with building complex, performance-driven websites.
                            </p>
                        </Fade>
                    </div>
                    <div className='About_container_img1'>
                        <img
                            src={fron_end}
                            alt="Front-End Development"
                           
                        />
                    </div>
                </div>

                <div className="About_container">
                    <div className='About_container_img1'>
                        <img
                            src={continueimg}
                            alt="Continuous Learning"
                           
                        />
                    </div>
                    <div className='About_Details_box'>
                        <h2 className='About_container-heading'>
                            <Bounce>Continuous Learning</Bounce>
                        </h2>
                        <Fade>
                            <p>
                                In the fast-paced world of web development, staying updated is key. I am constantly learning and experimenting with new tools and frameworks to sharpen my skills and stay ahead of industry trends. From exploring new libraries to following the latest best practices, I am committed to continuous growth and delivering cutting-edge solutions.
                            </p>
                        </Fade>
                    </div>
                    <div className='about_show_mobileOnly'>
                        <img
                            src={continueimg}
                            alt="Continuous Learning"
                           
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
