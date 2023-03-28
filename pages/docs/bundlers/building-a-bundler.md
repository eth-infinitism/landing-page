# Building a bundler

If you want to build your own bundler, it's crucial that it passes all the tests covered in our test suite. More on this in the [testing a bundler](./testing-a-bundler) section.
A good reference point to start with is our basic implementations of a bundler. This bundler focuses on being compliant, not on being fast.

## Infinitism reference bundler

The repo for this bundler can be found here: [https://github.com/eth-infinitism/bundler](https://github.com/eth-infinitism/bundler)

This is a reference implementation for a bundler, implementing the full EIP-4337 RPC calls (both production and debug calls), required to pass the [bundler-spec-tests](https://github.com/eth-infinitism/bundler-spec-tests) test suite.

To build this bundler on your machine, please follow the instruction of the [repository README](https://github.com/eth-infinitism/bundler#readme)