"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBell, faClock, faComments, faGear, faHome, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';

const SideHeader = () => {
    let nav = [
        <FontAwesomeIcon className='w-5' icon={faHome}></FontAwesomeIcon>,
        <FontAwesomeIcon className='w-5' icon={faBell}></FontAwesomeIcon>,
        <FontAwesomeIcon className='w-5' icon={faClock}></FontAwesomeIcon>,
        <FontAwesomeIcon className='w-5' icon={faUser}></FontAwesomeIcon>,
        <FontAwesomeIcon className='w-5' icon={faWallet}></FontAwesomeIcon>,
        <FontAwesomeIcon className='w-5' icon={faGear}></FontAwesomeIcon>
    ]
    const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='p-2 fixed top-0 left-0 h-screen shadow-lg w-fit flex flex-col items-center justify-between z-[999]'>
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-[1.5rem] text-center'>S.</h1>
            <div className='bg-[#FDE0BC] rounded-full flex items-center justify-center py-4 px-2'>
                <FontAwesomeIcon className='w-8 text-center' icon={faComments}></FontAwesomeIcon>
            </div>
        </div>
        <div className='bg-[#F7F6FE] w-fit mx-auto rounded-full px-1 py-2 flex flex-col items-center gap-3'>
            {nav.map((item,index)=>(
                <div className={selectedIndex === index ? "rounded-full p-2 active" : "rounded-full p-2" } key={index} onClick={()=>{setSelectedIndex(index)}}>
                {item}
                </div>
            ))}
        </div>
        <div className='text-center flex flex-col items-center'>
            <Image className='rounded-full z-[999]' src='/icons.png' alt='' width={50} height={50}></Image>
            <div className='rounded-full bg-[#F7F6FE] py-2 px-3 -translate-y-2'>
                <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

export default SideHeader