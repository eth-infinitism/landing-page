# EntryPoint Contract
The EntryPoint contract (which also includes a couple of others, such as StakeManager) is a singleton.  There should only be one implementation because only one instance should exist on each chain.

This contract verifies and executes the bundles of UserOperations sent to it.

The use of a single EntryPoint contract simplifies the logic used by smart contract wallets, making sure the more complicated smart contract functions needed to ensure safety are tried and battle tested. This allows wallets to  focus primarily on the core smart account funcitonality (e.g. signature validation rules).

Bundlers/Clients should whitelist their supported EntryPoint contract addresses. 