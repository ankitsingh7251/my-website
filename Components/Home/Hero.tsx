"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { JackInTheBox, Bounce } from 'react-awesome-reveal';

const Hero: React.FC = () => {

    const [typeEffect] = useTypewriter({
        words: ['FRONT END WEB DEVELOPER'],
        delaySpeed: 3000,
        loop: true,
        deleteSpeed: 50,

    })
    return (
        <>
            <div className=' text-baseGray md:h-[90vh] h-[60vh] flex items-center justify-center relative herobackground'>
                <div className='text-center '>
                    <Bounce >
                        <h1 className='md:text-[4.5vw] font-bold text-baseColor'>ANKIT SINGH</h1>
                    </Bounce>
                    <JackInTheBox>
                        <p className='md:text-[3.5vw]  '>{typeEffect}</p>
                    </JackInTheBox>

                </div>


            </div>


        </>
    )
}

export default Hero
