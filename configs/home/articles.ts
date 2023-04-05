import { StaticImageData } from 'next/image';
import alchemy_blogpost from '@assets/articlePreviewImages/alchemy-blog-post.jpeg';
import visa_blogpost from '@assets/articlePreviewImages/visa-blog-post.png';


export interface IArticleItem {
  title: string;
  subtitle: string;
  previewImage: StaticImageData;
  link: string;
}

export const ArticleItems: IArticleItem[] = [
  {
    title: 'You Could Have Invented Account Abstraction',
    subtitle: 'Alchemy',
    previewImage: alchemy_blogpost,
    link: 'https://www.alchemy.com/blog/account-abstraction',
  },  
  {
    title: 'Auto Payments for Self-Custodial Wallets',
    subtitle: 'Visa',
    previewImage: visa_blogpost,
    link: 'https://usa.visa.com/solutions/crypto/auto-payments-for-self-custodial-wallets.html',
  },  
  
];
