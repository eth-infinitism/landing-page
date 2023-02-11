import React from 'react';

const What = () => {
  return (
    <div className="note w-full py-20 px-56 text-center">
      <h1 className="title mb-6">What is Account Abstraction?</h1>
      <p>
        Account abstraction moves crypto from the current approach of a single EOA account, where one can lose
        everything with a small mistake, to a future where an account can be tailored to their needs using smart
        contracts. 
        <br />
        <br /> The shift from EOAs to smart contract wallets with arbitrary verification logic paves the way for a
        series of improvements to wallet designs, as well as reducing complexity for end users.
      </p>
    </div>
  );
};

export default What;
