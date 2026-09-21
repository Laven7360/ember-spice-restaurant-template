import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { timeSlots, seatingAreas } from '../data/restaurantData';
import { CheckCircle2, ShieldCheck, X, Info } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    mealType: 'dinner',
    time: '7:30 PM',
    guests: '2',
    seatingArea: 'main',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Malaysian contact number is required';
    } else {
      // Allow +60 or 01x Malaysian phone format
      const cleaned = formData.phone.replace(/[\s\-()]/g, '');
      if (!/^(?:\+?60|0)1[0-9]{8,9}$/.test(cleaned) && cleaned.length < 9) {
        errs.phone = 'Please enter a valid Malaysian number (e.g. +60 12-345 6789 or 012-3456789)';
      }
    }

    if (!formData.date) {
      errs.date = 'Reservation date is required';
    } else if (formData.date < todayStr) {
      errs.date = 'Reservation date cannot be in the past';
    }

    if (!formData.time) {
      errs.time = 'Please select a preferred seating time';
    }

    if (!formData.guests) {
      errs.guests = 'Please specify party size';
    }

    if (!formData.seatingArea) {
      errs.seatingArea = 'Please select a seating ambience';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = `ES-KL-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        ...formData,
        referenceId,
        areaName: seatingAreas.find((a) => a.id === formData.seatingArea)?.name || 'Main Dining Room',
      });
    }, 900);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: todayStr,
      mealType: 'dinner',
      time: '7:30 PM',
      guests: '2',
      seatingArea: 'main',
      specialRequests: '',
    });
    setErrors({});
  };

  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center">
        <SectionHeader
          eyebrow="Table Reservations"
          title="Reserve Your Table"
          description="Select your preferred date, seating slot, and dining ambience along Bangsar's Jalan Telawi."
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Form Card */}
        <div className="bg-[#14161A] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Step 1 & 2: Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-2">
                  1. Select Date *
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({ ...formData, date: e.target.value });
                    if (errors.date) setErrors({ ...errors, date: null });
                  }}
                  className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] focus:outline-none focus:border-[#C89347] transition-colors [color-scheme:dark] ${
                    errors.date ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.date && <p className="text-red-400 text-xs mt-1.5">{errors.date}</p>}
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-2">
                  2. Number of Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#1A1C22] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#EDE6D8] focus:outline-none focus:border-[#C89347] transition-colors [color-scheme:dark]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Party / Alcove)'].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3 & 4: Service Seating & Time */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium">
                  3. Service & Seating Time *
                </label>
                {/* Lunch / Dinner Switcher */}
                <div className="inline-flex rounded-sm bg-[#1A1C22] p-1 border border-white/5 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, mealType: 'lunch', time: timeSlots.lunch[0] });
                      if (errors.time) setErrors({ ...errors, time: null });
                    }}
                    className={`px-3 py-1 rounded-xs transition-colors ${
                      formData.mealType === 'lunch'
                        ? 'bg-[#C89347] text-[#0A0A0C] font-semibold'
                        : 'text-[#A39E93] hover:text-[#EDE6D8]'
                    }`}
                  >
                    Lunch
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, mealType: 'dinner', time: timeSlots.dinner[0] });
                      if (errors.time) setErrors({ ...errors, time: null });
                    }}
                    className={`px-3 py-1 rounded-xs transition-colors ${
                      formData.mealType === 'dinner'
                        ? 'bg-[#C89347] text-[#0A0A0C] font-semibold'
                        : 'text-[#A39E93] hover:text-[#EDE6D8]'
                    }`}
                  >
                    Dinner
                  </button>
                </div>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {timeSlots[formData.mealType].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, time: slot });
                      if (errors.time) setErrors({ ...errors, time: null });
                    }}
                    className={`py-2 px-3 text-xs rounded-sm transition-all border text-center ${
                      formData.time === slot
                        ? 'bg-[#C89347] text-[#0A0A0C] font-bold border-[#C89347] shadow-md'
                        : 'bg-[#1A1C22] text-[#EDE6D8]/80 border-white/5 hover:border-[#C89347]/40 hover:text-[#EDE6D8]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.time && <p className="text-red-400 text-xs mt-1.5">{errors.time}</p>}
            </div>

            {/* Step 5: Seating Ambience */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-3">
                4. Seating Ambience *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {seatingAreas.map((area) => (
                  <label
                    key={area.id}
                    className={`p-4 rounded-sm border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.seatingArea === area.id
                        ? 'bg-[#1E2027] border-[#C89347] text-[#EDE6D8]'
                        : 'bg-[#1A1C22] border-white/5 text-[#A39E93] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-sm font-semibold text-[#EDE6D8]">
                        {area.name}
                      </span>
                      <input
                        type="radio"
                        name="seatingArea"
                        value={area.id}
                        checked={formData.seatingArea === area.id}
                        onChange={() => {
                          setFormData({ ...formData, seatingArea: area.id });
                          if (errors.seatingArea) setErrors({ ...errors, seatingArea: null });
                        }}
                        className="accent-[#C89347]"
                      />
                    </div>
                    <span className="text-[11px] leading-relaxed font-light">
                      {area.desc}
                    </span>
                  </label>
                ))}
              </div>
              {errors.seatingArea && <p className="text-red-400 text-xs mt-1.5">{errors.seatingArea}</p>}
            </div>

            {/* Step 6: Guest Contact Details */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-3">
                5. Guest Information *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone (e.g. +60 12-345 6789) *"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Special Requests */}
              <div className="mt-4">
                <textarea
                  rows="3"
                  placeholder="Special requests: Dietary restrictions, allergies, anniversary, birthday arrangements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#1A1C22] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-all duration-300 rounded-sm shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0A0A0C] border-t-transparent rounded-full animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <span>Confirm Table Reservation</span>
                )}
              </button>
            </div>

            {/* Policy Notes */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#A39E93] text-center">
              <ShieldCheck className="w-4 h-4 text-[#C89347]" />
              <span>We hold tables for 15 minutes • No cancellation fee up to 4 hours prior</span>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-lg w-full bg-[#14161A] border border-[#C89347]/40 rounded-sm p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setConfirmedBooking(null)}
              className="absolute top-4 right-4 text-[#A39E93] hover:text-[#EDE6D8] transition-colors"
              aria-label="Close confirmation dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C89347]/15 border border-[#C89347] mx-auto flex items-center justify-center text-[#C89347] mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C89347] font-semibold block mb-1">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl text-[#EDE6D8] font-medium">
                We Await Your Arrival
              </h3>
              <p className="text-xs text-[#A39E93] mt-1 font-light">
                Booking Reference: <strong className="text-[#C89347] font-mono tracking-widest">{confirmedBooking.referenceId}</strong>
              </p>
            </div>

            <div className="bg-[#1A1C22] rounded-sm p-4 border border-white/5 space-y-2.5 text-xs text-[#EDE6D8]/80 mb-5">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-[#A39E93]">Guest Name:</span>
                <span className="font-medium text-[#EDE6D8]">{confirmedBooking.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-[#A39E93]">Date & Time:</span>
                <span className="font-medium text-[#EDE6D8]">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-[#A39E93]">Party Size:</span>
                <span className="font-medium text-[#EDE6D8]">{confirmedBooking.guests} Guests</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-[#A39E93]">Seating Area:</span>
                <span className="font-medium text-[#EDE6D8]">{confirmedBooking.areaName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A39E93]">Simulated Email:</span>
                <span className="font-medium text-[#C89347]">{confirmedBooking.email}</span>
              </div>
            </div>

            {/* Clear Portfolio Demonstration Notice */}
            <div className="p-3 bg-[#0A0A0C] border border-[#C89347]/20 rounded-xs mb-5 flex items-start gap-2 text-[11px] text-[#A39E93]">
              <Info className="w-4 h-4 text-[#C89347] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#EDE6D8]">Demonstration Notice:</strong> This is a frontend interactive simulation created for freelance web development portfolio presentation. No real restaurant booking was placed.
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] rounded-sm transition-colors"
              >
                Close Summary
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-4 text-xs font-medium tracking-wider uppercase border border-white/10 hover:border-white/30 text-[#EDE6D8] rounded-sm transition-colors shrink-0"
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
