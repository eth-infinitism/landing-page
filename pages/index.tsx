import Layout from '../components/Layout';
import Brand from 'sections/brand';
import What from '@sections/what';
import Why from 'sections/why';
import Partner from '@sections/partner';
import Talks from '@sections/talks';
import Join from '@sections/join';

export default function Home() {
  return (
    <div className="mt-20 px-44 flex flex-col gap-y-56">
      <Brand />
      <What />
      <Why />
      <Partner />
      <Talks />
      <Join />
    </div>
  );
}
