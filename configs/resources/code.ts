import { IResourceSection } from '../type';

// Config tutorials here
export const Code: IResourceSection[] = [
  {
    sectionName: "Developer tools",
    resources: [
      {
        name: `Trampoline, an ERC-4337-enabled browser extension wallet that takes care of the boilerplate so hackers can jump straight to experimenting with AA`,
        url: `https://github.com/eth-infinitism/trampoline`
      }  
    ]
  },
  {
    sectionName: "SDK & Libraries",
    resources: [
      {
        name: "0xpass/0xpass",
        url: `https://github.com/0xpass/0xpass`,
      },
      {
        name: "argentlabs/argent-x",
        url: `https://github.com/argentlabs/argent-x`,
      },
      {
        name: "bcnmy/biconomy-client-sdk",
        url: `https://github.com/bcnmy/biconomy-client-sdk`,
      },
      {
        name: "cupcakes-3/sdk",
        url: `https://github.com/cupcakes-3/sdk`,
      },
      {
        name: "eth-infinitism/bundler",
        url: `https://github.com/eth-infinitism/bundler`,
      },
      {
        name: "porco-rosso-j/zksync-aa-wallet-paymaster",
        url: `https://github.com/porco-rosso-j/zksync-aa-wallet-paymaster`,
      },
      {
        name: "zerodevapp/core",
        url: `https://github.com/zerodevapp/core`,
      },
      {
        name: "etherspot-sdk",
        url: `https://github.com/etherspot/etherspot-sdk`,
      },
      {
        name: "web3well/easy-web3",
        url: `https://github.com/web3well/easy-web3`,
      },
      {
        name: "safe-global/safe-core-sdk",
        url: `https://github.com/safe-global/safe-core-sdk`,
      },
    ],
  },
  {
    sectionName: "Smart Contracts (EVM)",
    resources: [
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
        name: "Safe",
        url: `https://github.com/safe-global/safe-contracts/`,
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
      {
        name: "Patch Wallet",
        url: `https://github.com/PaymagicXYZ/patch-base-account-contracts`,
      },
      {
        name: "Kernel (ZeroDev)",
        url: `https://github.com/zerodevapp/kernel`,
      },
    ],
  },
  {
    sectionName: `Bundlers`,
    resources: [
      {
        name: `Golang Implementation`,
        url: `https://github.com/stackup-wallet/stackup-bundler`
      },
      {
        name: `Python Implementation`,
        url: `https://github.com/candidelabs/Candide-bundler-and-paymaster-RPC`
      },
      {
        name: `Rust Implementation`,
        url: `https://github.com/Vid201/aa-bundler/ - blog(https://hackmd.io/@Vid201/aa-bundler-rust)`
      },
      {
        name: `TypeScript Implementation`,
        url: `https://github.com/eth-infinitism/bundler`
      },
      {
        name: `Skandha - Typescript Implementation`,
        url: `https://github.com/etherspot/skandha`
      }
    ]
  },
  {
    sectionName: `Starknet`,
    resources: [
      {
        name: `Guildly: An implementation for having guilds for on-chain games on Starknet.`,
        url: `https://github.com/Guildly/contracts`
      },
      {
        name: `Argent account contracts on Starknet`,
        url: `https://github.com/argentlabs/argent-contracts-starknet`
      },
      {
        name: `Multisig wallet on StarkNet`,
        url: `https://github.com/eqlabs/starknet-multisig/`
      },
      {
        name: `Another Multisig wallet on StarkNet`,
        url: `https://github.com/sambarnes/cairo-multisig`
      }
    ]
  },
  {
    sectionName: `Audits`,
    resources: [
      {
        name: `EIP-4337 – Ethereum Account Abstraction Audit - Part 1`,
        url: `https://blog.openzeppelin.com/eth-foundation-account-abstraction-audit/`
      },
      {
        name: `EIP-4337 – Ethereum Account Abstraction Audit - Part 2`,
        url: `https://blog.openzeppelin.com/eip-4337-ethereum-account-abstraction-incremental-audit/`
      }
    ]
  },
  {
    sectionName: `RPC Providers`,
    resources: [
      {
        name: `Account Abstraction RPC Providers`,
        url: `https://github.com/arddluma/awesome-list-rpc-nodes-providers#account-abstraction-rpc-providers`
      }
    ]
  }
];
