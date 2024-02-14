import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' bg-green-dark'>

      <div className=' grid grid-cols-2 '>
      
      <div className=' left-0 px-32 py-16 '>
        <h1 className='
         text-white font-bold font-sans text-3xl'>Modern Interior <br /> Design Studio</h1>
      <p className=' py-2 mt-5 text-grey'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
      <button className=' bg-yellow py-3  
      mt-5 rounded-full px-10 mr-5'>
        Shop Now
      </button>
      <button className=' bg-green-dark py-3 mt-5 
      rounded-full px-10 text-white border-2 border-grey'>
        Explore
      </button>
      </div>
      <div className=' left-0 px-32 py-16'>
        <Image 
        src={'/hero.png'}
        alt='image hero'
         objectFit='contain'
        width={530}
        height={20}
        className=' w-full scale-x-150 scale-y-150 object-fill'
        />
      </div>
      </div>
    </div>
  )
}

export default Hero
