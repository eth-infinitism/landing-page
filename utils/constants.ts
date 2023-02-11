import twitter_icon from '@assets/icons/twitter.png';
import github_icon from '@assets/icons/github.png';
import discord_icon from '@assets/icons/discord.png';
import stackup_icon from '@assets/logos/stackup.png';
import { StaticImageData } from 'next/image';

export interface INavigationItem {
  label: string;
  link: string;
}

export const NavigationItems: INavigationItem[] = [
  {
    label: 'Documentation',
    link: '/docs',
  },
  {
    label: 'Resources',
    link: '/resources',
  },
  {
    label: 'Bundlers',
    link: '/bundlers',
  },
  {
    label: 'Paymasters',
    link: '/paymasters',
  },
];

export interface ISocialItem {
  icon: StaticImageData;
  url: string;
}

export const SocialItems = [
  {
    icon: twitter_icon,
    url: 'https://github.com/eth-infinitism/account-abstraction', // TODO: change to twitter url
  },
  {
    icon: github_icon,
    url: 'https://github.com/eth-infinitism/account-abstraction',
  },
  {
    icon: discord_icon,
    url: 'https://github.com/eth-infinitism/account-abstraction', // TODO: change to discord url
  },
];

export interface ILinkItem {
  name: string;
  url: string;
}

export const Links = [
  {
    name: 'Resources',
    url: '/',
  },
  {
    name: 'Resources A',
    url: '/',
  },
  {
    name: 'Resources B',
    url: '/',
  },
  {
    name: 'Resources C',
    url: '/',
  },
];

export interface IWhyItem {
  title: string;
  description: string;
  image: StaticImageData | string;
}

export const WhyItems: IWhyItem[] = [
  {
    title: 'Decentralization',
    description:
      'ERC-4337 enables account abstraction while preserving the ethos of the ecosystem by offering an anti-fragile approach that has no single point of failure and is censorship resistant',
    image: '',
  },
  {
    title: 'No hard fork ',
    description:
      'Thanks to its design of the higher-level UserOp mempool, ERC-4337 can be adopted without any consensus protocol changes',
    image: '',
  },
  {
    title: '“Choose a key, any key…”',
    description:
      'Support for signature schemes that are more efficient (Schnorr, BLS), user friendly (smartphone secure enclave) as well as quantum-safe ones (Lamport, Winternitz)',
    image: '',
  },
  {
    title: 'Gas abstraction',
    description:
      'Paymasters remove UX friction and open up new paradigms, by allowing users to pay network fees with ERC-20 tokens instead of ETH, or even request any third party to cover those fees altogether.',
    image: '',
  },
];

export interface IPartnerItem {
  logo: StaticImageData | string;
  link: string;
}

// TODO: ask mingshan for new logo
export const PartnerItems: IPartnerItem[] = [
  {
    logo: stackup_icon, 
    link: 'https://nethermind.io/account-abstraction/',
  },
  {
    logo: stackup_icon,
    link: 'https://www.stackup.sh/',
  },
  {
    logo: stackup_icon,
    link: 'https://www.candidewallet.com/',
  },
  {
    logo: stackup_icon,
    link: 'https://www.argent.xyz/blog/wtf-is-account-abstraction/ ',
  },
];
