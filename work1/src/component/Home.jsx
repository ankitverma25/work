import React from 'react'
import dp from '../assets/images/rohit_dp.JPG';  // Full path with extension

function Home() {
  return (
    <>
    <div className="bg-blue-900 h-screen w-screen pt-12">
        <div className=" bg-orange-400 h-[80vh] w-screen">
            <div className="bg-black absolute h-auto w-auto top-8 left-9"> 
                <div className="bg-white relative bottom-1 right-1 p-3 pr-6 pl-6"> <ul className='flex flex-row gap-6'>
                <li><img className='h-6' src="/facebook.svg " alt="" srcset="" />    </li>
                <li><img className='h-6' src="/instagram.svg" alt="" srcset="" /></li>
                <li><img className='h-6' src="/youtube.svg" alt="" srcset="" /></li>
            </ul></div>
            </div>
            <div className="absolute top-[18%] left-9">
            <h1 className='text-6xl font-sans text-neutral-800 font-bold'>ROHIT</h1>
            <h1 className='text-6xl font-sans text-neutral-800 font-bold underline'>PRAJAPATI</h1>
            <ul className='flex flex-row gap-2 mt-4'>
                <li className='underline'>MODEL</li>
                <li className='underline'>ACTOR</li>
                <li className='underline'>INFLUENCER</li>
            </ul>
           
            </div>

            <div className="w-56 absolute bg-red-400 bottom-[99px] right-0">
                <img className='object-fit' src={dp} alt="dp" />
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Home