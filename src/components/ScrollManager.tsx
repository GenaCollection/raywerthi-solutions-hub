import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Centralised scroll behaviour for every route change in the app:
 * - a plain navigation (no hash) always resets to the top of the page
 * - a navigation carrying a #hash smooth-scrolls to that element once it
 *   exists, respecting each element's `scroll-margin-top` so it isn't
 *   hidden behind the fixed header / sticky category nav
 */
const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollManager;
