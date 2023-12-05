# Architecture

There are several main components to ERC-4337: `UserOperation`, `Bundler`, `EntryPoint Contract`, `Account Contract`, `Account Factory Contract` and `Paymaster Contract`.

* `UserOperations` are pseudo-transaction objects that are used to execute transactions with contract accounts. These are created by the dapp. Wallets should be able to translate regular transactions into `UserOperations` so dapps' frontends don't need to change anything to support ERC-4337
* `Bundlers` are actors that package UserOperations from a mempool and send them to the EntryPoint contract on the blockchain. For more detailed documentation on bundlers head on to [this part](https://www.erc4337.io/docs/bundlers/introduction) of the documentation.
* `EntryPoint` is a smart contract that handles the verification and execution logic for transactions.
Account Contracts are smart contract accounts owned by a user.
* `Account Contract` is the smart contract wallet of a user. Wallet developers are required to implement at least two custom functions - one to verify signatures, and another to process transactions.
* `Factory Contract` - When using a wallet for the first time, the `initCode` field of the `UserOperation` is used to specify creation of the smart contract wallet. This is used concurrently with the first actual operation of the wallet (in the same `UserOperation`). Therefore, wallet developers also need to implement the account factory contract (for example: [`BLSAccountFactory.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/bls/BLSAccountFactory.sol)). Creating new wallets should use the CREATE2 method to ensure the determinacy of generated addresses.
* `Paymaster Contracts` are optional smart contract accounts that can sponsor gas fees for Account Contracts, or allow their owners to pay for those fees with ERC-20 tokens instead of ETH. For more detailed documentation on paymasters head on to [this part](https://www.erc4337.io/docs/paymasters/introduction) of the documentation.

In practice the process is complex. The typical lifecycle of a transaction looks like this:

![Submit UserOperation to bundler flow](./4337%20Submit%20UserOperation%20to%20bundler.svg)
