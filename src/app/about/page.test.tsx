import { render, screen } from '@testing-library/react';
import About from './page';
import { describe, it, expect, vi } from 'vitest';

vi.mock('lucide-react', () => ({
  Check: () => <div data-testid="check-icon" />,
}));
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} alt={props.alt} />,
}));
vi.mock('@/app/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe('About Page', () => {
  it('renders main heading', () => {
    render(<About />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('renders experience timeline', () => {
    render(<About />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    // One of the companies from the timeline
    expect(screen.getByText(/BLACE/i)).toBeInTheDocument();
  });
});
