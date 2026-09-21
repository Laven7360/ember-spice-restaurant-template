import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed tooltip in this session
    const isDismissed = sessionStorage.getItem('ember_concierge_dismissed');
    if (isDismissed) return;

    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    // Automatically hide tooltip after 7 seconds if not interacted with
    const autoHide = setTimeout(() => {
      setIsOpen(false);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, []);

  const handleManualClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    sessionStorage.setItem('ember_concierge_dismissed', 'true');
  };

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappClean}?text=${encodeURIComponent(restaurantInfo.whatsappMessage)}`;

  return (
    <aside
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      aria-label="Concierge WhatsApp Inquiries"
    >
      {/* Floating Concierge Popover Card */}
      {isOpen && (
        <div className="relative bg-[#16181D]/95 backdrop-blur-md border border-[#C89347]/30 text-xs text-[#EDE6D8] p-4 rounded-sm shadow-2xl max-w-[260px] sm:max-w-[280px] animate-fade-in">
          <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-[#C89347] text-[11px] uppercase tracking-wider">
                Direct Concierge Desk
              </span>
            </div>
            <button
              onClick={handleManualClose}
              className="text-[#A39E93] hover:text-[#EDE6D8] transition-colors p-0.5 rounded-xs focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C89347]"
              aria-label="Close concierge message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-[#EDE6D8]/80 leading-relaxed font-light mb-3">
            Have questions about private dining alcoves or tonight's table availability in Bangsar?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0A0A0C] font-semibold text-[11px] uppercase tracking-wider transition-colors shadow-md active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Circular Floating Action Trigger Button */}
      <button
        onClick={togglePanel}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-[#0A0A0C] hover:bg-[#20bd5a] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] relative group"
        aria-label={isOpen ? "Close WhatsApp concierge options" : "Open WhatsApp concierge options"}
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        {/* Subtle Ember indicator dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-[#C89347] border-2 border-[#0A0A0C] rounded-full" />
      </button>
    </aside>
  );
}
