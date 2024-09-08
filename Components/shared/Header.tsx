import React from 'react'
import Image from "next/image";
import logo from '@/Assets/images/logo.jpg'



const Header: React.FC = () => {

    return (
        <>
            <div className='flex items-center justify-between px-4 md:px-14 py-2 border-b-[0.1rem] border-baseGray'>
                <Image
                    src={logo}
                    alt='dfd'
                    className=' h-[7vh] w-[7vh] object-contain rounded-full'></Image>
                <ul className='flex md:gap-9 gap-3'>
                    <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor'>HOME</li>
                    <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor'>ABOUT US</li>
                    <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor'>PROJECT</li>
                    {/* <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor'>CONTACT</li> */}
                </ul>
            </div>
        </>
    )
}

export default Header
