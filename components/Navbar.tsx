
import React from 'react';
import { ZENYUM_BLUE } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: ZENYUM_BLUE }}
          >
            Z
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Zenyum</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
