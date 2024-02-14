import React from 'react'
import Image from 'next/image'
import { VscCircleSmall } from "react-icons/vsc";



const We_help = () => {
  return (
    <div className=' grid grid-cols-2 gap-2 mt-60'>
        <div className='justify-center items-center ml-20 '>
       <div>
       <Image
       src={"/image8.jpg"} 
       alt='image'
       width={350}
       height={930}
      className=' absolute h-[550px] w-[400px] rounded-2xl mt-20 object-cover'
       size={40}
       objectFit='contain'
       />
       </div>
       <div>
       <Image
       src={"/image6.jpg"} 
       alt='image'
       width={150}
       height={90}
      className=' absolute h-[212px] w-[212px] rounded-2xl ml-[410px] mt-20 object-cover'
       size={40}
       objectFit='contain'
       />
       </div>
       <div>
       <Image
       src={"/image7.jpeg"} 
       alt='image'
       width={361}
       height={391}
      className=' absolute h-[391px] w-[361px] rounded-2xl ml-[260px] mt-80 object-cover'
       size={40}
       objectFit='contain'
       />
       </div>
       </div>
    <div className=' mt-20 justify-center items-center ml-10'>
        
      <h1 className=' ml-20 font-bold text-2xl'>We Help You Make Modern <br /> Interior Design</h1>
      <p className=' ml-20 text-grey mt-5'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae <br />
       odio quis nisl dapibus malesuada. Nullam ac aliquet velit. <br />
        Aliquam vulputate velit imperdiet dolor tempor tristique. <br />
         Pellentesque habitant morbi tristique senectus et <br /> netus et malesuada</p>
    <div className=' mt-7 grid grid-cols-2  ml-20 gap-8'>
       {/** grid icon  1 */}
       <div className='flex flex-row'>
       <VscCircleSmall 
             className=' mt-1'
             size={35}
            />
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis <br /> nisl dapibus malesuada</p>
        </div>
        {/** grid icon  2 */}
        <div className='flex flex-row'>
       <VscCircleSmall 
             className=' mt-1'
             size={35}
            />
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis <br /> nisl dapibus malesuada</p>
        </div>
         {/** grid icon  3 */}
       <div className='flex flex-row'>
       <VscCircleSmall 
             className=' mt-1'
             size={35}
            />
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis <br /> nisl dapibus malesuada</p>
        </div>
     {/** grid icon  4 */}
     <div className='flex flex-row'>
       <VscCircleSmall 
             className=' mt-1'
             size={35}
            />
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis <br /> nisl dapibus malesuada</p>
        </div>
      <div className=' '>
      <button className=' bg-dark mt-5 ml-4
      rounded-full px-6 py-3 text-white font-bold'>
        Explore
      </button>
      </div>
    </div>
    </div>
    
   
  </div>
  

  
  )
}

export default We_help
