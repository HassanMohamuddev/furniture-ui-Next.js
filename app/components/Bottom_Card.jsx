import React from 'react'
import { HiOutlineSupport } from "react-icons/hi";
import Image from 'next/image';


const Bottom_Card = () => {
  return (
    <div>
          <section className='mt-72 ml-20 flex flex-row justify-between items-center mr-14'>
      <div>
        {/** grid icon 3 */}
        <div className=' flex flex-row gap-3'>
        <div className=' rounded-2xl bg-blue-white shadow w-[90px] h-[90px] relative'>
        </div>
         <div>
         <Image
         src={"/image1.png"}
         width={120}
         height={90}
        
        className=' absolute bottom-1 top-[2580px] right-[1080px]'
         size={40}
         />
               
            </div>
           <div>
           <h1 className=' mt-3 font-medium'>Nordic Chair</h1>
            <p className=' mt-3 text-grey text-sm'>Donec facilisis quam ut purus<br />rutrum lobortis. Donec vitae odio.</p>
            <p className=' mt-3  text-sm cursor-pointer'>Read More</p>
        </div>
           </div>
      </div>
      <div>
        {/** grid icon 3 */}
        <div className=' flex flex-row gap-3'>
        <div className=' rounded-2xl bg-blue-white shadow w-[90px] h-[90px] relative'>
        </div>
         <div>
         <Image
         src={"/image1.png"}
         width={120}
         height={90}
        
        className=' absolute bottom-1 top-[2578px] left-[457px]'
         size={40}
         />
               
            </div>
           <div>
           <h1 className=' mt-3 font-medium'>Nordic Chair</h1>
            <p className=' mt-3 text-grey text-sm'>Donec facilisis quam ut purus<br />rutrum lobortis. Donec vitae odio.</p>
            <p className=' mt-3  text-sm cursor-pointer'>Read More</p>
        </div>
           </div>
      </div>
      <div>
        {/** grid icon 3 */}
        <div className=' flex flex-row gap-3'>
        <div className=' rounded-2xl bg-blue-white shadow w-[90px] h-[90px] relative'>
        </div>
         <div>
         <Image
         src={"/image1.png"}
         width={120}
         height={90}
        
        className=' absolute bottom-1 top-[2580px] left-[855px]'
         size={40}
         />
               
            </div>
           <div>
           <h1 className=' mt-3 font-medium'>Nordic Chair</h1>
            <p className=' mt-3 text-grey text-sm'>Donec facilisis quam ut purus<br />rutrum lobortis. Donec vitae odio.</p>
            <p className=' mt-3  text-sm cursor-pointer'>Read More</p>
        </div>
           </div>
      </div>
      
     
    </section>
    
    </div>
  )
}

export default Bottom_Card
