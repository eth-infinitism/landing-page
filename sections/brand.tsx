import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import illustration from '@assets/home_illustration.svg';

export default function Brand() {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1 className="font-bold text-2xl mb-12">
          ERC-4337: <br />
          Account Abstraction
        </h1>
        <p className="max-w-2xl">
          An account abstraction proposal which completely avoids the need for consensus-layer protocol changes. Instead
          of adding new protocol features and changing the bottom-layer transaction type, this proposal introduces a
          higher-layer pseudo-transaction object called a UserOperation. Users send UserOperation objects into a
          separate mempool. Bundlers package up a set of these objects into a transaction making a handleOps() call to a
          special contract, and that transaction then gets included in a block.
        </p>

        <div className="flex flex-row mt-10 gap-5">
          <a className="button button-primary">Join Community</a>
          <a className="button">Our Doc</a>
        </div>
      </div>
      <Image src={illustration} alt="illustration" />
    </div>
  );
}
