export interface INavigationItem {
  label: string;
  link: string;
}

export const NavigationItems: INavigationItem[] = [
  {
    label: 'Documentation',
    link: '/docs',
  },
  {
    label: 'Resources',
    link: '/resources',
  },
  {
    label: 'Bundlers',
    link: '/bundlers',
  },
  {
    label: 'Paymasters',
    link: '/paymasters',
  },
];
