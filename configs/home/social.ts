import twitter_icon from '@assets/icons/twitter.png';
import github_icon from '@assets/icons/github.png';
import discord_icon from '@assets/icons/discord.png';
import { StaticImageData } from 'next/image';

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
