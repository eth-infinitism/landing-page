import { IResourceSection } from '@configs/type';

export const bundlerResources: IResourceSection[] = [
  {
    sectionName: 'Specifications',
    resources: [
      {
        name: 'API Specification',
        url: 'https://github.com/eth-infinitism/bundler-spec',
      },
      {
        name: 'Compatibility tests',
        url: 'https://github.com/eth-infinitism/bundler-spec-tests',
      },
      {
        name: 'Tests results',
        url: 'https://github.com/eth-infinitism/bundler-test-results',
      },
      
    ],
  },
  {
    sectionName: 'Bundlers',
    resources: [      
      {
        name: 'AA-Reference-Bundler/0.5.0',
        url: 'https://github.com/eth-infinitism/bundler',
      },
      {
        name: 'Stackup Bundler',
        url: 'https://github.com/stackup-wallet/stackup-bundler',
      },
      {
        name: 'Silius Bundler',
        url: 'https://github.com/Vid201/silius/',
      },
      {
        name: 'Skandha Bundler',
        url: 'https://github.com/etherspot/skandha',
      },
      {
        name: 'Voltaire-Bundler',
        url: 'https://github.com/candidelabs/voltaire',
      },
      {
        name: 'OKBund',
        url: 'https://github.com/okx/okbund',
      },
      {
        name: 'Transeptor',
        url: 'https://github.com/transeptorlabs/transeptor-bundler',
      },
    ],
  },
  {
    sectionName: 'Articles',
    resources: [      
      {
        name: 'Unified ERC-4337 mempool',
        url: 'https://notes.ethereum.org/@yoav/unified-erc-4337-mempool',
      },
    ],
  },
];
