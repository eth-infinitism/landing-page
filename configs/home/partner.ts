import { StaticImageData } from 'next/image';
import stackup_icon from '@assets/logos/stackup.jpeg';
import unipass_icon from '@assets/logos/unipass.jpeg';
import biconomy_icon from '@assets/logos/biconomy.jpeg';
import alchemy_icon from '@assets/logos/alchemy.png';
import zkSync_icon from '@assets/logos/zkSync.jpeg';
import EF_icon from '@assets/logos/EF.jpeg';
import nethermind_icon from '@assets/logos/nethermind.jpeg';
import soulwallet_icon from '@assets/logos/soul_wallet.jpeg';
import polygon_icon from '@assets/logos/polygon.jpeg';

export interface IPartnerItem {
  logo: StaticImageData | string;
  link: string;
}

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
    logo: polygon_icon,
    link: 'https://polygon.technology/', 
  },
  {
    logo: nethermind_icon,
    link: 'https://nethermind.io/', 
  },
  {
    logo: alchemy_icon,
    link: 'https://www.alchemy.com/',
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
  {
    logo: soulwallet_icon,
    link: 'https://www.soulwallet.io/',
  },
];
