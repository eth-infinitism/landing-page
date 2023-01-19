import SectionWrapper from '@components/SectionWrapper';
import { SectionIDs } from '@utils/constants';
import React from 'react';

export default function FAQ() {
  return (
    <SectionWrapper id={SectionIDs.faq} title="FAQ" titleDirection="right">
      <div className="gradient-faq-bg h-96"></div>
    </SectionWrapper>
  );
}
