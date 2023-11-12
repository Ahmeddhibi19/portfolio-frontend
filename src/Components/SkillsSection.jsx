import React from 'react'
import SkillsCard from './SkillsCard'

const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className='mb-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>My skills </h1>
        <div className='h-[300px] overflow-y-scroll select-none scroll-bar'>
            <SkillsCard title={"ReactJS"} value={75}/>
            <SkillsCard title={"NextJS"} value={50}/>
            <SkillsCard title={"Taiwind css"} value={85}/>
            <SkillsCard title={"NodeJS"} value={65}/>
            <SkillsCard title={"MongoDB"} value={50}/>
            <SkillsCard title={"Spring boot"} value={65}/>
            <SkillsCard title={"MySQL"} value={75}/>
            <SkillsCard title={"Angular"} value={55}/>
        </div>
        
    </div>
  )
}

export default SkillsSection