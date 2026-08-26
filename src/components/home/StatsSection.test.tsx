import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import type { ComponentPropsWithoutRef } from 'react';
import type { StaticImageData } from 'next/image';
import StatsSection from './StatsSection';

// Mock motion components
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: ComponentPropsWithoutRef<'div'>) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}));

// Mock AnimatedCounter
vi.mock('./AnimatedCounter', () => ({
  AnimatedCounter: ({ end, suffix }: { end: number; suffix?: string }) => (
    <span>{end}{suffix}</span>
  ),
}));

describe('StatsSection', () => {
  const mockBackgroundImage: StaticImageData = {
    src: '/test-image.jpg',
    height: 100,
    width: 100,
  };

  it('renders all stats correctly', () => {
    render(<StatsSection backgroundImage={mockBackgroundImage} />);

    expect(screen.getByText('30+')).toBeDefined();
    expect(screen.getByText('Years Experience')).toBeDefined();

    expect(screen.getByText('50+')).toBeDefined();
    expect(screen.getByText('Properties Transformed')).toBeDefined();

    expect(screen.getByText('100')).toBeDefined();
    expect(screen.getByText('Delivery')).toBeDefined();

    expect(screen.getByText('0')).toBeDefined();
    // Both the "Delivery" (100%) and "Fluff" (0%) stats render a '%' suffix span.
    expect(screen.getAllByText('%')).toHaveLength(2);
    expect(screen.getByText('Fluff')).toBeDefined();
  });

  it('renders key markets', () => {
    render(<StatsSection backgroundImage={mockBackgroundImage} />);

    const markets = ["New York", "Los Angeles", "Miami", "Boston", "Las Vegas", "Charleston", "Dublin", "London", "Barbados"];
    markets.forEach(market => {
      expect(screen.getByText(market)).toBeDefined();
    });
  });
});
