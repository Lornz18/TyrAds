import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Dropdown = () => {
  return (
    <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center gap-2 w-fit'>
        <p>Filter</p>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
    </div>
  )
}

export default Dropdown