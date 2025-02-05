import React from 'react';
import { quotes } from '../data/index';

const generateQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById('quote');
  if (quoteElement) {
    quoteElement.innerText = randomQuote;
    quoteElement.classList.add('quote-style');
  }
};

const hero = () => {
  return (
    <div className="flex justify-center relative my-20 z-10 border-white border-2 rounded-lg m-10 p-10 pt-20 pb-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-sm text-center text-yellow-200 max-w-80 pb-5">
          Tutaj poczujesz magię cytatu, która zmotywuje Cię do działania.
        </p>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-50">
          Żeby wygenerować cytat, kliknij w przycisk poniżej.
        </p>
        <button className="p-[3px] relative" onClick={generateQuote}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Wygeneruj cytat
          </div>
        </button>
        <p
          className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-10"
          id="quote"
        ></p>
      </div>
    </div>
  );
};

export default hero;
