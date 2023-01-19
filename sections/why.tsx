import SectionWrapper from '@components/SectionWrapper';
import { IWhyItem, SectionIDs, WhyItemsContent } from '@utils/constants';
import React from 'react';

const WhyItem = ({ title, description }: IWhyItem) => {
  return (
    <div className="flex flex-col font-bold text-white">
      <h1 className="text-lg opacity-60">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default function Why() {
  return (
    <SectionWrapper id={SectionIDs.why} title="WHY">
      <div className="grid grid-cols-1 gap-y-12 w-1/2 ml-[600px] max-h-[490px] overflow-y-scroll">
        {WhyItemsContent.map((item, idx) => (
          <WhyItem {...item} key={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}
