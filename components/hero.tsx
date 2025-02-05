import React, { useState } from 'react';

const hero = () => {
  const [quote, setQuote] = useState<string>('');

  const getMotivationalQuotes = async () => {
    try {
      const response = await fetch('/api/quote');
      if (!response.ok) {
        throw new Error(`Błąd API: ${response.status}`);
      }
      const data = await response.json();
      setQuote(`"${data.q}" - ${data.a}`);
      document.getElementById('quote')?.classList.add('mt-4');
    } catch (error) {
      console.error('Błąd podczas pobierania cytatów:', error);
      setQuote('Wystąpił błąd podczas pobierania cytatów.');
    }
  };

  return (
    <div className="flex justify-center relative my-20 z-10 border-white border-2 rounded-lg m-10 p-10 pt-20 pb-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-sm text-center text-yellow-200 max-w-96 pb-5 lg:text-base">
          Tutaj poczujesz magię cytatu, która zmotywuje Cię do działania.
        </p>
        <button className="p-[3px] relative" onClick={getMotivationalQuotes}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-purple-400 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Wygeneruj cytat
          </div>
        </button>
        <p
          className="text-center tracking-widest text-sm md:text-base lg:text-2xl text-white"
          id="quote"
        >
          {quote}
        </p>
      </div>
    </div>
  );
};

export default hero;
