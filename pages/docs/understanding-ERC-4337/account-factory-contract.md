# Account Factory

In ERC-4337, an account factory is a contract that is able to deploy account contracts on behalf of users.

The ERC-4337 specification does not require a specific account factory implementation or interface. Instead `UserOperation` objects will contain the address of the account factory contract and execution calldata.

There are some restrictions on which OpCodes can be used during account creation. These restrictions are defined in the [ERC-4337 Specification](https://eips.ethereum.org/EIPS/eip-4337).

## Sample implementation

The ERC-4337 core team has implemented [`SimpleAccountFactory.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/SimpleAccountFactory.sol) as a sample minimal account factory that deploys `SimpleAccount` contracts.

If this factory is deployed via a Singleton Factory Pattern such as [ERC-2470](https://eips.ethereum.org/EIPS/eip-2470), the deployed account contracts will have a predictable address, which is useful for users interacting across different networks.

This is due to the use of `CREATE2` to deploy the account contracts, which allows the user to predict the address of the deployed account contract before it is deployed. The address can be determined prior to deployment by hashing the factory address, the salt, and the init code of the account contract. The Simple Account Factory offers a function to calculate the address of the deployed account contract.
