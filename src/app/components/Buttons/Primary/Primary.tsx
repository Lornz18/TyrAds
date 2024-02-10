import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    size: string;
    px: string;
    py: string;
}

const Primary = ({children,size,px,py}: Props) => {
  return (
    <button className={`bg-[#535CE5] text-white px-${px} py-${py} rounded-md w-full text-[${size}]`}>{children}</button>
  )
}

export default Primary