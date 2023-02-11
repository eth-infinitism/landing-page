import React from 'react';
import green_blur_bottom from '@assets/green_blur_bottom.png';
import Image from 'next/image';

const Join = () => {
  return (
    <div className='w-full text-center pb-16'>
      <Image src={green_blur_bottom} alt="" className="absolute -z-10 bottom-16 left-40" />

      <h1 className='font-bold text-2xl mb-4'>Join the conversation</h1>
      <p >It takes a village to make an EIP a reality, and luckily our village is global and highly motivated</p>
    </div>
  );
};

export default Join;
