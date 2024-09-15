import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { JackInTheBox, Bounce } from 'react-awesome-reveal';
import '../../css/Home/HeroHome.css'

const HeroHome = () => {
  const [typeEffect] = useTypewriter({
    words: ['FRONT END WEB DEVELOPER'],
    delaySpeed: 3000,
    loop: true,
    deleteSpeed: 50,
  });
  return (
    <>
      <div className='hero-container hero-background'>
        <div className='hero-text-container'>
          <Bounce>
            <h1>ANKIT SINGH</h1>
          </Bounce>
          <JackInTheBox>
            <p>{typeEffect}</p>
          </JackInTheBox>
        </div>
      </div>
    </>
  )
}

export default HeroHome
