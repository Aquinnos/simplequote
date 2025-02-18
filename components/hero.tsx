import React, { useState } from 'react';

const Hero = () => {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMotivationalQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/quote');
      if (!response.ok) {
        throw new Error(`Error API: ${response.status}`);
      }
      const data = await response.json();

      setQuote(`"${data.q}" - ${data.a}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Failed to fetch quote.');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  };

  return (
    <div className="flex justify-center relative my-20 z-10 border-white border-2 rounded-lg m-10 p-10 pt-20 pb-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-sm text-center text-yellow-200 max-w-96 pb-5 lg:text-base">
          Here you will feel the magic of the quote that will motivate you to
          act.
        </p>
        <button className="p-[3px] relative" onClick={getMotivationalQuotes}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-purple-400 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            {isLoading ? 'Loading...' : 'Get a quote'}
          </div>
        </button>
        <p
          className="text-center tracking-widest text-sm md:text-base lg:text-2xl pt-5 text-white"
          id="quote"
        >
          {quote}
        </p>
      </div>
    </div>
  );
};

export default Hero;
