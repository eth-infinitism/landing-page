import { ITalkItem, TalkItems } from '@configs/home/talks';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const TalkItem = ({ title, subtitle, url }: ITalkItem) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <div className="w-80 overflow-hidden bg-white rounded-xl">
      <ReactPlayer url={url} width={320} height={208} />
      <div title={`${title}: ${subtitle}`} className="text-left block px-5 py-3">
        <div className="font-bold text-base">{title}</div>
        <div className="text-xs truncate">{subtitle}</div>
      </div>
    </div>
  ) : null;
};

const Talks = () => {
  return (
    <section className="w-full text-center justify-center relative">
      <h1 className="title">“Talkin' about 4337”</h1>
      <div className="w-full flex flex-row flex-wrap justify-evenly mt-20 z-0 gap-x-8 gap-y-4">
        {TalkItems.map((item, idx) => (
          <TalkItem {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Talks;
