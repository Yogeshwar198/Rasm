import React from 'react'
import Button from './Button';

const Hero = () => {
    return (
        <div className='max-w-full flex flex-col lg:flex-row max-h-screen bg-neutral relative overflow-hidden'>

            {/* Left div  */}
            <div className='lg:w-3/5 p-16'>
                <h1 className="text-secondary text-xl pt-10 cormorant-garamond-bold"><img src="./assets/title_left.svg" className='inline-block' alt="" /> Best Spa Massages Parlor</h1>
                <p className="text-dark text-6xl xl:text-7xl pt-10 cormorant-garamond-bold">Elevate Your Body
                    And Mind With Our
                    Spa Massages</p>

                {/* Button component  */}
                <div className='m-10 w-48'>
                    <Button name={"EXPLORE SERVICES"} />
                </div>

            </div>

            {/* Rotating flower image */}
            <img className='hidden lg:block w-32 absolute right-1/3 z-10 rotating' src="./assets/flower_1_4.svg" alt="" />
            {/* right div  */}
            <div className='w-1/2 mt-5 bg-neutral-dark relative rounded-b-full'>
                <div className='bg-neutral-light absolute mt-10 right-0 rounded-b-full'>
                    <img className='max-w-[38vw]' src="./assets/hero_bg_1_3.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hero