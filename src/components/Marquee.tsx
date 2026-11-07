import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'VLOGS',
    'STREET FOOD',
    'DHAKA LIFE',
    'THRIFT',
    'FRIENDS',
    'TRADE FAIR',
    'BUDGET CHALLENGES',
    'RAW STORIES',
    'MIRPUR-12',
  ];

  return (
    <div
      id="marquee"
      className="relative py-3.5 bg-[#D4FF3F] text-black overflow-hidden select-none border-y border-black my-8"
      aria-label="Content themes marquee"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render items seamlessly */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 text-black">
            <span className="font-display text-xl sm:text-2xl tracking-widest font-bold">
              {item}
            </span>
            <span className="mx-4 text-xs font-mono font-bold opacity-75">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
