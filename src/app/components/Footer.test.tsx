import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

describe('Footer Component', () => {
  it('renders company links', () => {
    render(<Footer />);
    // "About Us" link
    expect(screen.getAllByText('About Us').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Our Services').length).toBeGreaterThan(0);
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText(/info@gkrhospitality.com/i)).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 GKR Hospitality/i)).toBeInTheDocument();
  });
});
