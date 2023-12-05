import { IResourceSection } from '../type';

// Config tutorials here
export const Tutorials: IResourceSection[] = [
  {
    sectionName: `Comprehensive guides`,
    resources: [
      {
        name: `Stackup's Guide to Account Abstraction`,
        url: 'https://docs.stackup.sh/docs/account-abstraction',
      },
      {
        name: `Alchemy's Account Abstraction Learning Hub`,
        url: `https://www.alchemy.com/learn/account-abstraction`,
      },
      {
        name: "Unlocking Account Abstraction - a workshop",
        url: `https://www.youtube.com/watch?v=H5c84HERmkM`,
      },
    ],
  },
  {
    sectionName: 'Specific guides',
    resources: [
      {
        name: `Building a custom wallet with Trampoline - a step-by-step guide`,
        url: `https://mirror.xyz/erc4337official.eth/r0Sxa_ncYJA8y7_YHeKz9cShDgfTNR1fVBolcBN7VZ4`
      },
      {
        name: `Web3Auth Integration with UserOp.js Using Next.js`,
        url: `https://github.com/stackup-wallet/next-web3auth-userop-example`
      }
    ],
  },
];
