'use client';

import { BackgroundGradientAnimationDemo } from '@/components/backgroundGradientAnimation';
import Hero from '@/components/hero';
import Heading from '@/components/heading';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 h-screen flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ">
      <BackgroundGradientAnimationDemo />
      <div className="max-w-7xl w-fit">
        <Heading />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
