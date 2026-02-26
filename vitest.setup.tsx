import React from 'react';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor(callback: any, options: any) {}
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Mock ResizeObserver
class ResizeObserverMock {
  constructor(callback: any) {}
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });

// Mock motion/react
vi.mock('motion/react', async () => {
  const actual = await vi.importActual<typeof import('motion/react')>('motion/react');
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
      button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
      nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
      img: ({ children, ...props }: any) => <img {...props} />,
      form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
      a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
      ul: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
      li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    useInView: () => true,
  };
});
