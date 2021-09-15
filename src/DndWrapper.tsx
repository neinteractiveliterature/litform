import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, MouseTransition, TouchTransition } from 'react-dnd-multi-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

export const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};

export default function DndWrapper<P>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> {
  const Wrapper = (props: P) => (
    <DndProvider options={HTML5toTouch}>
      <WrappedComponent {...props} />
    </DndProvider>
  );

  const wrappedComponentDisplayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Wrapper.displayName = `DndWrapper(${wrappedComponentDisplayName})`;

  return Wrapper;
}
