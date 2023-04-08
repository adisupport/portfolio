import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from 'react-icons/ai'
export default function Me() {
    return (
        <div className="flex flex-col h-full w-full items-center justify-start">
            <div className='max-w-md py-8'>
                <img className="rounded-full"src='https://media.licdn.com/dms/image/C4D03AQG6W6J4_eKBEA/profile-displayphoto-shrink_200_200/0/1651661089387?e=1686182400&v=beta&t=1DiQEz5gFbsfIVIwzjd73tbGGoDNHwuLEXMHyyWO7-Y' alt="github" />
            </div>

            <div className='font-medium text-xl'>
                Email : <span className='text-white hover:text-blue-400'>aditya75.np@gmail.com</span>
            </div>
            <div className='flex w-full h-full justify-center items-center'>
                {/* <a href='' className='svg-link'><AiFillInstagram  /></a> */}
                <a href='https://www.linkedin.com/in/aditya-kumar-178b27233/' className='svg-link'><AiFillLinkedin /></a>
                <a href='https://github.com/gamingadi' className='svg-link'><AiFillGithub /></a>
            </div>
        </div>
    )
}
