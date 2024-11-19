import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-[60px] bg-transparent flex flex-row text-white items-center justify-start pt-5 pb-3'>
        <div className='basis-[50%] pl-[40px]'>
            <p className='font-k2d text-[#FF7A00] font-extrabold text-[33px]'>FOOD HUT<span className='text-[13px] pl-1'>V 1.0</span></p>
        </div>

        <div className='basis-[50%] flex flex-row justify-end items-center gap-[50px] font-k2d font-medium text-[#FF7A00] text-[15px] pl-[40px] pr-[40px]'>
            <a href='/'>Home</a>
            <a href='/recipeGenerate'>Get recipe</a>
            <a href='#'>Contact us</a>
            <a href='#'>About us</a>
        </div>
    </div>
  )
}
