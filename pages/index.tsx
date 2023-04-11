import Layout from '../components/layout';
import Brand from 'sections/brand';
import What from '@sections/what';
import Why from 'sections/why';
import Partner from '@sections/partner';
import Media from '@sections/media';
import Join from '@sections/join';

export default function Home() {
  return (
    <div className="pt-20 flex flex-col gap-y-56 hero-section horizon-layout ">
      <Brand />
      <What />
      <Why />
      <Partner />
      <Media />
      <Join />
    </div>
  );
}
