import React from 'react'
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import '../bir.css'


const Nav = () => {
  return (
    <div className=' bg-green-dark p-5'>
    <div className='flex flex-row justify-between items-center mx-20
 mt-3'>
        <div className=' font-bold text-white'>BirFurni <span className='
         text-gray-300 font-extrabold font-serif'>.</span></div>
    
    <nav  className='flex flex-row'>
        <ul className='flex gap-14 text-grey'>
            <li>
                <a className=' text-white' href="#">Home</a>
            </li>
            <li>
                <a href="#">Shop</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact us</a>
            </li>
        </ul>
        <div className=' mx-24 text-white'>
        <button className=' mr-8'>
           <FiUser size={25}/>
        </button>
        <button>
           <BsCart2 size={25}/>
        </button>
    </div>
    </nav>
    
    </div>

    </div>
    
  )
  
}

export default Nav

