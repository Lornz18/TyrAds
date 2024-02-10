import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode;
}
const Card = ({children}: Props) => {
    
  return (
    <div className='bg-white border-[.1rem] rounded-lg shadow-md p-5 w-fit min-w-[20rem]'>{children}</div>
  )
}

export default Card