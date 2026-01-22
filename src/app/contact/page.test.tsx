import { render, screen } from '@testing-library/react';
import Contact from './page';
import { describe, it, expect, vi } from 'vitest';

vi.mock('lucide-react', () => ({
  Mail: () => <div data-testid="mail-icon" />,
  MapPin: () => <div data-testid="map-pin-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
}));
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} alt={props.alt} />,
}));
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe('Contact Page', () => {
  it('renders contact form fields', () => {
    render(<Contact />);
    // Check for form inputs (using placeholders or labels if available, or just existence via role)
    // Looking at common fields
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders FAQ section', () => {
    render(<Contact />);
    expect(screen.getAllByText(/How quickly can you start/i).length).toBeGreaterThan(0);
  });
});
