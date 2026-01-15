import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { describe, it, expect, vi } from 'vitest';

// Mocks
vi.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
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

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
  });

  it('renders mobile menu button on small screens', () => {
    render(<Navbar />);
    // The menu icon is rendered initially (hidden only via CSS classes which jsdom doesn't fully simulate without layout engine,
    // but we can check if the button wrapping it exists or the icon is in the DOM)
    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
  });

  it('opens mobile menu when menu button is clicked', async () => {
    render(<Navbar />);
    const menuButton = screen.getByTestId('menu-icon').parentElement;
    if (menuButton) {
      fireEvent.click(menuButton);
      // specific waitFor import needed or findByText which is async
      const mobileHomeLink = await screen.findByText(/Home/i);
      expect(mobileHomeLink).toBeInTheDocument();
    }
  });
});
