import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const {currentMode, currentColor} = useStateContext();



  return (
    <div className='nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-xl w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>Meesage</p>
          <button type='button' className='text-white text-xs rounded p-1 px-2 bg-orange-400'>
            5 News
          </button>
        </div>
        <Button 
        icon={<MdOutlineCancel />}
        color='rgba(153, 171, 180)'
        bgHoverColor='light-gray'
        size='2xl'
        borderRadius='50%'
        />
      </div>
      <div className='mt-5'>
        {chatData.map((item, index) => (
          <div key={index} className='flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer'>
            <div className='relative'>
              <img 
              className='w-10 h-10 rounded-full'
              src={item.image}
              alt={item.message}
              />
              <span 
              style={{background: item.dotColor}}
              className='absolute inline-flex rounded-full h-2 w-2 right-0 top-1'
              />
            </div>
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>{item.desc}</p>
            </div>
          </div>
        ))}
        <div>
          <Button
          color='white'
          bgColor={currentColor}
          text='See all notifications'
          width='full'
          borderRadius='10px'
          />
        </div>
      </div>
    </div>
  )
}

export default Notification