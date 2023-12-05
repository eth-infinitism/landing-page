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
import arbitrum_icon from '@assets/logos/arbitrum.jpeg';
import base_icon from '@assets/logos/base.jpeg';
import gnosis_chain_icon from '@assets/logos/gnosis_chain.png';
import safe_icon from '@assets/logos/safe.jpg';
import optimism_icon from '@assets/logos/optimism.jpeg';
import starkware_icon from '@assets/logos/starkware.png';
import argent_icon from '@assets/logos/argent.jpeg';
import candide_wallet_icon from '@assets/logos/candide_wallet.jpeg';
import thirdweb_icon from '@assets/logos/thirdweb.jpeg';
import walletconnect_icon from '@assets/logos/walletconnect.png';
import zerodev_icon from '@assets/logos/zerodev.jpeg';
import pimlico_icon from '@assets/logos/pimlico.jpeg';
import avalanche_icon from '@assets/logos/avalanche.png';
import blocknative_icon from '@assets/logos/blocknative.jpeg';
import etherspot_icon from '@assets/logos/etherspot.jpeg';
import infura_icon from '@assets/logos/infura.jpeg';
import metamask_icon from '@assets/logos/metamask.jpeg';
import ambire_icon from '@assets/logos/ambire.jpeg';
import cartridge_icon from '@assets/logos/cartridge.jpeg';
import iotex_icon from '@assets/logos/iotex.jpeg';
import openfort_icon from '@assets/logos/openfort.jpeg';


export interface IPartnerItem {
  logo: StaticImageData | string;
  name: string;
  description: string;
  link: string;

}

export const PartnerItems: IPartnerItem[] = [
  {
    logo: EF_icon,
    name: ``,
    description: ``,
    link: 'https://www.ethereum.org/', 
  },
  {
    logo: stackup_icon,
    name: ``,
    description: ``,
    link: 'https://www.stackup.sh/', 
  },
  {
    logo: polygon_icon,
    name: ``,
    description: ``,
    link: 'https://polygon.technology/', 
  },
  {
    logo: nethermind_icon,
    name: ``,
    description: ``,
    link: 'https://nethermind.io/', 
  },
  {
    logo: alchemy_icon,
    name: ``,
    description: ``,
    link: 'https://www.alchemy.com/',
  },
  {
    logo: avalanche_icon,
    name: ``,
    description: ``,
    link: 'https://www.avax.com/',
  },
  {
    logo: infura_icon,
    name: ``,
    description: ``,
    link: 'https://www.infura.io/',
  },
  {
    logo: metamask_icon,
    name: ``,
    description: ``,
    link: 'https://metamask.io/',
  },
  {
    logo: etherspot_icon,
    name: ``,
    description: ``,
    link: 'https://etherspot.io/',
  },
  {
    logo: blocknative_icon,
    name: ``,
    description: ``,
    link: 'https://www.blocknative.com/',
  },
  {
    logo: biconomy_icon,
    name: ``,
    description: ``,
    link: 'https://www.biconomy.io/', 
  },
  {
    logo: zkSync_icon,
    name: ``,
    description: ``,
    link: 'https://zksync.io/',
  },
  {
    logo: unipass_icon,
    name: ``,
    description: ``,
    link: 'https://www.unipass.id/',
  },
  {
    logo: soulwallet_icon,
    name: ``,
    description: ``,
    link: 'https://www.soulwallet.io/',
  },
  {
    logo: arbitrum_icon,
    name: ``,
    description: ``,
    link: 'https://arbitrum.io/',
  },
  {
    logo: base_icon,
    name: ``,
    description: ``,
    link: 'https://base.org/',
  },
  {
    logo: gnosis_chain_icon,
    name: ``,
    description: ``,
    link: 'https://www.gnosis.io/',
  },
  {
    logo: safe_icon,
    name: ``,
    description: ``,
    link: 'https://safe.global/',
  },
  {
    logo: optimism_icon,
    name: ``,
    description: ``,
    link: 'https://www.optimism.io/',
  },
  {
    logo: starkware_icon,
    name: ``,
    description: ``,
    link: 'https://starkware.co/',
  },
  {
    logo: argent_icon,
    name: ``,
    description: ``,
    link: 'https://www.argent.xyz/',
  },
  {
    logo: candide_wallet_icon,
    name: ``,
    description: ``,
    link: 'https://www.candidewallet.com/',
  },
  {
    logo: thirdweb_icon,
    name: ``,
    description: ``,
    link: 'https://thirdweb.com/',
  },
  {
    logo: walletconnect_icon,
    name: ``,
    description: ``,
    link: 'https://walletconnect.com/',
  },
  {
    logo: zerodev_icon,
    name: ``,
    description: ``,
    link: 'https://zerodev.app/',
  },
  {
    logo: pimlico_icon,
    name: ``,
    description: ``,
    link: 'https://pimlico.io/',
  },
  {
    logo: ambire_icon,
    name: ``,
    description: ``,
    link: 'https://www.ambire.com/',
  }, 
  {
    logo: cartridge_icon,
    name: ``,
    description: ``,
    link: 'https://cartridge.gg/',
  },
  {
    logo: iotex_icon,
    name: ``,
    description: ``,
    link: 'https://iotex.io/',
  },
  {
    logo: openfort_icon,
    name: ``,
    description: ``,
    link: 'https://www.openfort.xyz/',
  },  
];
