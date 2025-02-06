import React from 'react';
import { ColourfulText } from './ui/colourful-text';

const Heading = () => {
  return (
    <div className="relative flex justify-center items-center h-20">
      <h1 className="text-white lg:text-8xl md:text-8xl sm:text-7xl text-6xl">
        Simple <ColourfulText text="Quote" />
      </h1>
    </div>
  );
};

export default Heading;
