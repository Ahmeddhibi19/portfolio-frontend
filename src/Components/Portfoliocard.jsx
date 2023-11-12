import React from 'react'

const Portfoliocard = () => {
  return (
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className='px-5 lg:p-5 text-white w-[80vw] lg:w-[70vw] backdrop-blur-md border
     border-gray-500 select-none rounded-2xl ml-50 mr-20 lg:my-[200px] hover:scale-110
      transition-all delay-100 hover:border-white shadow-lg portfolio-card flex flex-col justify-between items-center'>
        <h3 className='text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 gradient-text'>Welcome to my Portfolio</h3>
        <h3 className='text-5xl lg:text-7xl py-3 border-2 border-transparent border-b-gray-400 font-bold gradient-text2'>Ahmed Dhibi</h3>
        <h3 className='text-xl lg:text-2xl py-3'>Software Engineering Student</h3>
    </div>
  )
}

export default Portfoliocard