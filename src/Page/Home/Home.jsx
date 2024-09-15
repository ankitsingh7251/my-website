import React from 'react'
import Project from '../../Components/Home/Project'
import HeroHome from '../../Components/Home/HeroHome'
import AboutUs from '../../Components/Home/AboutUs'

const Home = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <HeroHome />
            <AboutUs />
            <Project />
        </div>
    )
}

export default Home
