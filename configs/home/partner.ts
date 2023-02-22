import { StaticImageData } from 'next/image';
import stackup_icon from '@assets/logos/stackup.png';

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
