import Footer from '@components/Layout/Footer';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  darkMode: false,
  logo: <strong>ERC 4337 Documentations</strong>,
  project: {
    link: 'https://github.com/eth-infinitism/account-abstraction', // TODO: check it
  },
  docsRepositoryBase: 'https://github.com/eth-infinitism/landing-page',
  nextThemes: {
    forcedTheme: 'light',
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ERC 4337 Documentations',
      } as any;
    }
  },
  footer: {
    text: '',
  },
};
export default config;