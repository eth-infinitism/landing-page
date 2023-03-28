# Introduction
A bundler is the core infrastructure component that allows account abstraction to work on any EVM network without requiring any changes to the protocol. Its purpose is to work with a new mempool of `UserOperations` and get the transaction included on-chain.

## Security considerations
When reading the ERC specs, you'll notice that there are many rules a bundler must follow. Each of these rules has been extensively debated and discussed by security researchers and builders within the Ethereum ecosystem.

One of the bundler's main jobs is to comply with these rules to prevent all possible DoS attack vectors. 
These include everything from basic sanity checks that make sure a `UserOperation` is structurally sound to more in-depth tracing for banned opcodes and storage access to make sure bundles cannot be censored once submitted to the network.

Similar to Ethereum clients, all bundler implementations are expected to pass a test suite to ensure their compliance and that they won't fragment the mempool. Yoav Weiss wrote [an article](https://notes.ethereum.org/@yoav/unified-erc-4337-mempool) explaining the importance of this point.

## UserOperation mempool
The canonical mempool for EIP-4337 is decentralized and is made up of a permissionless P2P network of independent bundlers. 


