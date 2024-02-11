import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
}
const Add = ({children}: Props) => {
  return (
    <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <p>{children}</p>
    </div>
  )
}

export default Add