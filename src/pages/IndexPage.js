import React from 'react'

export default function IndexPage() {
  return (
    <div className='w-full h-[90.6vh] flex flex-row justify-center pl-[40px] items-start'>
        {/* description section */}
        <div className='text-[#FF7A00] flex flex-col justify-center items-start h-full pt-[100px]'>
            <p className='font-Josefin leading-[60px] text-[60px] font-bold'>Recipes </p>
            <p className='font-Josefin leading-[60px] text-[60px] font-thin'>at Your Fingertips!</p>
            <p className='font-Josefin pt-4 text-[25px] w-[480px] font-extralight'>Transform your kitchen into a culinary haven with our user-friendly recipe generation platform.</p>

            <a href="/recipeGenerate" className='w-[140px] h-[40px] bg-[#FF7A00] pt-2 pb-2 pl-5 pr-5 mt-[50px] text-white font-Josefin text-[22px] flex flex-row justify-center items-center rounded-[20px] hover:bg-transparent hover:border-2 border-solid duration-100'>try now</a>
        </div>

        {/* image section */}
        <div className='flex flex-col justify-center items-center h-full pl-[150px] pt-[20px]'>
            <img src='/Burger with flames.png' alt='burger image' width={650}/>
        </div>
    </div>
  )
}
