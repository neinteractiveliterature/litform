import { useState } from 'react';

let idCounter = 0;

export default function useUniqueId(prefix: string): string {
  const [id] = useState(() => `${prefix}-${++idCounter}`); // don't care about setting this, it won't change
  return id;
}
