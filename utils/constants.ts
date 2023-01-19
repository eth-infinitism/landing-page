export const SectionIDs = {
  brand: 'brand',
  why: 'why',
  faq: 'faq',
  examples: 'examples',
  tutorial: 'tutorial',
  resources: 'resources',
};

export interface INavigationItem {
  label: string;
  link: string;
}

export const NavigationItems: INavigationItem[] = [
  {
    label: 'Why',
    link: '#why',
  },
  {
    label: 'FAQ',
    link: '#faq',
  },
  {
    label: 'Wallet Examples',
    link: '#examples',
  },
  {
    label: 'Resources',
    link: '#resources',
  },
];

export interface IWhyItem {
  title: string;
  description: string;
}

export const WhyItemsContent: IWhyItem[] = [
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
  {
    title: 'Headline Lorem ipsum dolor sit amet consectetur. Metus et commodo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In tempus lacus suscipit convallis vulputate massa gravida. Parturient urna ultrices sit libero ac mauris. Et ultricies id faucibus dignissim posuere vulputate porttitor.',
  },
];

export interface ILinkItem {
  name: string;
  url: string;
}

export const Links = [
  {
    name: 'Resources',
    url: '/',
  },
  {
    name: 'Resources A',
    url: '/',
  },
  {
    name: 'Resources B',
    url: '/',
  },
  {
    name: 'Resources C',
    url: '/',
  },
];
