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
import blockpi_icon from '@assets/logos/blockpi.png';
import oxpass_icon from '@assets/logos/oxpass.png';
import jiffyscan_icon from '@assets/logos/jiffyscan.png';
import particle_icon from '@assets/logos/particle-network.png';
import ioPay_icon from '@assets/logos/ioPay.png';
import blocko_icon from '@assets/logos/blocko.jpg';
import okx_icon from '@assets/logos/okx.jpeg';
import rhinestone_icon from '@assets/logos/rhinestone.png';
import timeless_x from '@assets/logos/timeless_x.png';
import transeptor_labs_icon from '@assets/logos/transeptor-labs.jpeg';
import cyberwallet from '@assets/logos/cyberwallet.png';

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
    logo: avalanche_icon,
    link: 'https://www.avax.com/',
  },
  {
    logo: infura_icon,
    link: 'https://www.infura.io/',
  },
  {
    logo: metamask_icon,
    link: 'https://metamask.io/',
  },
  {
    logo: etherspot_icon,
    link: 'https://etherspot.io/',
  },
  {
    logo: blocknative_icon,
    link: 'https://www.blocknative.com/',
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
  {
    logo: okx_icon,
    link: 'https://www.okx.com/',
  },
  {
    logo: arbitrum_icon,
    link: 'https://arbitrum.io/',
  },
  {
    logo: base_icon,
    link: 'https://base.org/',
  },
  {
    logo: gnosis_chain_icon,
    link: 'https://www.gnosis.io/',
  },
  {
    logo: safe_icon,
    link: 'https://safe.global/',
  },
  {
    logo: optimism_icon,
    link: 'https://www.optimism.io/',
  },
  {
    logo: starkware_icon,
    link: 'https://starkware.co/',
  },
  {
    logo: argent_icon,
    link: 'https://www.argent.xyz/',
  },
  {
    logo: candide_wallet_icon,
    link: 'https://www.candidewallet.com/',
  },
  {
    logo: thirdweb_icon,
    link: 'https://thirdweb.com/',
  },
  {
    logo: walletconnect_icon,
    link: 'https://walletconnect.com/',
  },
  {
    logo: zerodev_icon,
    link: 'https://zerodev.app/',
  },
  {
    logo: pimlico_icon,
    link: 'https://pimlico.io/',
  },
  {
    logo: ambire_icon,
    link: 'https://www.ambire.com/',
  },
  {
    logo: rhinestone_icon,
    link: 'https://rhinestone.wtf/',
  },
  {
    logo: cartridge_icon,
    link: 'https://cartridge.gg/',
  },
  {
    logo: iotex_icon,
    link: 'https://iotex.io/',
  },
  {
    logo: openfort_icon,
    link: 'https://www.openfort.xyz/',
  },
  {
    logo: blockpi_icon,
    link: 'https://blockpi.io/',
  },
  {
    logo: oxpass_icon,
    link: 'https://0xpass.io',
  },
  {
    logo: ioPay_icon,
    link: 'https://iopay.me/',
  },
  {
    logo: blocko_icon,
    link: 'https://www.blocto.io/',
  },
  {
    logo: jiffyscan_icon,
    link: 'https://www.jiffyscan.xyz/',
  },
  {
    logo: particle_icon,
    link: 'https://particle.network/',
  },
  {
    logo: timeless_x,
    link: 'https://timelesswallet.xyz/',
  },
  {
    logo: transeptor_labs_icon,
    link: 'https://transeptorlabs.io/',
  },
  {
    logo: cyberwallet,
    link: 'https://wallet.cyber.co',
  },
];
