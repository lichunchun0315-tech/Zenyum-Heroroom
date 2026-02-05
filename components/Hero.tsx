
import React from 'react';
import { ZENYUM_BLUE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block">Smile More for</span>
              <span className="block" style={{ color: ZENYUM_BLUE }}>Less in HK.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Zenyum invisible aligners are designed by expert orthodontists to help you achieve the smile you’ve always wanted. Start your journey today with a free clinical consultation.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button 
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-white hover:opacity-90 transition-all md:text-lg"
                style={{ backgroundColor: ZENYUM_BLUE }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Free 3D Scan
              </button>
              <p className="mt-3 text-sm text-gray-500 italic">
                *Limited slots available this week in Mong Kok & Causeway Bay.
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://picsum.photos/seed/smile1/800/600"
                alt="Happy customer with bright smile"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">"Best decision I made!"</p>
                <p className="text-sm opacity-90">Sarah L., Zenyum Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
