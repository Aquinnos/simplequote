import React from 'react';
import { BackgroundGradientAnimation } from './ui/Background-Gradient-Animation';

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
    </BackgroundGradientAnimation>
  );
}
