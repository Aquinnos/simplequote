'use client';

import { BackgroundGradientAnimationDemo } from '@/components/backgroundGradientAnimation';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="mx-auto flex justify-center items-center h-screen ">
      <div className="relative w-full h-full">
        <BackgroundGradientAnimationDemo />
        <Hero />
      </div>
    </main>
  );
}
