import React from 'react';

export default function Brand() {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="p-12 bg-white/[0.7] rounded-3xl w-full md:w-auto">
        <div>
          <h1 className="font-bold text-2xl mb-12">
            ERC-4337: <br />
            Account Abstraction
          </h1>
          <p className="leading-loose max-w-2xl">
            An account abstraction proposal which completely avoids the need for consensus-layer protocol changes. Instead
            of adding new protocol features and changing the bottom-layer transaction type, this proposal introduces a
            higher-layer pseudo-transaction object called a UserOperation. Users send UserOperation objects into a
            new separate mempool. Bundlers package up a set of these objects into a single transaction by making a call to a
            special contract, and that transaction then gets included in a block.
          </p>
        </div>
        <div className="flex flex-col md:flex-row pt-10 gap-4 md:mt-0">
          <a className="button w-full md:w-auto button-primary" href="#join">Join The Community</a>
          <a className="button w-full md:w-auto" href="/docs">Read The Docs</a>
        </div>
      </div>
    </section>
  );
}
