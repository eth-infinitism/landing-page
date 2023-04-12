# Reputation scoring and throttling/banning for global entities
`UserOperation`'s storage access rules prevent them from interfering with each other. But "global" entities - paymasters, factories and aggregators are accessed by multiple `UserOperations`, and thus might invalidate multiple previously-valid `UserOperations`.
## Staking
To prevent abuse, we throttle down (or completely ban for a period of time) an entity that causes invalidation of a large number of `UserOperations` in the mempool. To prevent such entities from carrying out [sybil-attacks](https://en.wikipedia.org/wiki/Sybil_attack), the protocol requires them to stake with the system, and thus make such DoS attacks very expensive. Note that this stake is never slashed, and can be withdrawn at any time (after an unstake delay period).
When staked, an entity is also allowed to use its own associated storage, in addition to sender's associated storage.
The stake value is not enforced on-chain, but specifically by each node while simulating a transaction. The stake is expected to be above `MIN_STAKE_VALUE`, and unstake delay above `MIN_UNSTAKE_DELAY`. The value of `MIN_UNSTAKE_DELAY` is 84600 (one day). The value of `MIN_STAKE_VALUE` is determined per chain, and specified in the "bundler specification test suite"
## Un-staked entities
Under the following special conditions, unstaked entities still can be used:
* An entity that doesn't use any storage at all, or only the sender's storage (not the entity's storage - that does require a stake)
* If the `UserOperation` doesn't create a new account (that is `initCode` is empty), then the entity may also use [storage associated with the sender](../bundlers/running-a-bundler.md)
* A paymaster that has a `postOp()` method (that is, `validatePaymasterUserOp` returns `“context”`) must be staked
