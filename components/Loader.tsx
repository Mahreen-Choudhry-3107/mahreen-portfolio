
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
      <div className="relative">
        {/* Animated Rings */}
        <div className="w-24 h-24 border border-white/5 rounded-full animate-ping absolute -inset-0"></div>
        <div className="w-24 h-24 border-t-2 border-white rounded-full animate-spin"></div>
      </div>
      
      <div className="mt-12 overflow-hidden">
        <h1 className="text-xl font-bold tracking-[0.4em] uppercase text-white animate-pulse">
          Mahreen Choudhry
        </h1>
      </div>
      
      <div className="mt-4 flex gap-2">
        <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
