
import React, { useState } from 'react';
import { LOCATIONS, ZENYUM_BLUE } from '../constants';
import { Location } from '../types';

const BookingSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(Location.MONG_KOK);

  return (
    <div id="zenyum-booking-portal" className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">預約免費諮詢</h2>
        <p className="text-slate-500 font-medium">
          Book your free 3D dental scan and orthodontist consultation.
        </p>
      </div>

      {/* Location Selector - Refined Design */}
      <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-6 gap-1">
        {LOCATIONS.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(loc.id)}
            className={`flex-1 py-3 px-4 rounded-xl transition-all duration-200 text-center ${
              selectedLocation === loc.id
                ? 'bg-white text-[#005AE2] shadow-sm font-bold scale-[1.01]'
                : 'text-slate-500 hover:text-slate-700 font-medium'
            }`}
          >
            <span className="block text-base leading-tight">{loc.name}</span>
            <span className="block text-[10px] opacity-70 uppercase tracking-wider">{loc.subName}</span>
          </button>
        ))}
      </div>

      {/* Booking Container */}
      <div className="relative bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Official Badge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#005AE2]"></div>
        <div className="flex items-center justify-center py-3 bg-slate-50 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#005AE2]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Official Zenyum Booking System</span>
          </div>
        </div>
        
        <div className="min-h-[750px] transition-opacity duration-300">
          {/* Mong Kok Calendly */}
          <div className={selectedLocation === Location.MONG_KOK ? 'block' : 'hidden'}>
            <div 
              className="calendly-inline-widget" 
              data-url={LOCATIONS[0].calendlyUrl} 
              style={{ minWidth: '320px', height: '750px' }}
            ></div>
          </div>

          {/* Causeway Bay Calendly */}
          <div className={selectedLocation === Location.CAUSEWAY_BAY ? 'block' : 'hidden'}>
            <div 
              className="calendly-inline-widget" 
              data-url={LOCATIONS[1].calendlyUrl} 
              style={{ minWidth: '320px', height: '750px' }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            Slots available today
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
             SSL Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
