
import React from 'react';
import BookingSection from './components/BookingSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl">
        {/* Branding Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-full bg-[#005AE2] flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
            Z
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Zenyum Hong Kong</h1>
        </div>
        
        <BookingSection />
        
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Zenyum. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
