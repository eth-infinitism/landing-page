import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blue_blur_bottom from '@assets/blue_blur_bottom.png';

const Talks = () => {
  return (
    <div className="w-full text-center relative">
      <Image src={blue_blur_bottom} alt="" className="absolute -z-10 bottom-0 -left-52" />
      <h1 className="title">“Talking about 4337”</h1>
      <div className="w-full flex flex-row justify-evenly mt-20 z-0">
        {/* TODO: no content */}
        {[1, 2, 3].map(() => (
          <div className="bg-grey w-80 h-80 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Talks;
