import { useLayoutEffect } from 'react';

export default function ScrollToTop({ pathname }) {
  // Reset on the displayed route swap, before its first painted frame.
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll so page loads directly at the top
    });
  }, [pathname]);

  return null;
}
