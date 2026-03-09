import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StatsSection from './StatsSection';

// Mock motion components
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
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
  const mockBackgroundImage = {
    src: '/test-image.jpg',
    height: 100,
    width: 100,
  };

  it('renders all stats correctly', () => {
    render(<StatsSection backgroundImage={mockBackgroundImage as any} />);

    expect(screen.getByText('30+')).toBeDefined();
    expect(screen.getByText('Years Experience')).toBeDefined();

    expect(screen.getByText('50+')).toBeDefined();
    expect(screen.getByText('Properties Transformed')).toBeDefined();

    expect(screen.getByText('100')).toBeDefined();
    expect(screen.getByText('%')).toBeDefined();
    expect(screen.getByText('Delivery')).toBeDefined();

    expect(screen.getByText('0')).toBeDefined();
    // There are 2 '%' spans now
    expect(screen.getAllByText('%')).toHaveLength(2);
    expect(screen.getByText('Fluff')).toBeDefined();
  });

  it('renders key markets', () => {
    render(<StatsSection backgroundImage={mockBackgroundImage as any} />);

    const markets = ["New York", "Los Angeles", "Miami", "Boston", "Las Vegas", "Charleston", "Dublin", "London", "Barbados"];
    markets.forEach(market => {
      expect(screen.getByText(market)).toBeDefined();
    });
  });
});
