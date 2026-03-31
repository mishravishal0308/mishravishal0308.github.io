import { useState, useEffect } from 'react';

export default function useVisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const KEY = 'portfolio_visitor_count';
    const VISITED = 'portfolio_has_visited';
    let stored = parseInt(localStorage.getItem(KEY) || '0', 10);

    if (!sessionStorage.getItem(VISITED)) {
      stored += 1;
      localStorage.setItem(KEY, String(stored));
      sessionStorage.setItem(VISITED, '1');
    }

    setCount(stored);
  }, []);

  return count;
}
