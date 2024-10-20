import React from 'react'
import Button from './Button';


const Hero = () => {
    return (
        <div className='max-w-full flex flex-col lg:flex-row min-h-screen bg-neutral relative'>

            {/* Left div  */}
            <div className='lg:w-3/5 w-full p-8 lg:p-16'>
                <h1 className="text-secondary text-xl pt-6 cormorant-garamond-bold"><img src="./assets/title_left.svg" className='inline-block' alt="" /> Best Spa Massages Parlor</h1>
                <p className="text-dark text-4xl sm:text-6xl xl:text-7xl pt-6 lg:pt-10 cormorant-garamond-bold">Elevate Your Body
                    And Mind With Our
                    Spa Massages</p>

                {/* Button component  */}
                <div className='mt-8 lg:mt-10 w-48'>
                    <Button name={"EXPLORE SERVICES"} />
                </div>

            </div>

            {/* Rotating flower image */}
            <img className='hidden lg:block w-32 absolute left-1/2 z-10 rotating' src="./assets/flower_1_4.svg" alt="" />
            {/* right div  */}
            <div className='w-full sm:w-2/3 lg:w-1/2 mt-5 bg-neutral-dark relative rounded-b-full mx-auto flex justify-center items-center lg:justify-end'>
                <div className='bg-neutral-light rounded-b-full mt-5 max-w-full sm:max-w-md xl:max-w-lg w-full'>
                    <img className='w-full' src="./assets/hero_bg_1_3.png" alt="" />
                </div>
            </div>

            <div className="absolute bottom-0 bg-repeat movingX h-16 w-full"
             style={{ backgroundImage: 'url("/assets/flower_1_4.svg")' }}>
            
        </div>

        </div>
    )
}

export default Hero