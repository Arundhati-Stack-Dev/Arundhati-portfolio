import React from 'react'
import Section from '../common/Section'

import {FaGithub } from 'react-icons/fa'


import p3 from '../assests/p3.jpg'
import p4 from '../assests/p4.jpg'
import p5 from '../assests/p5.jpg'
import p6 from '../assests/p6.jpg'



const Portfolio = () => {

  const projects = [
    {
        id:1,
        image:p3,
        title:"PlacesGogram",
        github:"https://github.com/Arundhati-Stack-Dev/PlacesGogram",
        // demo:"https://nodejs.org/en/"
    },
    {
        id:2,
        image:p4,
        title:"E-Commerce",
        github:"https://github.com/Arundhati-Stack-Dev/E-Commerce",
        // demo:"https://nodejs.org/en/"
    },
    {
        id:3,
        image:p5,
        title:"Blog_ReactJs",
        github:"https://github.com/Arundhati-Stack-Dev/Blog_ReactJs",
        // demo:"https://nodejs.org/en/",
        // des:"ReactJs project"
    },
    {
        id:4,
        image:p6,
        title:"Jokes_Api",
        github:"https://github.com/Arundhati-Stack-Dev/Jokes_Api_Reactjs",
        // demo:"https://nodejs.org/en/"
    },
  ]

  return (
    <Section
    title='Projects'
    subtitle='These are the projects that I have worked on.
     Some of them I have worked before I gained some experience. 
     So go gentle on them.'
    >

        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {projects.map(({id, image, title, github, demo}) => (
                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img  src={image} alt={title} className='w-2/3'/>
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1' >
                        <h2>{title}</h2>
                        <a 
                        className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110'
                         href={github} target='_blank' rel='noopener noreferrer'
                         >
                            <FaGithub />
                        </a>
                     
                    </div>
                </div>

            ))}
        </div>

    </Section>
    
  )
}

export default Portfolio

