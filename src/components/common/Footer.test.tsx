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
  it('renders footer sections', () => {
    render(<Footer />);
    expect(screen.getByText('Inquiries')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getAllByText(/connect@GKRHospitality.com/i).length).toBeGreaterThan(0);
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 GKR Consulting/i)).toBeInTheDocument();
  });
});
