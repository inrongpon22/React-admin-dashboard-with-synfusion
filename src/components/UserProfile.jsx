import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import { userProfileData } from '../data/dummy';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const UserProfile = () => {
  const {currentColor} = useStateContext();


  return (
    <div className='nav-item absolute top-16 right-1 w-96 p-8 bg-white dark:bg-[#42464D] rounded-lg'>
      <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold dark:text-gray-200'>
            User Profile
          </p>
          <Button 
          icon={<MdOutlineCancel />}
          color='rgba(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          />
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
          <img
          className='rounded-full h-24 w-24'
          src={avatar}
          alt='user-profile'
          />
          <div>
            <p className='text-xl font-semibold dark:text-gray-200'>Michael Roberts</p>
            <p className='text-gray-400 text-sm'>Administrator</p>
            <p className='text-gray-400 text-sm font-semibold'>info@shop.com</p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div key={index} className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]'>
              <button
              type='button'
              style={{color: item.iconColor, backgroundColor: item.iconBg}} 
              className='text-lg rounded-lg p-3 hover:bg-light-gray'
              >
                {item.icon}
              </button>
              <div>
                <p className='font-semibold dark:text-gray-200'>{item.title}</p>
                <p className='text-gray-500 text-sm dark:text-gray-200'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Button 
        color='white'
        bgColor={currentColor}
        text='Logout'
        width='full'
        borderRadius='10px'
        />
    </div>
  )
}

export default UserProfile