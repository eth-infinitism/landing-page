import { IWhyItem, WhyItems } from '@configs/home/why';
import Image from 'next/image';
import React from 'react';

const WhyItem = ({ title, description, image }: IWhyItem) => {
  return (
    <div className="flex flex-col items-center text-black text-center w-full">
      <Image src={image} alt="" width={145} height={145} className="rounded-full mt-3 " />
      <h1 className="font-bold text-base">{title}</h1>
      <p className="text-xxs mt-2">{description}</p>
    </div>
  );
};

export default function Why() {
  return (
    <section className="flex flex-row gap-20 items-center">
      <div className="max-w-md">
        <h1 className="title mb-14">Why ERC-4337?</h1>
        <p>
          Co-authored by Vitalik Buterin, Yoav Weiss, Kristof Gazso, Namra Patel, Dror Tirosh, Shahaf Nacson and Tjaden
          Hess, ERC-4337 introduces account abstraction without any modifications to the core protocol. It achieves so
          by replicating the functionality of the transactions mempool in a higher-level system. However, instead of
          transactions, users send UserOperation objects to Ethereum nodes, and they package a set of these objects into
          a single transaction that gets included in the Ethereum chain.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-14">
        {WhyItems.map(item => (
          <WhyItem {...item} />
        ))}
      </div>
    </section>
  );
}
