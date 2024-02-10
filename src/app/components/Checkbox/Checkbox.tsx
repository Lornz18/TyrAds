import React from 'react'
import Info from '../Info/Info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Checkbox = () => {
  return (
    <div className='flex items-center justify-between w-full bg-gray-400 p-3 rounded-lg'>
        <div className='flex items-center gap-2'>
            <div className='relative w-5 h-5 '>
                <input type="checkbox" className=' relative appearance-none border-2 border-gray-600 bg-gray-400 z-10  rounded-md w-full h-full checked:border-transparent checked:bg-transparent' />
                <FontAwesomeIcon icon={faCheck} className='absolute bg-primary text-white rounded-md p-[.2rem] top-0 left-0 w-full h-full'></FontAwesomeIcon>
            </div>
            <label htmlFor="checkbox">Check me</label>
        </div>
        <Info></Info>
    </div>
  )
}

export default Checkbox