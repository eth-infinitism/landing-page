import { StaticImageData } from 'next/image';
import stackup_icon from '@assets/logos/stackup_400x400.jpeg';
import unipass_icon from '@assets/logos/unipass_400x400.jpeg';
import biconomy_icon from '@assets/logos/biconomy_400x400.jpeg';
import alchemy_icon from '@assets/logos/alchemy_400x400.png';
import zkSync_icon from '@assets/logos/zkSync_400x400.jpeg';
import EF_icon from '@assets/logos/EF_400x400.jpeg';
import nethermind_icon from '@assets/logos/nethermind_400x400.jpeg';

export interface IPartnerItem {
  logo: StaticImageData | string;
  link: string;
}

// TODO: ask mingshan for new logo
export const PartnerItems: IPartnerItem[] = [
  {
    logo: EF_icon,
    link: 'https://www.ethereum.org/', 
  },
  {
    logo: stackup_icon,
    link: 'https://www.stackup.sh/', 
  },
  {
    logo: nethermind_icon,
    link: 'https://nethermind.io/', 
  },
  {
    logo: alchemy_icon,
    link: 'https://zksync.io/',
  },
  {
    logo: biconomy_icon,
    link: 'https://www.biconomy.io/', 
  },
  {
    logo: zkSync_icon,
    link: 'https://zksync.io/',
  },
  {
    logo: unipass_icon,
    link: 'https://www.unipass.id/',
  },
];
