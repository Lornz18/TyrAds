import React ,{ReactNode} from 'react'
interface Props{
  children: ReactNode;
  wd: string;
}
const CardMid = ({children,wd} : Props) => {
  return (
    <div className={`bg-white border-[.1rem] rounded-lg shadow-md h-full min-h-[10rem] w-full min-w-[${wd}]`}>{children}</div>
  )
}

export default CardMid