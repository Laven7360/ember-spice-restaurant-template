import { useEffect, useState, useSyncExternalStore } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const EXIT_DURATION = 90;

function subscribeToMotionPreference(onChange) {
  const preference = window.matchMedia(REDUCED_MOTION);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}

const getMotionPreference = () => window.matchMedia(REDUCED_MOTION).matches;

/** Keep shared chrome mounted and swap route content after a brief exit fade. */
export default function PageTransition({ children }) {
  const location = useLocation();
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
  );
  const [transition, setTransition] = useState({
    displayLocation: location,
    targetLocation: location,
    phase: 'idle',
    reducedMotion,
  });

  // Adjust this component's state before committing a changed destination.
  // Same-page links and returning to the outgoing page cancel an in-flight exit.
  if (transition.targetLocation !== location || transition.reducedMotion !== reducedMotion) {
    const immediate = reducedMotion || location.pathname === transition.displayLocation.pathname;
    setTransition({
      displayLocation: immediate ? location : transition.displayLocation,
      targetLocation: location,
      phase: immediate ? 'idle' : 'exiting',
      reducedMotion,
    });
  }

  const { displayLocation, targetLocation, phase } = transition;
  useEffect(() => {
    if (phase !== 'exiting') return;
    const timer = window.setTimeout(() => {
      setTransition(current => current.targetLocation === targetLocation
        ? { ...current, displayLocation: targetLocation, phase: 'entering' }
        : current);
    }, EXIT_DURATION + 50); // Safety net if the browser suppresses animationend.

    // Rapid clicks and back/forward navigation always use the latest destination.
    return () => window.clearTimeout(timer);
  }, [targetLocation, phase]);

  return (
    <div
      className="route-transition"
      data-phase={phase}
      inert={phase === 'exiting' ? true : undefined}
      onAnimationEnd={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.animationName === 'routeExit') {
          setTransition(current => current.phase === 'exiting'
            ? { ...current, displayLocation: current.targetLocation, phase: 'entering' }
            : current);
        } else if (event.animationName.startsWith('routeEnter')) {
          setTransition(current => current.phase === 'entering'
            ? { ...current, phase: 'idle' }
            : current);
        }
      }}
    >
      <ScrollToTop pathname={displayLocation.pathname} />
      <Routes location={displayLocation}>{children}</Routes>
    </div>
  );
}
