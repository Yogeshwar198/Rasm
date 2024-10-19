import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ name }) => {
    return (
        <div className='group flex items-center justify-center p-4 bg-primary text-white text-sm font-medium gap-1 transition duration-300 ease-in-out hover:bg-black'>
            <button>{name}</button>
            <FontAwesomeIcon 
                icon={faArrowRight} 
                className='w-4 transform group-hover:translate-x-1 transition duration-300 ease-in-out' 
            /> 
        </div>
    )
}

export default Button;
