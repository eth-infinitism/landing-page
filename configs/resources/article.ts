import { IResourceSection } from '../type';

// Config articles here
export const Articles: IResourceSection[] = [
  {
    sectionName: `Introduction to Accounts`,
    resources: [
      {
        name: `Ethereum Accounts`,
        url: `https://ethereum.org/en/developers/docs/accounts/`,
      },
    ],
  },
  {
    sectionName: `Introduction to Account Abstraction (AA)`,
    resources: [
      { name: `EIP 4337 website from Infinitism`, url: `https://eip4337.com/en/latest/` },
      { name: `The History and Future of Account Abstraction by Nethermind`, url: `https://medium.com/nethermind-eth/the-history-and-future-of-account-abstraction-10cb097ebdc8` },
      { name: `Primer on AA by Argent`, url: `https://www.argent.xyz/blog/wtf-is-account-abstraction/` },
      { name: `Managing Complexity Via AA - A Simplified Future by Etherspot`, url: `https://etherspot.io/blog/account-abstraction-a-simplified-future/` },
      { name: `Account Abstraction for Everyone Else by cami`, url: `https://camiinthisthang.substack.com/p/account-abstraction-for-everyone` }
    ],
  },
  {
    sectionName: `Ethereum Improvement Processes (EIPs)`,
    resources: [
      { name: `EIP-5792: Wallet Function Call API`, url: `https://eips.ethereum.org/EIPS/eip-5792` },
      { name: `EIP-5003: Insert Code into EOAs with AUTHUSURP`, url: `https://eips.ethereum.org/EIPS/eip-5003` },
      { name: `EIP-4337: Account Abstraction via Entry Point Contract specification`, url: `https://eips.ethereum.org/EIPS/eip-4337` }
    ]
  },
  {
    sectionName: `EIP Articles & Discussions`,
    resources: [
      { name: `Account Abstraction EIP:2938 by Status`, url: `https://our.status.im/account-abstraction-eip-2938/` },
      { name: `ERC 4337: account abstraction without Ethereum protocol changes by Vitalik`, url: `https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a` },
      { name: `We should be moving beyond EOAs, not enshrining them even further (EIP 3074-related)`, url: `https://ethereum-magicians.org/t/we-should-be-moving-beyond-eoas-not-enshrining-them-even-further-eip-3074-related/6538` }
    ]
  },
  {
    sectionName: `Current Landscape / Thoughts / Threads`,
    resources: [
      {
        name: `A brief note on the future of accounts`,
        url: `https://ethresear.ch/t/a-brief-note-on-the-future-of-accounts/12395`
      },
      {
        name: `AA as Ethereum's broadband moment, by @loaf`,
        url: `https://mirror.xyz/proofedloaf.eth/uJYBCOXoq0YfhKh0HrfwbA4yNV-jbvoeFiOnXDhs2Gc`
      },
      {
        name: `Account Abstraction is NOT coming`,
        url: `https://safe.mirror.xyz/9KmZjEbFkmI79s28d9xar6JWYrE50F5AHpa5CR12YGI`
      },
      {
        name: `Limitations of AA by Pete J Kim P1`,
        url: `https://twitter.com/petejkim/status/1529604590882234368`
      },
      {
        name: `Limitations of AA by Pete J Kim P2`,
        url: `https://twitter.com/petejkim/status/1527027583254241280`
      },
      {
        name: `Random thoughts on Account Abstraction`,
        url: `https://hackmd.io/@s0lness/BJUb16Yo9`
      },
      {
        name: `The current state of Account Abstraction`,
        url: `https://mirror.xyz/plusminushalf.eth/MIThq8Ford5O3b0hDA4LR_tsRteDfazRfpVQXOR3Euk`
      },
      {
        name: `Starkware Discussion on AA P1`,
        url: `https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781`
      },
      {
        name: `Starkware Discussion on AA P2`,
        url: `https://community.starknet.io/t/starknet-account-abstraction-model-part-2/839`
      },
      {
        name: `Why we need wide adoption of social recovery wallets`,
        url: `https://vitalik.ca/general/2021/01/11/recovery.html`
      },
      {
        name: `Seedless Self-Custody: On MPC and Smart Contract Wallets`,
        url: `https://medium.com/1kxnetwork/wallets-91c7c3457578`
      },
      {
        name: `Using EIP-2535 Diamonds to implement the smart contract wallet for EIP-4337`,
        url: `https://ethereum-magicians.org/t/erc-4337-account-abstraction-via-entry-point-contract-specification/7160/53`
      },
      {
        name: `Unpacking ERC-4337`,
        url: `https://frontier.tech/unpacking-erc-4337`
      },
      {
        name: `Unified ERC 4337 Mempool`,
        url: `https://notes.ethereum.org/@yoav/unified-erc-4337-mempool`
      }
    ]
  },
  {
    sectionName: `Applications`,
    resources: [
      {
        name: `How to Make On-Chain Gaming Competitive: 'Session Keys' [Part 1]`,
        url: `https://mirror.xyz/matchboxdao.eth/VXOvLKIvfXHP-cusKHw55zqlHpvvWwzh_fqm6j48Yek`
      },
      {
        name: `What Can You Do with Account Abstraction?`,
        url: `https://blog.zerodev.app/what-can-you-do-with-account-abstraction/`
      }
    ]
  },
  {
    sectionName: `Twitter Threads`,
    resources: [
      {
        name: `zkSync2.0 x Account Abstraction`,
        url: `https://twitter.com/zksync/status/1584924198907977728`
      },
      {
        name: `The inevitable adoption of account abstraction `,
        url: `https://twitter.com/Crypto__Jesus_/status/1606307436406636547`
      },
      {
        name: `why hasn't crypto taken off?`,
        url: `https://twitter.com/divine_economy/status/1605230807299543041`
      },
      {
        name: `The concept and dynamics of Abstraction Account(AA) development`,
        url: `https://twitter.com/0xYolo/status/1584447321147789317`
      },
      {
        name: `EIP-4337 Account Abstraction`,
        url: `https://twitter.com/_nishil_/status/1579550419944058880`
      },
      {
        name: `How to try to scam your scammer`,
        url: `https://twitter.com/0x_ARK/status/1553395019884535809`
      },
      {
        name: `What exactly is AA, and what's the use case there? A thread for beginners into AA`,
        url: `https://twitter.com/Mulan0x/status/1583813663986577408`
      },
      {
        name: `decentralized fee market`,
        url: `https://twitter.com/VitalikButerin/status/1576199517434949634`
      },
      {
        name: `MPC vs smart contract wallets: comparison thread`,
        url: `https://twitter.com/Ivshti/status/1529474442622947328`
      },
      {
        name: `4337 Misconceptions`,
        url: `https://twitter.com/johnrising_/status/1619166915624112131`
      },
      {
        name: `What is a zkSNARK-based AccountAbstraction wallet?`,
        url: `https://twitter.com/iotex_dev/status/1699511884993495054`
      }
    ]
  }
];
