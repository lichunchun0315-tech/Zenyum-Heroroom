
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Zenyum Hong Kong. Registered Dental Provider.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
