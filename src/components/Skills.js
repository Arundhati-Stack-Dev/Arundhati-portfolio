import React from 'react'
import Section from '../common/Section'

const Skills = () => {

  const services = [
    {
        id:1,
        icon: 'Html5/Css3' 
        
    },
    {
        id:2,
        icon: 'Flexbox',
    },
    {
        id:3,
        icon: 'Javascript',
    },
    {
        id:4,
        icon: 'ReactJs'
    },
    {
      id:5,
      icon: 'Redux-Toolkit',
  },
  {
    id:6,
    icon: 'GIT',
},

];

return (
<Section 
title='Skills '
subtitle='Here are the skills that I worked on.'
>
    <div className='grid gap-10 lg:grid-cols-2'>    
    { services.map(({id, icon}) => (
                <div key={id}
                 className='flex flex-col items-center justify-center p-5 shadow-lg 
                 dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'
                 >
                    {/* <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain' /> */}
                    <span className='text-3xl'>{icon}</span>
                    
                </div>
             ) )}
        

    </div>

</Section>
)
}

export default Skills

//  FaReact, FaGitAlt, FaJira
//desture m image nikala h &  title

// {/* <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain' /> */}
// {/* <h3 className='mt-5 text-base'>{title}</h3> */}
