import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.baseUrl;

export default {
    openGraph: {
        title: 'ERC-4337',
        description: 'The official ERC-4337 website - useful information about the Ethereum Account Abstraction protocol',
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.erc4337.io/',
        siteName: 'ERC-4337',
        images: [
            {
                url: `${baseUrl}/og-erc-4337.jpeg`,
                width: 1200,
                height: 630,
                alt: 'ERC-4337',
            },
          ],
    },
    twitter: {
        handle: '@erc4337',
        site: '@erc4337',
        cardType: 'summary_large_image',
    },    
};