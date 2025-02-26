To support ERC-4337, wallets must implement a smart contract that is required to have two functions:

* `validateUserOp`, which takes a `UserOperation` as input. This function is supposed to verify the signature and nonce on the `UserOperation`, pay the fee and increment the nonce if verification succeeds, and throw an exception if verification fails.
* An op execution function, that interprets calldata as an instruction for the wallet to take actions. How this function interprets the calldata and what it does consequently is completely open-ended. However, we expect the most common behavior would be to parse the calldata as an instruction for the wallet to make one or more calls.

The ERC-4337 core team has implemented [`SimpleAccount.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/accounts/SimpleAccount.sol), a sample minimal account that extends [`BaseAccount.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/core/BaseAccount.sol), which implements the [`IAccount`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/interfaces/IAccount.sol) interface.
