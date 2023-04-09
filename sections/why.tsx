import { IWhyItem, WhyItems } from '@configs/home/why';
import Image from 'next/image';
import React from 'react';

const WhyItem = ({ title, description, image }: IWhyItem) => {
  return (
    <div className="flex flex-col items-center text-black text-center w-full">
      <Image src={image} alt="" width={145} height={145} className="rounded-full mt-3 " />
      <h1 className="font-bold text-base">{title}</h1>
      <p className="text-s mt-2">{description}</p>
    </div>
  );
};

export default function Why() {
  return (
    <section className="block lg:flex flex-row gap-20 items-center text-center">
      <div className="lg:max-w-md">
        <h1 className="title mb-14 text-center">Why ERC-4337?</h1>
        <p className="mb-4">
          Co-authored by Vitalik Buterin, Yoav Weiss, Kristof Gazso, Dror Tirosh, Shahaf Nacson and Tjaden
          Hess, ERC-4337 introduces account abstraction without any modifications to the core protocol. It achieves so
          by replicating the functionality of the transactions mempool in a higher-level system. However, instead of
          transactions, users send UserOperation objects to Ethereum nodes, and they package a set of these objects into
          a single transaction that gets included in the Ethereum chain.
        </p>
        <p className="mb-4">
          Through ERC-4337 Account Abstraction is becoming widespread! Join the numerous projects in the ecosystem 
          that understand that if we want to onboard the next billion users, accounts can't be forced to choose between
          security and usabilty - they must offer users both.
        </p>
        <p>
          ERC-4337 takes usability even one step further by introducing paymasters. This decentralized mechanism enables users to pay gas 
          fees using ERC-20 tokens instead of ETH or request a third party to sponsor their gas fees altogether.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2 lg:grid-rows-2 gap-y-6 gap-x-14">
        {WhyItems.map(item => (
          <WhyItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
