import React from 'react'
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'


const ContactSection = () => {
  return (
    <div data-aos="fade-left" className='flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-35'>
        <span className='uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0  lg:-rotate-90 '>
            Get Started!
        </span>
        <div className='flex flex-col lg:flex-row lg:ml-20 lg:gap-36 '>
            <div className='mb-5 lg:mb-0'>
                <h1 className='text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10'>Contact me</h1>
                <div className='flex flex-col gap-2'>
                    <a href="mailto:adhibi345@gmail.com" 
                    className='text-white font-mono underline text-lg lg:text-2xl'>adhibi345@gmail.com</a>
                    <a href="tel:+21622773602"
                    className='text-white font-mono underline text-lg lg:text-2xl'>+216 22773602</a>
                    <a href="https://ahmeddhibcv.000webhostapp.com" 
                    className='text-white font-mono underline text-lg lg:text-2xl'>My CV</a>
                </div>
                
                <div className='flex gap-2 mt-2'>
                    <AiFillGithub    className='text-white text-2xl'/>
                    <AiFillLinkedin  className='text-white text-2xl'/>
                    <AiFillInstagram className='text-white text-2xl'/>
                </div>
                <h2 className='text-2xl font-bold font-mono text-white text-center'>Or</h2>
            </div>
            <div>
                <form className='flex flex-col p-3' action="">
                    <input 
                        type="text"
                        name='name'
                        id='name'
                        placeholder='enter your name'
                        className='bg-transparent p-3 outline-new border focus:border-purple-500 focus:pl-8 transition-all
                        duration-100 rounded-lg border-white gradient-text font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]'
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='enter your email'
                        className='bg-transparent p-3 outline-new border focus:border-purple-500 focus:pl-8 transition-all
                        duration-100 rounded-lg border-white gradient-text font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]'
                    />
                    <textarea
                        name="message" 
                        id="message" 
                        rows="3"
                        className='bg-transparent p-3 outline-new border focus:border-purple-500 focus:pl-8 transition-all
                        duration-100 rounded-lg border-white gradient-text font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]'
                        placeholder='enter your message'
                    ></textarea>
                    <button type='submit' className='px-3 py-2 text-lg lg:text-2xl bckg hover:bg-purple-600 border font-mono text-white rounded-lg'>Send Message</button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default ContactSection