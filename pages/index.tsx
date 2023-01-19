import Brand from 'sections/brand';
import Examples from 'sections/examples';
import FAQ from 'sections/faq';
import Tutorial from 'sections/tutorial';
import Why from 'sections/why';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Brand />
      <Why />
      <FAQ />
      <Examples />
      <Tutorial />
    </Layout>
  );
}
