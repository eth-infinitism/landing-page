import { ITalkItem, TalkItems } from '@configs/home/talks';
import React from 'react';

const TalkItem = ({ title, subtitle, videoSrc }: ITalkItem) => (
  <div>
    <video className="w-80 h-52" preload="metadata">
      <source src="https://www.youtube.com/9892d783-9d36-4b2f-bb9e-34bd4bcedf2f" type="video/mp4" />
    </video>
    <div className="text-left">
      <h1 className='font-bold text-base'>{title}</h1>
      <h2 className='text-xs'>{subtitle}</h2>
    </div>
  </div>
);

const Talks = () => {
  return (
    <section className="w-full text-center relative">
      <h1 className="title">“Talking about 4337”</h1>
      <div className="w-full flex flex-row flex-wrap justify-evenly mt-20 z-0">
        {TalkItems.map((item, idx) => (
          <TalkItem {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Talks;
