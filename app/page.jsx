// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Services />

        {/*<Reviews />*/}
      <Cta />
    </main>
  );
}
