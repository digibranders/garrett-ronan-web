import { render, screen } from '@testing-library/react';
import About from './page';
import { describe, it, expect, vi } from 'vitest';
import type { ImgHTMLAttributes, ComponentPropsWithoutRef } from 'react';

vi.mock('lucide-react', () => ({
  Check: () => <div data-testid="check-icon" />,
}));
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));
vi.mock('next/image', () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt} />,
}));
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: ComponentPropsWithoutRef<'button'>) => <button {...props}>{children}</button>,
}));

describe('About Page', () => {
  it('renders main heading', () => {
    render(<About />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('renders experience timeline', () => {
    render(<About />);
    expect(screen.getAllByText(/Experience/i).length).toBeGreaterThan(0);
    // One of the companies from the timeline
    expect(screen.getAllByText(/BLACE/i).length).toBeGreaterThan(0);
  });
});
