import React from 'react'
import Image from 'next/image'
import Card from '../Cards/Card'
import ChartExpenses from '../Charts/ChartExpenses/ChartExpenses'
import Info from '../Info/Info'
import ViewAll from '../Buttons/ViewAll/ViewAll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import Primary from '../Buttons/Primary/Primary'
const SideContent = () => {
  return (
    <div className=' h-screen bg-white p-5 shadow-lg flex flex-col items-center gap-3 z-50'>
        <Card>
            <h1 className='text-[1.5rem] font-semibold'>Expenses and Income</h1>
            <div className='flex items-center justify-between my-[1rem]'>
                <div className='text-left'>
                    <h6>Expense</h6>
                    <h1 className='text-[1.5rem]'>75%</h1>
                    <p className='text-gray-500'>5,653</p>
                </div>
                <div className='overflow-hidden'>
                    <div className='bg-black h-full min-h-5 w-[.1rem] mx-auto'></div>
                    <p>VS</p>
                    <div className='bg-black h-full min-h-5 w-[.1rem] mx-auto'></div>
                </div>
                <div className='text-right'>
                    <h6>Income</h6>
                    <h1 className='text-[1.5rem]'>40%</h1>
                    <p className='text-gray-500'>2,656</p>
                </div>
            </div>
            <ChartExpenses></ChartExpenses>
        </Card>
        <Card>
            <div className='flex items-center justify-between'>
                <h1 className='text-[1.5rem] font-semibold'>Latest spending</h1>
                <Info></Info>
            </div>
            <div className='latest flex flex-col gap-3 my-[1rem]'>
                <div className='latest-item flex items-center gap-[1.5rem] py-2'>
                    <div>
                        <Image className='rounded-full bg-[#DFE3FF]' src={'/bldg.png'} alt='' width={70} height={70}></Image>
                    </div>
                    <div>
                        <p className='font-semibold'>Online stoure</p>
                        <p className='text-gra-500 text-[.9rem]'>May 30, 2023 at 08:00pm</p>
                    </div>
                </div>
                <div className='latest-item flex items-center gap-[1.5rem] py-2'>
                    <div>
                        <Image className='rounded-full bg-[#DFE3FF]' src={'/bldg.png'} alt='' width={70} height={70}></Image>
                    </div>
                    <div>
                        <p className='font-semibold'>Online stoure</p>
                        <p className='text-gra-500 text-[.9rem]'>May 30, 2023 at 08:00pm</p>
                    </div>
                </div>
                <div className='latest-item flex items-center gap-[1.5rem] py-2'>
                    <div>
                        <Image className='rounded-full bg-[#DFE3FF]' src={'/bldg.png'} alt='' width={70} height={70}></Image>
                    </div>
                    <div>
                        <p className='font-semibold'>Online stoure</p>
                        <p className='text-gra-500 text-[.9rem]'>May 30, 2023 at 08:00pm</p>
                    </div>
                </div>
            </div>
            <ViewAll></ViewAll>
        </Card>
        <Card>
            <h6 className='text-center font-semibold'>Go to premium</h6>
            <div>
                <FontAwesomeIcon className='text-[4rem] text-primary' icon={faCrown}></FontAwesomeIcon>
                <div className='my-2'>
                    <h1 className='text-[1.5rem]'>Need more features?</h1>
                    <p className='text-gray-400'>Update your account to premium to get more features</p>
                </div>
                <Primary size={""} px={""} py={"4"}>Get Now</Primary>
            </div>
        </Card>
    </div>
  )
}

export default SideContent