import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect, vi } from 'vitest';
import type { ReactNode } from 'react';
import {
  GTM_CONTAINER_ID,
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from './GoogleTagManager';

vi.mock('next/script', () => ({
  default: ({ children, id }: { children?: ReactNode; id?: string }) => (
    <script data-testid="gtm-script" id={id}>
      {children}
    </script>
  ),
}));

describe('GoogleTagManager', () => {
  it('uses a valid GTM container ID', () => {
    expect(GTM_CONTAINER_ID).toMatch(/^GTM-[A-Z0-9]+$/);
  });

  it('injects the container loader with the configured ID', () => {
    const { getByTestId } = render(<GoogleTagManagerScript />);
    const script = getByTestId('gtm-script');

    expect(script).toHaveAttribute('id', 'google-tag-manager');
    expect(script.textContent).toContain('www.googletagmanager.com/gtm.js');
    expect(script.textContent).toContain(GTM_CONTAINER_ID);
    expect(script.textContent).toContain('dataLayer');
  });

  // React drops <noscript> children on the client, so the fallback is asserted
  // against the server-rendered markup that browsers actually receive.
  it('renders the noscript iframe fallback in the server markup', () => {
    const markup = renderToStaticMarkup(<GoogleTagManagerNoScript />);

    expect(markup).toContain('<noscript>');
    expect(markup).toContain(
      `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`,
    );
    expect(markup).toContain('title="Google Tag Manager"');
  });
});
