import React, { useState } from 'react';
import { CheckCircle2, X, ShieldCheck } from 'lucide-react';
import { timeSlots, seatingAreas } from '../data/restaurantData';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    mealType: 'dinner', // 'lunch' or 'dinner'
    time: '7:30 PM',
    guests: '2',
    seatingArea: 'main',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) errs.date = 'Reservation date is required';
    if (!formData.time) errs.time = 'Please select a preferred seating time';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = `ES-KL-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        ...formData,
        referenceId,
        areaName: seatingAreas.find((a) => a.id === formData.seatingArea)?.name || 'Main Dining Room',
      });
    }, 1000);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
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
    setErrors({});
  };

  // Get current date string for min date in picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#0A0A0C] relative overflow-hidden" aria-label="Table Reservations">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C89347]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>Table Reservations</span>
            <span className="w-6 h-px bg-[#C89347]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#EDE6D8] font-medium tracking-tight">
            Reserve Your Evening
          </h2>
          <p className="text-sm text-[#A39E93] mt-3 max-w-xl mx-auto font-light">
            We hold tables for 15 minutes. For parties larger than 8 or private alcove dining, you may also message our hospitality team directly via WhatsApp.
          </p>
        </div>

        {/* Reservation Card Form */}
        <div className="bg-[#14161A] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Seating Type & Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Date Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-2">
                  1. Select Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] focus:outline-none focus:border-[#C89347] transition-colors [color-scheme:dark] ${
                      errors.date ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                </div>
                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-2">
                  2. Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#1A1C22] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#EDE6D8] focus:outline-none focus:border-[#C89347] transition-colors [color-scheme:dark]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Party Inquiry)'].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Meal Service & Time Slot Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium">
                  3. Seating Time
                </label>
                {/* Lunch / Dinner Switcher */}
                <div className="inline-flex rounded-sm bg-[#1A1C22] p-1 border border-white/5 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, mealType: 'lunch', time: timeSlots.lunch[0] });
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

              {/* Time Slots Chips */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {timeSlots[formData.mealType].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: slot })}
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
              {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
            </div>

            {/* Seating Preference Selector */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-3">
                4. Seating Ambience
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
                        onChange={() => setFormData({ ...formData, seatingArea: area.id })}
                        className="accent-[#C89347]"
                      />
                    </div>
                    <span className="text-[11px] leading-relaxed font-light">
                      {area.desc}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs uppercase tracking-[0.15em] text-[#EDE6D8] font-medium mb-4">
                5. Guest Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone (e.g. +60 12-345 6789) *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#1A1C22] border rounded-sm px-4 py-3 text-sm text-[#EDE6D8] placeholder-[#A39E93]/50 focus:outline-none focus:border-[#C89347] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Special Dietary / Occasion Notes */}
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

            {/* Submission Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-all duration-300 rounded-sm shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0A0A0C] border-t-transparent rounded-full animate-spin" />
                    <span>Confirming Table Availability...</span>
                  </>
                ) : (
                  <span>Confirm Table Reservation</span>
                )}
              </button>
            </div>

            {/* Safety & Policy Notice */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#A39E93] text-center">
              <ShieldCheck className="w-4 h-4 text-[#C89347]" />
              <span>Instant instant booking confirmation • No cancellation fee up to 4 hours prior</span>
            </div>
          </form>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {confirmedBooking && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-lg w-full bg-[#14161A] border border-[#C89347]/40 rounded-sm p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setConfirmedBooking(null)}
              className="absolute top-4 right-4 text-[#A39E93] hover:text-[#EDE6D8] transition-colors"
              aria-label="Close confirmation dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Header */}
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
                Reference Code: <strong className="text-[#C89347] font-mono tracking-widest">{confirmedBooking.referenceId}</strong>
              </p>
            </div>

            {/* Summary Details */}
            <div className="bg-[#1A1C22] rounded-sm p-4 border border-white/5 space-y-2.5 text-xs text-[#EDE6D8]/80 mb-6">
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
                <span className="text-[#A39E93]">Confirmation sent to:</span>
                <span className="font-medium text-[#C89347]">{confirmedBooking.email}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#A39E93] text-center leading-relaxed font-light mb-6">
              A reservation summary has also been transmitted to your WhatsApp (+60). Please notify us if your schedule changes.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] rounded-sm transition-colors"
              >
                Close & Return
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
    </section>
  );
}
