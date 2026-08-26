import { useSyncExternalStore } from 'react';

function subscribe(): () => void {
  return () => {};
}

function getSnapshot(): boolean {
  return true;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Returns `true` once the component has hydrated on the client, `false` during
 * server rendering and the initial client render. Use this instead of the
 * classic `useState(false)` + `useEffect(() => setMounted(true), [])` idiom:
 * that pattern calls setState synchronously inside an effect body, which
 * triggers an avoidable extra render and trips `react-hooks/set-state-in-effect`.
 * `useSyncExternalStore` achieves the same client-only gating without an
 * effect-driven state update.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
