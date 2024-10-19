// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-10 md:p-16'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                {/* Logo and Description */}
                <div>
                    <img className='mb-5' src="./assets/logo-white.svg" alt="Company Logo" />
                    <p className='text-gray mb-5'>Centric applications productize front end portals visualize front end results and value added.</p>
                    <p className='text-white font-semibold mb-2'>We Are Available:</p>
                    <p className='text-gray mb-5'>Mon-Sat: 08.00 am to 5.00 pm</p>
                    <div className='flex space-x-4'>
                        <FontAwesomeIcon className="p-3 bg-[#3D4250] text-white hover:bg-primary cursor-pointer" icon={faFacebook} />
                        <FontAwesomeIcon className="p-3 bg-[#3D4250] text-white hover:bg-primary cursor-pointer" icon={faTwitter} />
                        <FontAwesomeIcon className='p-3 bg-[#3D4250] text-white hover:bg-primary cursor-pointer' icon={faInstagram} />
                        <FontAwesomeIcon className='p-3 bg-[#3D4250] text-white hover:bg-primary cursor-pointer' icon={faLinkedin} />
                    </div>
                </div>
                
                {/* Quick Links */}
                <div>
                    <p className='cormorant-garamond-bold text-4xl font-bold mb-5'>Quick Links</p>
                    <ul className='space-y-2'>
                        <li className='text-gray hover:text-primary cursor-pointer'>About Us</li>
                        <li className='text-gray hover:text-primary cursor-pointer'>Work Gallery</li>
                        <li className='text-gray hover:text-primary cursor-pointer'>Privacy Policy</li>
                        <li className='text-gray hover:text-primary cursor-pointer'>Our Services</li>
                        <li className='text-gray hover:text-primary cursor-pointer'>Pricing Plans</li>
                        <li className='text-gray hover:text-primary cursor-pointer'>Contact Us</li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <p className='cormorant-garamond-bold text-4xl font-bold mb-5'>Contact Details</p>
                    <div className='space-y-4'>
                        <div>
                            <p className='cormorant-garamond-bold'>Phone Number</p>
                            <FontAwesomeIcon className='mr-3 text-white p-2 bg-primary' icon={faPhone} />
                            <span className='text-gray'>+256 214 203 215</span>
                        </div>
                        <div>
                        <p className='cormorant-garamond-bold'>Email Address</p>
                            <FontAwesomeIcon className='mr-3 text-white p-2 bg-primary' icon={faEnvelope} />
                            <span className='text-gray'>info@rasm.com</span>
                        </div>
                        <div>
                        <p className='cormorant-garamond-bold'>Office Location</p>
                            <FontAwesomeIcon className='mr-3 text-white p-2 bg-primary' icon={faMapMarkerAlt} />
                            <span className='text-gray'>25 Street, 145 City Road, New Town DD14, USA</span>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter */}
                <div>
                    <p className='cormorant-garamond-bold text-4xl font-bold mb-5'>Newsletter</p>
                    <p className='text-gray mb-5'>Sign up to get updates & news about us. Get the latest deals delivered directly to your inbox.</p>
                    <input
                        className='w-full p-3 mb-4 bg-[#2C3240] text-white outline-none'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <button className='w-full flex items-center justify-center p-3 bg-primary text-white hover:bg-white hover:text-dark transition duration-300 ease-in-out'>
                        SUBSCRIBE NOW
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className='ml-2'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
