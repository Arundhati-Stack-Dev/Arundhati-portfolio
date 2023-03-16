import React from 'react'
import Section from '../common/Section'
import contact from '../assests/mobile.png'

import SocialLinks from '../SocialLinks'

const Contact = () => {

  return (
   <Section
    title='Contact'
     subtitle='These are the ways you can get in touch with me. Hope to hear from you soon'
     >
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <div>
            <img src={contact} alt='contact info' className='w-32 h-32' />
        </div>
        <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>I am open to talk about full-time opportunities.
                Feel free to contact me using your preferred mediums.
                Send mail on arundhatisahani303@gmail.com
            </p>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl'>
            {SocialLinks.map(({id, link, icon}) => (
                <a 
                  href={link} 
                  target='_blank'
                  rel='noopener noreferre'
                  className='duration-200 ease-in-out hover:text-rose-600'
                  >
                    {icon}
                </a>
            ))}
        </div>

    

      </div>
   </Section>
  )
}

export default Contact

