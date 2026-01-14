import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Scroll to element with offset for fixed header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
