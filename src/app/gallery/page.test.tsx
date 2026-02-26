import { render, screen } from '@testing-library/react';
import GalleryPage from './page';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

// Mock dependencies
vi.mock('lucide-react', () => ({
  X: () => <div data-testid="x-icon" />,
  ExternalLink: () => <div data-testid="external-link-icon" />,
  ChevronLeft: () => <div data-testid="chevron-left-icon" />,
  ChevronRight: () => <div data-testid="chevron-right-icon" />,
}));

vi.mock('react-responsive-masonry', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  ResponsiveMasonry: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('@radix-ui/react-dialog', () => ({
  Root: ({ children, open }: { children: React.ReactNode; open: boolean }) => (
    open ? <div>{children}</div> : null
  ),
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Overlay: () => <div />,
  Content: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Title: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Description: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Close: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    img: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe('Gallery Page', () => {
  it('renders the gallery page and the new item', async () => {
    render(<GalleryPage />);

    // Check for the main title
    expect(screen.getByText(/Selected/i)).toBeDefined();
    expect(screen.getByText(/Works/i)).toBeDefined();

    // Check for the new gallery item
    const newItem = await screen.findByText("Caribbean- St Vincent and the Grenadines");
    expect(newItem).toBeDefined();
  });
});
