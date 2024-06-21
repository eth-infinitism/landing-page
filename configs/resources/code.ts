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
        name: `Building a custom wallet with Trampoline - a step-by-step guide`,
        url: `https://mirror.xyz/erc4337official.eth/r0Sxa_ncYJA8y7_YHeKz9cShDgfTNR1fVBolcBN7VZ4`
      },  
      {
        name: "Unlocking Account Abstraction - a workshop",
        url: `https://www.youtube.com/watch?v=H5c84HERmkM`,
      },
      {
        name: `Web3Auth Integration with UserOp.js Using Next.js`,
        url: `https://github.com/stackup-wallet/next-web3auth-userop-example`
      },
      {
        name: `Particle Network, 4337-Enabled Wallet-as-a-Service - a workshop`,
        url: `https://www.youtube.com/watch?v=BOAm3r10RC0`
      },
      {
        name: `LearnWeb3's Account Abstraction Course - A developer-focused course for deep-diving into ERC-4337 based Account Abstraction`,
        url: `https://learnweb3.io/courses/account-abstraction-course`
      }
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
      {
        name: "ioPay userop-swift",
        url: `https://github.com/iotexproject/userop-swift`,
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
        name: "ioPay Wallet",
        url: `https://github.com/iotexproject/account-abstraction-contracts`,
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
        url: `https://github.com/Vid201/silius/`
      },
      {
        name: `Infinitism: TypeScript Implementation`,
        url: `https://github.com/eth-infinitism/bundler`
      },
      {
        name: `EtherSpot: Typescript Implementation`,
        url: `https://github.com/etherspot/skandha`
      },
      {
        name: `Particle Network: TypeScript Implementation`,
        url: `https://github.com/Particle-Network/particle-bundler-server`
      },
      {
        name: `Transeptor: TypeScript Implementation`,
        url: `https://github.com/transeptorlabs/transeptor-bundler`
      },
    ]
  },
  {
    sectionName: `4337 Explorers`,
    resources: [
      {
        name: `JiffyScan`,
        url: `https://www.jiffyscan.xyz/`
      },
      {
        name: `OpScan`,
        url: `https://op.scope.sh`
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
