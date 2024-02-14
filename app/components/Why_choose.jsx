import React from 'react'
import Image from 'next/image'
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";

const Why_choose = () => {
  return (
    <div className=' grid grid-cols-2 gap-2'>
      <div className=' mt-20  justify-center items-center'>
        <h1 className=' ml-20 font-bold text-2xl'>Why Choose Us</h1>
        <p className=' ml-20 text-grey mt-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam <br /> vulputate velit imperdiet dolor tempor tristique.</p>
      <div className=' mt-7 grid grid-cols-2  ml-20 gap-8'>
        {/** grid icon  1 */}
        <div>
        <div className=' rounded-full bg-blue-white shadow w-10 h-10 absolute ml-5'>
        </div>
         <div className=''>
         <MdOutlineLocalShipping 
        className=' absolute mb-20'
         size={40}
         />
               
            </div>
            <h1 className=' mt-14 font-medium'>Fast & Free Shipping</h1>
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate.</p>
        </div>
        {/** grid icon 2 */}
        <div>
        <div className=' rounded-full bg-blue-white shadow w-10 h-10 absolute ml-5'>
        </div>
         <div className=''>
         <FiShoppingBag 
        className=' absolute mb-20'
         size={40}
         />
               
            </div>
            <h1 className=' mt-14 font-medium'>Easy to Shop</h1>
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br />Aliquam vulputate.</p>
        </div>
         {/** grid icon 3 */}
         <div>
        <div className=' rounded-full bg-blue-white shadow w-10 h-10 absolute ml-5'>
        </div>
         <div className=''>
         <HiOutlineSupport 
        className=' absolute mb-20'
         size={40}
         />
               
            </div>
            <h1 className=' mt-14 font-medium'>24/7 Support</h1>
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis nisl dapibus<br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
        </div>
        {/** grid icon 4 */}
        <div>
        <div className=' rounded-full bg-blue-white shadow w-10 h-10 absolute ml-5'>
        </div>
         <div className=''>
         <AiOutlineRetweet 
        className=' absolute mb-20'
         size={40}
         />
               
            </div>
            <h1 className=' mt-14 font-medium'>Hassle Free Returns</h1>
            <p className=' mt-3 text-grey text-sm'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate.</p>
        </div>
      </div>
      </div>

      <div className='mt-20  justify-center items-center ml-36 '>
      <div>
        <div className=''>
        </div>
         <div className=''>
         <Image
         src={"/image5.png"} 
         alt='image'
         width={350}
         height={930}
        className=' absolute h-[550px] w-[400px] rounded-2xl object-cover'
         size={40}
         objectFit='contain'
         />
         </div>
         </div>
         </div>
         
    </div>
  )
}

export default Why_choose
