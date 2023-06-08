import { IResourceSection } from '../type';

// Config tutorials here
export const Code: IResourceSection[] = [
  {
    sectionName: "Getting started",
    resources: [
      {
        name: `Trampoline, an ERC-4337-enabled browser extension wallet that takes care of the boilerplate so hackers can jump straight to experimenting with AA`,
        url: `https://github.com/eth-infinitism/trampoline`
      },
      {
        name: `UserOps.js, A simple JS library for building ERC-4337 UserOperations`,
        url: `https://github.com/stackup-wallet/userop.js`
      },
    ]
  },
  {
    sectionName: "SDK & Libraries",
    resources: [
      {
        name: `UniPass SDK`,
        url: `https://www.unipass.id/`,
      },
      {
        name: "EtherSpot SDK",
        url: `https://etherspot.io/`,
      },
      {
        name: "ZeroDev SDK",
        url: `https://zerodev.app/`,
      },
      {
        name: "Biconomy SDK",
        url: `https://github.com/bcnmy/biconomy-client-sdk`,
      },
    ],
  },
  {
    sectionName: "Contracts of ERC-4337 Wallets",
    resources: [
      {
        name: "Kernel (ZeroDev)",
        url: `https://github.com/zerodevapp/kernel`,
      },
      {
        name: "Ambire Wallet",
        url: `https://github.com/AmbireTech/wallet/tree/development/contracts`,
      },
      {
        name: "Biconomy",
        url: `https://github.com/bcnmy/scw-contracts`,
      },
      {
        name: "BLS Wallet",
        url: `https://github.com/web3well/bls-wallet/tree/main/contracts`,
      },
      {
        name: "Candide Wallet",
        url: `https://github.com/candidelabs/CandideWalletContracts`,
      },
      {
        name: "Infinitism",
        url: `https://github.com/eth-infinitism/account-abstraction`,
      },
      {
        name: "Stackup",
        url: `https://github.com/stackup-wallet/stackup`,
      },
      {
        name: "Soul Wallet",
        url: `https://github.com/proofofsoulprotocol/soul-wallet-contract`,
      },
      {
        name: "Etherspot",
        url: `https://github.com/etherspot/etherspot-contracts/`,
      },
    ],
  },
  {
    sectionName: `Bundlers`,
    resources: [
      {
        name: `Stackup: Golang Implementation`,
        url: `https://github.com/stackup-wallet/stackup-bundler`
      },
      {
        name: `Candide: Python Implementation`,
        url: `https://github.com/candidelabs/Candide-bundler-and-paymaster-RPC`
      },
      {
        name: `Rust Implementation`,
        url: `https://github.com/Vid201/aa-bundler/`
      },
      {
        name: `Infinitism: TypeScript Implementation`,
        url: `https://github.com/eth-infinitism/bundler`
      },
      {
        name: `EtherSpot: Typescript Implementation`,
        url: `https://github.com/etherspot/skandha`
      }
    ]
  },
  {
    sectionName: `Audits`,
    resources: [
      {
        name: `OpenZepplin: Part 1`,
        url: `https://blog.openzeppelin.com/eth-foundation-account-abstraction-audit/`
      },
      {
        name: `OpenZepplin: Part 2`,
        url: `https://blog.openzeppelin.com/eip-4337-ethereum-account-abstraction-incremental-audit/`
      }
    ]
  }
];
