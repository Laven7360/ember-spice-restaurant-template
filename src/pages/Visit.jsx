import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { restaurantInfo, faqItems, transportOptions } from '../data/restaurantData';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink, Car, Check, Info, Train, Smartphone, PersonStanding, ChevronDown } from 'lucide-react';

// Map icon string to Lucide component
const iconMap = {
  Car,
  Train,
  Smartphone,
  PersonStanding,
};

export default function Visit() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const googleMapsUrl = "https://maps.google.com/?q=Bangsar+Baru+Kuala+Lumpur";
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappClean}?text=${encodeURIComponent(restaurantInfo.whatsappMessage)}`;

  const copyPhone = () => {
    navigator.clipboard?.writeText(restaurantInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
        <SectionHeader
          eyebrow="Location & Arrival"
          title="Visit Us in Bangsar"
          description="Situated in Kuala Lumpur's vibrant dining district along Jalan Telawi 3. Complimentary valet service available from 5:30 PM."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E2027] border border-[#C89347]/30 flex items-center justify-center text-[#C89347] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#EDE6D8] font-medium mb-1">Our Location</h3>
                  <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#C89347] font-medium mt-3">
                    <Car className="w-3.5 h-3.5" />
                    <span>{restaurantInfo.valetInfo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E2027] border border-[#C89347]/30 flex items-center justify-center text-[#C89347] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg text-[#EDE6D8] font-medium mb-3">Service Times</h3>
                  <div className="space-y-3 text-xs">
                    {restaurantInfo.hours.map((h) => (
                      <div key={h.days} className="pb-2 border-b border-white/5 last:border-0 last:pb-0">
                        <span className="font-medium text-[#EDE6D8] block mb-0.5">{h.days}</span>
                        <div className="text-[#A39E93] flex justify-between font-light">
                          <span>Lunch: {h.lunch}</span>
                          {h.dinner !== "Closed" && <span>Dinner: {h.dinner}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="p-6 rounded-sm bg-[#14161A] border border-white/5 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={restaurantInfo.phoneHref}
                  onClick={copyPhone}
                  className="flex-1 py-3 px-4 rounded-sm bg-[#1E2027] hover:bg-[#252831] border border-white/10 text-xs text-[#EDE6D8] flex items-center justify-center gap-2 transition-colors focus:outline-none"
                  title="Call restaurant and copy telephone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#C89347]" /> : <Phone className="w-4 h-4 text-[#C89347]" />}
                  <span>{copiedPhone ? 'Copied to Clipboard' : restaurantInfo.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-sm bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs text-[#25D366] flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-sm bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Maps for Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Dark Map Component */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[420px] rounded-sm overflow-hidden border border-white/10 bg-[#0A0A0C] shadow-2xl flex flex-col justify-between">
              {/* Geometric Grid Map Background */}
              <div className="absolute inset-0 bg-[#0A0A0C]">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-visit" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C89347" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-visit)" />
                  <line x1="0" y1="120" x2="100%" y2="120" stroke="#EDE6D8" strokeWidth="2" opacity="0.3" />
                  <line x1="0" y1="240" x2="100%" y2="240" stroke="#EDE6D8" strokeWidth="3" opacity="0.4" />
                  <line x1="180" y1="0" x2="180" y2="100%" stroke="#EDE6D8" strokeWidth="2.5" opacity="0.3" />
                  <line x1="360" y1="0" x2="360" y2="100%" stroke="#EDE6D8" strokeWidth="2" opacity="0.2" />
                  <line x1="520" y1="0" x2="520" y2="100%" stroke="#EDE6D8" strokeWidth="1.5" opacity="0.2" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C89347]/20 rounded-full blur-2xl" />
              </div>

              {/* Map UI Bar */}
              <div className="relative z-10 p-4 bg-[#0A0A0C]/80 backdrop-blur-sm border-b border-white/5 flex items-center justify-between text-xs text-[#A39E93]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#EDE6D8] font-medium">Bangsar Baru Enclave</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C89347] flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Central Pin & Card */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#C89347] flex items-center justify-center text-[#0A0A0C] shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6 fill-[#0A0A0C]" />
                  </div>
                  <div className="w-6 h-2 bg-black/60 rounded-full blur-xs mx-auto mt-1" />
                </div>

                <div className="mt-3 bg-[#16181D]/90 backdrop-blur-md border border-[#C89347]/40 px-4 py-2.5 rounded-sm shadow-xl max-w-xs">
                  <span className="font-serif text-sm font-bold text-[#EDE6D8] block">
                    Ember & Spice
                  </span>
                  <span className="text-[11px] text-[#C89347] font-medium block">
                    28 Jalan Telawi 3, Bangsar Baru
                  </span>
                  <span className="text-[10px] text-[#A39E93] block mt-0.5">
                    Near Bangsar Village II
                  </span>
                </div>
              </div>

              {/* Map Landmarks Footer */}
              <div className="relative z-10 p-4 bg-[#0A0A0C]/85 backdrop-blur-sm border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#A39E93]">
                <span>Valet Station at Doorstep</span>
                <span>LRT Bangsar (7 min drive)</span>
                <span>Jalan Telawi Pedestrian Strip</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Getting Here Section ─────────────────────────────────────────────── */}
        <section className="mt-16 sm:mt-20">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              <span className="w-5 h-px bg-[#C89347]" />
              <span>Transport & Arrival</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium tracking-tight">
              Getting Here
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {transportOptions.map((opt) => {
              const Icon = iconMap[opt.icon] || Car;
              return (
                <div
                  key={opt.id}
                  className="p-5 rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1E2027] border border-[#C89347]/20 flex items-center justify-center text-[#C89347] mb-4 group-hover:bg-[#C89347] group-hover:text-[#0A0A0C] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm text-[#EDE6D8] font-medium mb-0.5">
                    {opt.method}
                  </h3>
                  <span className="text-[10px] text-[#C89347] uppercase tracking-wider font-semibold block mb-2">
                    {opt.detail}
                  </span>
                  <p className="text-[11px] text-[#A39E93] leading-relaxed font-light">
                    {opt.instruction}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── FAQ Accordion Section ────────────────────────────────────────────── */}
        <section className="mt-16 sm:mt-20">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              <span className="w-5 h-px bg-[#C89347]" />
              <span>Common Enquiries</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2 max-w-4xl">
            {faqItems.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-colors duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#16181D] border-[#C89347]/40'
                      : 'bg-[#14161A] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347] focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm font-medium font-serif transition-colors ${isOpen ? 'text-[#C89347]' : 'text-[#EDE6D8]'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#C89347] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Accordion body — CSS max-height transition */}
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{ maxHeight: isOpen ? '300px' : '0px' }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs text-[#A39E93] leading-relaxed font-light border-t border-white/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Prompt */}
          <div className="mt-8 flex items-start gap-3 p-5 rounded-sm bg-[#14161A] border border-white/5 max-w-4xl">
            <Info className="w-4 h-4 text-[#C89347] shrink-0 mt-0.5" />
            <p className="text-xs text-[#A39E93] font-light leading-relaxed">
              Have a question not answered above? Email us at{' '}
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="text-[#C89347] hover:text-[#DFA85B] transition-colors font-medium"
              >
                {restaurantInfo.email}
              </a>{' '}
              or send us a message on WhatsApp and our team will respond within the same business day.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
