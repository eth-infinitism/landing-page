# EntryPoint Contract
The EntryPoint contract (which also includes a couple of others, such as StakeManager) is a singleton.  There should only be one implementation because only one instance should exist on each chain.

This contract verifies and executes the bundles of UserOperations sent to it.

The use of a single EntryPoint contract simplifies the logic used by smart contract wallets, making sure the more complicated smart contract functions needed to ensure safety are tried and battle tested. This allows wallets to  focus primarily on the core smart account funcitonality (e.g. signature validation rules).

Bundlers/Clients should whitelist their supported EntryPoint contract addresses. 

The latest version of the contract (0.7.0) is deployed at the address [0x0000000071727de22e5e9d8baf0edac6f37da032](https://contractscan.xyz/contract/0x0000000071727de22e5e9d8baf0edac6f37da032) across all chains.

The source code of the contract is available in the [`account-abstraction` repository](https://github.com/eth-infinitism/account-abstraction).
