import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

/** A local dish photo with a network-independent, layout-preserving fallback. */
export default function DishImage({ src, alt, className = '', loading = 'lazy', ...props }) {
  const [failedSource, setFailedSource] = useState(null);

  if (!src || failedSource === src) {
    return (
      <span
        className={`dish-image-fallback ${className}`}
        role="img"
        aria-label={`${alt} — photograph unavailable`}
      >
        <UtensilsCrossed aria-hidden="true" className="w-7 h-7 text-[#C89347]/70" />
        <span aria-hidden="true" className="text-[10px] uppercase tracking-wider text-[#A39E93]">
          Photograph unavailable
        </span>
      </span>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailedSource(src)}
    />
  );
}
