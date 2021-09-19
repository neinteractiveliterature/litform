import { RefObject, useRef } from 'react';

export default function useMatchWidthStyle<ElementType extends HTMLElement>(): [
  RefObject<ElementType>,
  { width: string } | Record<string, never>,
] {
  const matchElementRef = useRef<ElementType>(null);

  return [
    matchElementRef,
    matchElementRef.current ? { width: `${matchElementRef.current.offsetWidth}px` } : {},
  ];
}
