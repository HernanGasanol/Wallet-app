import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  
  
    return (
    <div className='flex items-center  bg-white h-[70px] justify-between  px-4 text-white w-full bg-transparent z-20 fixed top-0 '>
       <h1 className='text-[2rem] font-bold'>W-ALLET</h1>
       
       {/* menu mobile */}
       <div className='sm:hidden'>
            <AiOutlineMenu className='text-[2rem]'/>
       </div>
       
       
       
       <div className='hidden sm:inline'>
            <ul className='flex space-x-4 font-medium'>
                <li>Quienes somos</li>
                <li>Servicios</li>
                <li>Sobre Nosotros</li>
            </ul>
       </div>
    </div>
  )
}

export default Nav