import React from 'react'
import ecomHome from '../../Assets/images/ecomHome.png'
import ecomProduct from '../../Assets/images/ecomProduct.png'
import ecomCart from '../../Assets/images/ecomCart.png'
import '../../css/Home/Project.css';

const Project = () => {
    return (
        <div className='project-container'>
            <h1 className='project-title'><u>E-Commerce Website</u></h1>

            <section className='section'>
                <h2 className='section-heading'>Project Overview</h2>
                <p className='section-content'>
                    This e-commerce website is a robust front-end application developed using React.js. It offers users a seamless shopping experience with features like product browsing, cart management, and real-time data updates through API integration.
                </p>
            </section>

            <section className='section'>
                <h2 className='section-heading'>Technologies Used</h2>
                <ul className='tech-list'>
                    <li><strong>React.js</strong>: For building dynamic and responsive user interfaces.</li>
                    <li><strong>Redux</strong>: For state management and ensuring a smooth user experience.</li>
                    <li><strong>RESTful API</strong>: For fetching product data and managing cart operations.</li>
                    <li><strong>CSS/SCSS</strong>: For styling and ensuring responsiveness.</li>
                </ul>
            </section>

            <section className='section'>
                <h2 className='section-heading'>Features</h2>
                <ul className='features-list'>
                    <li><strong>User Interface</strong>: Modern, responsive design with detailed product pages and user-friendly navigation.</li>
                    <li><strong>Cart Management</strong>: Add, remove, and update items in the cart with real-time updates and persistent state.</li>
                    <li><strong>API Integration</strong>: Dynamic data fetching from RESTful API and real-time synchronization of product data.</li>
                    <li><strong>Product Management</strong>: Product categories and sorting options for enhanced user experience.</li>
                </ul>
            </section>

            <section className='section'>
                <h2 className='section-heading'>Challenges Faced</h2>
                <ul className='challenges-list'>
                    <li><strong>State Management</strong>: Implementing Redux for global state management was a complex task.</li>
                    <li><strong>API Integration</strong>: Handling asynchronous data fetching and error management required careful implementation.</li>
                    <li><strong>Responsive Design</strong>: Ensuring consistency across various devices involved extensive testing.</li>
                    <li><strong>Performance Optimization</strong>: Optimizing load times and performance was crucial for a smooth user experience.</li>
                </ul>
            </section>

            <section className='section'>
                <h2 className='section-heading'>Learning Outcomes</h2>
                <ul className='learning-outcomes-list'>
                    <li><strong>Advanced React.js Skills</strong>: Gained proficiency in building complex components and managing state.</li>
                    <li><strong>API Integration</strong>: Developed hands-on experience with RESTful APIs.</li>
                    <li><strong>Responsive Design</strong>: Enhanced understanding of responsive web design principles.</li>
                    <li><strong>Performance Optimization</strong>: Learned techniques for improving front-end performance.</li>
                </ul>
            </section>

            <section className='section'>
                <h2 className='section-heading'>Future Enhancements</h2>
                <ul className='future-enhancements-list'>
                    <li><strong>Enhanced Features</strong>: User authentication, personalized shopping, and advanced product recommendations.</li>
                    <li><strong>UI/UX Improvements</strong>: Interactive elements and refinements based on user feedback.</li>
                    <li><strong>Performance and Scalability</strong>: Improvements to handle increased traffic and data loads.</li>
                    <li><strong>Additional Functionality</strong>: Integration of additional payment options and product reviews.</li>
                </ul>
            </section>

            <section className='imgs-section'>
                <h2 className='section-heading'>Images</h2>
                <div className='Project_image_box'>
                    <div className='Project_image_box_1'>
                        <img src={ecomHome} alt="E-commerce Home Page" layout='fill' objectFit='cover' className='img'/>
                    </div>
                    <div className='Project_image_box_1'>
                        <img src={ecomProduct} alt="E-commerce Product Page" layout='fill' objectFit='cover' className='img'/>
                    </div>
                    <div className='Project_image_box_1'>
                        <img src={ecomCart} alt="E-commerce Cart Page" layout='fill' objectFit='cover' className='img'/>
                    </div>
                </div>
            </section>

            <section className='text-center'>
                <p className='final-message'>
                    Currently, this is the only project listed. Stay tuned for more exciting projects coming soon!
                </p>
                <div className='link-container'>
                    <a href="https://ankit7251.github.io/Ecommers/" className='link'>Live Demo</a>
                </div>
            </section>
        </div>
    )
}

export default Project
