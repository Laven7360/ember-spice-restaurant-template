import React from 'react';

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignmentClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col mb-10 sm:mb-12 max-w-3xl ${alignmentClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2.5">
          <span className="w-5 h-px bg-[#C89347]" />
          <span>{eyebrow}</span>
          <span className="w-5 h-px bg-[#C89347]" />
        </div>
      )}
      <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-[#A39E93] mt-3 font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
