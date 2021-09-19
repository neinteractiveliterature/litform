import { RefObject, useRef } from 'react';

export default function useMatchWidthStyle(): [
  RefObject<HTMLElement>,
  { width: string } | Record<string, never>,
] {
  const matchElementRef = useRef<HTMLElement>(null);

  return [
    matchElementRef,
    matchElementRef.current ? { width: `${matchElementRef.current.offsetWidth}px` } : {},
  ];
}
