# UserOperation
All components of ERC-4337 revolve around a pseudo-transaction object called a `UserOperation` which is used to execute actions through a smart contract account. This isn't to be mistaken for a regular transaction type.


|Field|Type|Description|
|------|----|-----------|
|`sender`|`address`|The address of the smart contract account|
|`nonce`|`uint256`|Anti-replay protection; also used as the salt for first-time account creation|
|`initCode`|`bytes`|Code used to deploy the account if not yet on-chain|
|`callData`|`bytes`|Data that's passed to the sender for execution|
|`callGasLimit`|`uint256`|Gas limit for execution phase|
|`verificationGasLimit`|`uint256`|Gas limit for verification phase|
|`preVerificationGas`|`uint256`|Gas to compensate the bundler|
|`maxFeePerGas`|`uint256`|Maximum fee per gas (similar to [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) `max_fee_per_gas`)|
|`maxPriorityFeePerGas`|`uint256`|Maximum priority fee per gas (similar to EIP-1559 `max_priority_fee_per_gas`)|
|`paymasterAndData`|`bytes`|Paymaster Contract address and any extra data required for verification and execution (empty for self-sponsored transaction)|
|`signature`|`bytes`|Used to validate a UserOperation along with the nonce during verification|
		
## UserOperation mempool
Instead of going to the traditional public mempool that hosts pending transactions for EOAs, `UserOperation`s will instead be sent to the `UserOperation` mempool: a dedicated, higher-level mempool specifically for `UserOperation`s.

Bundlers listen to the `UserOperation` mempool and bundle multiple `UserOperation`s together into a "classic" transaction. They first verify the validity of the `UserOperation`s using the relevant EntryPoint methods. The bundler then includes that multi-`UserOperation` transaction in the next block they propose to the network. To clarify, that transaction isn't sent to the regular mempool. Bundlers are either block builders themselves, or work together with block builders. 

