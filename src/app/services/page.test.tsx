import { render, screen } from '@testing-library/react';
import Services from './page';
import { describe, it, expect, vi } from 'vitest';

vi.mock('lucide-react', () => ({
  ArrowUpRight: () => <div data-testid="arrow-up-right-icon" />,
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

describe('Services Page', () => {
  it('renders main heading', () => {
    render(<Services />);
    expect(screen.getByText(/What We Offer/i)).toBeInTheDocument();
  });

  it('renders service list items', () => {
    render(<Services />);
    expect(screen.getAllByText(/Concept Creation/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Operations/i).length).toBeGreaterThan(0);
  });
});
