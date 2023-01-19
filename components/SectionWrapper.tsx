import React, { Children, ReactNode } from 'react';

interface ISectionWrapper {
  id: string;
  title?: string;
  titleDirection?: 'left' | 'right';
  children: ReactNode;
}

export default function SectionWrapper({ id, title, titleDirection = 'left', children }: ISectionWrapper) {
  const titleStyle = titleDirection === 'left' ? '-ml-6' : '-right-2'; // text crop

  // const titleStyle = titleDirection === 'left' ? 'ml-0' : 'right-0'; // no text crop

  return (
    <div id={id} className="w-full flex flex-col justify-center relative mt-32">
      {title ? (
        <div
          className={`max-w-xs absolute text-white-100 text-3xl text-white opacity-10 font-bold ${titleStyle} overflow-visible`}>
          {title}
        </div>
      ) : null}
      <>{children}</>
    </div>
  );
}
