"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='max-h-[24.5vh]'>

      {/* logo img  */}
      <img className='absolute bg-primary px-5 py-8 cursor-pointer' src="/assets/logo.svg" alt="" />

      {/* Contact and follow div */}
      <div className='flex justify-between pl-64 bg-dark p-4'>

        {/* contact div  */}
        <div className='flex gap-1 text-gray items-center'>
          <FontAwesomeIcon className='w-4 hidden md:block text-primary' icon={faPhone} />
          <p className='text-sm lg:text-base hidden md:block hover:text-primary cursor-pointer'>+256 214 203 215</p>
          <span className='hidden md:block border-r-[1px] border-gray mx-4'></span>
          <FontAwesomeIcon className="hidden sm:block w-4 text-primary" icon={faEnvelope} />
          <p className='hidden sm:block text-sm xl:text-base hover:text-primary cursor-pointer'>info@rasm.com</p>
          <span className='hidden sm:block border-r-[1px] border-gray mx-4'></span>
          <FontAwesomeIcon className='hidden lg:block w-4 text-primary' icon={faClock} /> {/* Clock icon */}
          <p className='hidden lg:block text-sm xl:text-base hover:text-primary cursor-pointer'>Mon - Sat: 8 AM - 15 PM Sunday Off</p>
        </div>

        {/* follow div */}
        <div className='flex gap-2 xl:gap-4 xl:pr-2 text-gray items-center'>
          <p className='hidden xl:block'>Follow Us:</p>
          <FontAwesomeIcon className="w-4 hover:text-primary cursor-pointer" icon={faFacebook} />  {/* facebook icon */}
          <FontAwesomeIcon className="w-4 hover:text-primary cursor-pointer" icon={faTwitter} />{/* Twitter icon */}
          <FontAwesomeIcon className='w-4 hover:text-primary cursor-pointer' icon={faLinkedin} /> {/* LinkedIn icon */}
          <FontAwesomeIcon className='w-4 hover:text-primary cursor-pointer' icon={faYoutube} /> {/* YouTube icon */}
          <FontAwesomeIcon className='w-4 hover:text-primary cursor-pointer' icon={faSkype} /> {/* Skype icon */}
        </div>
      </div>

      {/* Navbar list  */}
      <div className='flex gap-1 xl:gap-10 pl-64 p-4'>

        <ul className='hidden lg:flex gap-1 xl:gap-3 text-[11px] xl:text-sm font-medium items-center cursor-pointer'>

          {/* Home */}
          <li className='group relative flex hover:text-primary'>HOME
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                <p className='cursor-pointer hover:text-primary'>Multipage</p>
                <p className='cursor-pointer hover:text-primary'>Onepage</p>
              </div>
            </div>
          </li>

          {/* About Us */}
          <li className='group flex hover:text-primary'>ABOUT US
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                <p className='cursor-pointer hover:text-primary'>About One Spa & Nail</p>
                <p className='cursor-pointer hover:text-primary'>About Two Salon & Wellness</p>
              </div>
            </div>
          </li>

          {/* Services */}
          <li className='group flex hover:text-primary'>SERVICES
            <svg xmlns="http://www.w3.org/2000/svg"
             className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                <p className='cursor-pointer hover:text-primary'>Services One Spa & Nail</p>
                <p className='cursor-pointer hover:text-primary'>Services Two Salon & Wellness</p>
                <p className='cursor-pointer hover:text-primary'>Services Details</p>
              </div>
            </div>
          </li>

          {/* Pages */}
          <li className='group flex hover:text-primary relative'>PAGES
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
            <div className='group-hover:block hidden absolute -right-96 z-10 dropdown-menu pt-4'>
              <div className='flex'> {/* Changed class to 'flex' for row layout */}
               
               {/* Pagelist 1  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 1</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Spa Message Parlor</p>
                  <p className='cursor-pointer hover:text-primary'>Nail Stylist</p>
                  <p className='cursor-pointer hover:text-primary'>Hair Salon</p>
                  <p className='cursor-pointer hover:text-primary'>Beauty Salon</p>
                  <p className='cursor-pointer hover:text-primary'>Skin Care</p>
                  <p className='cursor-pointer hover:text-primary'>Plastic Surgery</p>
                  <p className='cursor-pointer hover:text-primary'>Cosmetic Surgery</p>
                </div>

                {/* Pagelist 2  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 2</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>About One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>About Two Salon & Wellness</p>
                  <p className='cursor-pointer hover:text-primary'>Services One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>Services Two Salon & Wellness</p>
                  <p className='cursor-pointer hover:text-primary'>Services Details</p>
                </div>

                {/* Pagelist 3  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 3</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Appointment</p>
                  <p className='cursor-pointer hover:text-primary'>Team</p>
                  <p className='cursor-pointer hover:text-primary'>Team Details</p>
                  <p className='cursor-pointer hover:text-primary'>Blog</p>
                  <p className='cursor-pointer hover:text-primary'>Blog Details</p>
                </div>

                {/* Pagelist 4  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 4</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Photo Gallery</p>
                  <p className='cursor-pointer hover:text-primary'>Price Table</p>
                  <p className='cursor-pointer hover:text-primary'>FAQ</p>
                  <p className='cursor-pointer hover:text-primary'>Contact Us</p>
                  <p className='cursor-pointer hover:text-primary'>Error Page</p>
                </div>
              </div>
            </div>
          </li>


          {/* Shop */}
          <li className='group flex hover:text-primary'>SHOP
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                <p className='cursor-pointer hover:text-primary'>Shop</p>
                <p className='cursor-pointer hover:text-primary'>Shop Details</p>
                <p className='cursor-pointer hover:text-primary'>Cart Page</p>
                <p className='cursor-pointer hover:text-primary'>Checkout</p>
                <p className='cursor-pointer hover:text-primary'>Wishlist</p>
              </div>
            </div>
          </li>

          {/* Blog */}
          <li className='group flex hover:text-primary'>BLOG
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                <p className='cursor-pointer hover:text-primary'>Blog Layout</p>
                <p className='cursor-pointer hover:text-primary'>Blog Sidebar</p>
                <p className='cursor-pointer hover:text-primary'>Blog Details</p>
              </div>
            </div>
          </li>

          {/* Contact Us */}
          <li className='flex hover:text-primary'>CONTACT US</li>
        </ul>

        {/* search, cart, app icons  */}
        <div className="flex xl:gap-4">
          <p className='group rounded-full xl:w-14 py-4 xl:p-4 text-center xl:hover:bg-primary transition duration-300  xl:border-[1px] cursor-pointer'>
            <FontAwesomeIcon icon={faSearch} className='w-5 text-[#5f6368] xl:group-hover:text-white' /> {/* Search icon */}
          </p>
          <p className='relative group rounded-full w-14 text-center py-4 xl:p-4 xl:hover:bg-primary transition duration-300  xl:border-[1px] cursor-pointer'>
            <FontAwesomeIcon icon={faShoppingCart} className='w-5 text-[#5f6368] xl:group-hover:text-white' /> {/* Cart icon */}
            <p className='absolute right-[5px] top-[7px] w-4 text-center leading-4 bg-secondary text-white xl:group-hover:bg-white xl:group-hover:text-secondary transition-all aspect-square rounded-full text-[8px]'>5</p>
          </p>

          <p onClick={() => setVisible(!visible)} className='group rounded-full xl:hover:bg-primary transition duration-300 w-14 text-center py-4 xl:p-4 xl:border-[1px] cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" className='fill-[#5f6368] xl:group-hover:fill-white' ><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" /></svg>
          </p>
          <div className='hidden sm:block'>
            <Button name={"APPOINTMENT NOW"} />
          </div>
        </div>

      </div>

      {/* Sidebar menu for small screens */}
      <div className={`lg:hidden absolute top-0 left-0 bottom-0 overflow-hidden z-20 bg-white transition-all ${visible ? 'w-full sm:w-[38vw]' : 'w-0'}`}>
        <div className='flex-col text-gray-600'>


          <FontAwesomeIcon icon={faTimes} onClick={() => setVisible(false)}
            className='absolute right-0 w-4 text-white bg-secondary rounded-full p-2 cursor-pointer' />

          {/* logo img  */}
          <img className='max-w-[60vw] bg-primary px-10 py-5' src="/assets/logo.svg" alt="" />

          <ul className='flex flex-col gap-2 p-5 text-sm font-medium'>
            <li className='group flex hover:text-primary'>HOME
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer hover:text-primary'>Multipage</p>
                  <p className='cursor-pointer hover:text-primary'>Onepage</p>
                </div>
              </div>
            </li>
            <hr />
            <li className='group flex hover:text-primary'>ABOUT US
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer hover:text-primary'>About One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>About Two Salon & Wellness</p>
                </div>
              </div>
            </li>
            <hr />
            <li className='group flex hover:text-primary'>SERVICES
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer hover:text-primary'>Services One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>Services Two Salon & Wellness</p>
                  <p className='cursor-pointer hover:text-primary'>Services Details</p>
                </div>
              </div>
            </li>
            <hr />
            <li className='group flex hover:text-primary'>PAGES
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
              <div className='flex'> {/* Changed class to 'flex' for row layout */}
               
               {/* Pagelist 1  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 1</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Spa Message Parlor</p>
                  <p className='cursor-pointer hover:text-primary'>Nail Stylist</p>
                  <p className='cursor-pointer hover:text-primary'>Hair Salon</p>
                  <p className='cursor-pointer hover:text-primary'>Beauty Salon</p>
                  <p className='cursor-pointer hover:text-primary'>Skin Care</p>
                  <p className='cursor-pointer hover:text-primary'>Plastic Surgery</p>
                  <p className='cursor-pointer hover:text-primary'>Cosmetic Surgery</p>
                </div>

                {/* Pagelist 2  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 2</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>About One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>About Two Salon & Wellness</p>
                  <p className='cursor-pointer hover:text-primary'>Services One Spa & Nail</p>
                  <p className='cursor-pointer hover:text-primary'>Services Two Salon & Wellness</p>
                  <p className='cursor-pointer hover:text-primary'>Services Details</p>
                </div>

                {/* Pagelist 3  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 3</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Appointment</p>
                  <p className='cursor-pointer hover:text-primary'>Team</p>
                  <p className='cursor-pointer hover:text-primary'>Team Details</p>
                  <p className='cursor-pointer hover:text-primary'>Blog</p>
                  <p className='cursor-pointer hover:text-primary'>Blog Details</p>
                </div>

                {/* Pagelist 4  */}
                <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer text-black'>Pagelist 4</p>
                  <hr />
                  <p className='cursor-pointer hover:text-primary'>Photo Gallery</p>
                  <p className='cursor-pointer hover:text-primary'>Price Table</p>
                  <p className='cursor-pointer hover:text-primary'>FAQ</p>
                  <p className='cursor-pointer hover:text-primary'>Contact Us</p>
                  <p className='cursor-pointer hover:text-primary'>Error Page</p>
                </div>
              </div>
            </div>
            </li>
            <hr />
            <li className='group flex hover:text-primary'>SHOP
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer hover:text-primary'>Shop</p>
                  <p className='cursor-pointer hover:text-primary'>Shop Details</p>
                  <p className='cursor-pointer hover:text-primary'>Cart Page</p>
                  <p className='cursor-pointer hover:text-primary'>Checkout</p>
                  <p className='cursor-pointer hover:text-primary'>Wishlist</p>
                </div>
              </div>
            </li>
            <hr />
            <li className='group flex hover:text-primary'>BLOG
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 transform transition-transform duration-300 group-hover:rotate-180' viewBox="0 -960 960 960" fill="#AB6A49"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              <div className='group-hover:block hidden absolute z-10 dropdown-menu pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded border-b-2 border-secondary'>
                  <p className='cursor-pointer hover:text-primary'>Blog Layout</p>
                  <p className='cursor-pointer hover:text-primary'>Blog Sidebar</p>
                  <p className='cursor-pointer hover:text-primary'>Blog Details</p>
                </div>
              </div>
            </li>
            <hr />
            <li className='flex hover:text-primary'>CONTACT US</li>
          </ul>
          <div className='block max-w-[50vw] sm:hidden'>
            <Button name={"APPOINTMENT NOW"} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar