import React from 'react'
import myimg1 from "../assets/myimg1.jpg"

const HomeCard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36'>
        <div data-aos="fade-up-right" className='flex flex-col gap-5 lg:w-[50%]'>
            <h1 className='text-5xl lg:text-7xl mb-10 gradient-text'>Hey!</h1>
            <p className='text-gray-300 text-xl lg:text-2xl'>
                My name is Ahmed Dhibi , and i'm a software engineering student . I am 23 years old from tunisia . 
                I have 1 year of work experience ,focusing  and creating web applications, design systems that adds growth to
                your business and more. Over this journey, i have developed various websites, conducted workshops and collaborate 
                on diverse projects. 
            </p>
            <p className='text-gray-300 text-xl lg:text-2xl'>
                I'm commited to furthering my skilles and achieving new experience in my career. Let's connect and create somthing 
                amazing together.
            </p>
        </div>
        <div data-aos="fade-up-left">
            <img src={myimg1} alt="profile" className='rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto'/>
        </div>
    </div>
    
  )
}

export default HomeCard