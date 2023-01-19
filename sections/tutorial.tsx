import SectionWrapper from '@components/SectionWrapper';
import { SectionIDs } from '@utils/constants';
import React from 'react';

const TutorialEntry = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center w-96 h-[507px] rounded-3xl bg-[#373737] py-16">
      <div className="text-white opacity-60 font-bold text-base">{title}</div>
    </div>
  );
};

export default function Tutorial() {
  return (
    <SectionWrapper id={SectionIDs.tutorial}>
      <span className="gradient-title text-center">Getting Started</span>
      <div className=" mt-16 m-auto flex flex-row justify-between  gap-20">
        <TutorialEntry title="For wallet User" />
        <TutorialEntry title="For wallet developer" />
      </div>
    </SectionWrapper>
  );
}
