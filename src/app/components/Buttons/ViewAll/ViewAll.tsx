import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ViewAll = () => {
  return (
    <div className='flex items-center gap-2 text-primary text-[1.2rem] justify-center'>
        <h1>View All</h1>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    </div>
  )
}

export default ViewAll