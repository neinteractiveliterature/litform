import { useState } from 'react';
import uniqueId from 'lodash/uniqueId.js';

export default function useUniqueId(prefix: string): string {
  const [id] = useState(uniqueId(prefix)); // don't care about setting this, it won't change
  return id;
}
