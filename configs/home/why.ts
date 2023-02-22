import decentralization_icon from '@assets/decentralization.png';
import no_hard_work_icon from '@assets/no_hard_work.png';
import choose_key_icon from '@assets/choose_key.png';
import abstraction_icon from '@assets/abstraction.png';
import { StaticImageData } from 'next/image';

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
    image: decentralization_icon,
  },
  {
    title: 'No hard fork ',
    description:
      'Thanks to its design of the higher-level UserOp mempool, ERC-4337 can be adopted without any consensus protocol changes',
    image: no_hard_work_icon,
  },
  {
    title: '“Choose a key, any key…”',
    description:
      'Support for signature schemes that are more efficient (Schnorr, BLS), user friendly (smartphone secure enclave) as well as quantum-safe ones (Lamport, Winternitz)',
    image: choose_key_icon,
  },
  {
    title: 'Gas abstraction',
    description:
      'Paymasters remove UX friction and open up new paradigms, by allowing users to pay network fees with ERC-20 tokens instead of ETH, or even request any third party to cover those fees altogether.',
    image: abstraction_icon,
  },
];
