# Account Contract

In ERC-4337, an account is a contract that is able to hold user assets and interact with contracts on the user's behalf.

ERC-4337 does not require a specific account contract implementation. However, it does require that account contracts implement a specific interface.
This interface is defined in the [ERC-4337 Specification](https://eips.ethereum.org/EIPS/eip-4337), and contains only a single function, `validateUserOp`, which is used to verify the signature of a `UserOperation`.

The interface is defined as follows:

```solidity
import "./PackedUserOperation.sol";
interface IAccount {
    function validateUserOp(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 missingAccountFunds
    ) external returns (uint256 validationData);
}
```

The `validateUserOp` function is called by the `EntryPoint` contract to verify the signature of a `UserOperation`. The `UserOperation` is passed as a `PackedUserOperation` object, which is a tightly packed representation of the `UserOperation` object. The `userOpHash` is the hash of the `UserOperation` object, and is used to verify the signature.

The `missingAccountFunds` parameter is the amount of funds that are required to be deposited into the `EntryPoint` in order to cover the maximum costs to execute the transaction. This value will be `0` when a paymaster is used.

## Transaction execution

ERC-4337 does not require a specific interface for executing transactions. This is because the transaction execution calldata is defined in the `UserOperation` object, and is not dependent on the account contract.

## Authentication and authorization

The precise mechanism for authentication and authorization is left to the account contract implementation. However, the account contract must be able to verify the signature of a `UserOperation` using the `validateUserOp` function.

## Nonces and replay protection

Nonce and replay protection is provided by the EntryPoint and there is no requirement for the Account to implement their own nonce or replay protection.

## Sample implementation

The ERC-4337 core team has implemented [`SimpleAccount.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/SimpleAccount.sol), a sample minimal account that extends [`BaseAccount.sol`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/core/BaseAccount.sol), which implements the [`IAccount`](https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/interfaces/IAccount.sol) interface.

The `SimpleAccount` contract is a minimal account contract that is able to hold user assets and interact with contracts on the user's behalf. It is expected to be deployed as a proxy via the `SimpleAccountFactory` contract.

This account contract has a single EOA based owner that can execute any transaction. The owner must sign the `UserOperation` using an `ECDSA` signature of the `UserOperation` hash. More information about these signature can be found in [OpenZeppelin's ECDSA library](https://docs.openzeppelin.com/contracts/2.x/api/cryptography#ECDSA).

Execution of the `UserOperation` is done by calling the `execute` function, which is able to execute any transaction on behalf of the user. The `execute` function is able to call any contract and pass any calldata to the contract. This `execute` function can only be called by the `EntryPoint` contract, as so will only be executed once the `UserOperation` has been validated. See the interface for the execute function below.

```solidity
interface ISimpleAccount {
    function execute(address dest, uint256 value, bytes calldata func) external;
}
```
