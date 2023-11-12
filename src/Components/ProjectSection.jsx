import React from 'react'
import ProjectCard from './ProjectCard'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'
import { useRef } from 'react'
import anniversaire from '../assets/anniversaire.avif'
import extd from '../assets/extd.png'
import gestionnaire from '../assets/gestionnaire.png'
import lamaisonjungle from '../assets/lamaisonjungle.png'

const ProjectSection = () => {
    const scrollRef=useRef(null);
    const hscrollRight = ()=>{
        scrollRef.current.scrollLeft +=500;

    };
    const hscrollLeft = ()=>{
        scrollRef.current.scrollLeft -=500;
    }
  return (
    <div data-aos="fade-down" className='mb-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>My Projects</h1>
        <div ref={scrollRef} className='flex overflow-x-scroll gap-8 lg:p-3 scroll-hide'>
            <ProjectCard name="anniversaire" pathname={anniversaire} path="https://github.com/Ahmeddhibi19/anniversair"/>
            <ProjectCard name="extd" pathname={extd} path="https://github.com/Ahmeddhibi19/extd"/>
            <ProjectCard name="gestionnaire" pathname={gestionnaire} path="https://github.com/Ahmeddhibi19/devweb6"/>
            <ProjectCard name="la maison jungle" pathname={lamaisonjungle} path="https://github.com/Ahmeddhibi19/lamaisonjungle"/>
        </div>
        <div className='flex justify-center items-center gap-3 mt-2 select-none'>
            <HiArrowSmLeft onClick={hscrollLeft} className='tex-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block'/>
            <h2 className='gradient-text font-mono text-lg uppercase'>Slide for more</h2>
            <HiArrowSmRight onClick={hscrollRight} className='tex-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block'/>
        </div>
        
    </div>
  )
}

export default ProjectSection