import { permanentRedirect } from 'next/navigation';

/**
 * Legacy route. `permanentRedirect` issues a 308 so any link equity pointing at
 * /services is passed to the page that replaced it.
 */
export default function ServicesPage() {
  permanentRedirect('/what-we-do');
}
