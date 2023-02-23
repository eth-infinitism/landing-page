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
      <div className="text-left block px-5 py-3">
        <div className="font-bold text-base truncate">{title}</div>
        <div className="text-xs truncate">{subtitle}</div>
      </div>
    </div>
  ) : null;
};

const Talks = () => {
  return (
    <section className="w-full text-center relative">
      <h1 className="title">“Talking about 4337”</h1>
      <div className="w-full flex flex-row flex-wrap justify-evenly mt-20 z-0 gap-y-7">
        {TalkItems.map((item, idx) => (
          <TalkItem {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Talks;
