import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-[#0A0A0C] text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#16181D] border border-[#C89347]/40 mx-auto flex items-center justify-center text-[#C89347] shadow-xl">
          <Flame className="w-7 h-7 text-[#C89347]" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#C89347] font-semibold block">
          404 — Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
          This Hearth Is Cold
        </h1>

        <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
          The page or course you are seeking has been moved or is currently off-menu. We invite you back to our main dining anthology.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-colors rounded-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#EDE6D8] border border-white/10 hover:border-[#C89347] transition-colors rounded-sm"
          >
            View Anthology Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
