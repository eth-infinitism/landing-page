import SectionWrapper from '@components/SectionWrapper';
import React from 'react';
import img1 from '@assets/soulwallet1.png';
import img2 from '@assets/soulwallet2.png';
import Image from 'next/image';
import { SectionIDs } from '@utils/constants';

export default function Examples() {
  return (
    <SectionWrapper id={SectionIDs.examples} title="Soul Wallet">
      <div className="gradient-example-bg w-full h-full"></div>

      <div className="flex flex-row w-3/4 self-center justify-between gap-32">
        <div className="text-white font-bold flex-1 pb-16">
          <h1 className=" opacity-60 text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur. Sed sem accumsan velit sit risus
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Quis pellentesque arcu habitasse non id. Consequat non orci sodales
            sem auctor non arcu velit. Odio pulvinar ut ipsum accumsan mattis eget gravida nibh. Urna metus dictumst
            consectetur turpis faucibus pharetra fringilla fusce. Varius accumsan sit quis diam. Natoque pharetra montes
            faucibus odio euismod consequat tristique vulputate. Quis consectetur at pellentesque eros libero faucibus
            pellentesque posuere. Suscipit fames mauris eu cursus sapien. Fusce fermentum odio urna vehicula sagittis
            convallis velit neque. Arcu est suspendisse tellus ac pretium purus tristique volutpat. Id neque etiam lacus
            neque viverra mauris.
          </p>
        </div>
        <div className="relative flex-1 flex-row">
          <Image
            src={img2}
            alt="SoulWallet Demo Picture 2/2"
            className="absolute bottom-0 left-0 z-10"
            width={360}
            height={580}
          />
          <Image
            src={img1}
            alt="SoulWallet Demo Picture 1/2"
            className="absolute bottom-0 left-16"
            width={360}
            height={380}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
