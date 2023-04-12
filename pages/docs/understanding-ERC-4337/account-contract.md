# Account Contract

With EOAs, the address is consistent across all EVM networks. As long as the user has access to the private key they can access the same address on any network. Ideally, we would like to create the same user experience with contract accounts.

Users should be able to deterministically know their account address and keep it consistent on every EVM network irrespective of whether the account has been deployed or not. This means that they can generate an account and start sending funds to it with the knowledge that they'll be able to control those funds at any time, provided they have the correct verification method.

ERC-4337 does this by using the `CREATE2` opcode through a [Singleton Factory](https://eips.ethereum.org/EIPS/eip-2470) - the [Account Factory contract](./account-factory-contract.md). 
For example, here is how you can calculate a `CREATE2` address with ethers.js:

```
const accountAddress = ethers.utils.getCreate2Address(
  fromAddress,
  salt,
  initCodeHash
);
```

The contract address would be determined by `fromAddress`, `salt`, and `initCodeHash`.

`fromAddress`
The fromAddress is the address of the Singleton Factory. This factory receives the `salt` and `initCode` as input and uses CREATE2 to deploy the contract on-chain.

Because the Account Factory contract address is the same on every chain, we can rely on it to also deploy our smart contract code on all networks under the same address too.

`salt`
For an ERC-4337 account, the salt parameter is the first nonce value. This is most likely 0.

`initCodeHash`
The initCode is passed along as a field on the UserOperation is the smart contract code and arguments used for initializing it. It is hashed using keccak256 to derive the initCodeHash.



## Authentication and authorization

## Nonces and replay protection