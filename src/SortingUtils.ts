import { useCallback, useState } from 'react';
import { KeysOfType } from './ValueUtils';

export function buildOptimisticArrayForMove<T extends { position: number }>(
  items: T[],
  dragIndex: number,
  hoverIndex: number,
): T[] {
  const draggedItem = items[dragIndex];
  const optimisticItems = [...items];
  optimisticItems.splice(dragIndex, 1);
  optimisticItems.splice(hoverIndex, 0, draggedItem);

  return optimisticItems.map((item, itemIndex) => ({
    ...item,
    position: itemIndex + 1,
  }));
}

export type BasicSortableHandlers<ItemType> = {
  onDragStart: (event: { active: { id: string } }) => void;
  onDragOver: (event: { active: { id: string }; over?: { id: string } | null }) => void;
  onDragEnd: () => void;
  onDragCancel: () => void;
  draggingItem: ItemType | undefined;
};

export function useBasicSortableHandlers<ItemType>(
  getItem: (id: string) => ItemType,
  getItemIndex: (id: string) => number,
  moveItem: (activeIndex: number, overIndex: number) => unknown,
): BasicSortableHandlers<ItemType> {
  const [draggingItem, setDraggingItem] = useState<ItemType>();

  const handleDragStart = useCallback(
    (event: { active: { id: string } }) => {
      const { active } = event;
      const activeItem = getItem(active.id);
      setDraggingItem(activeItem);
    },
    [getItem],
  );

  const handleDragOver = useCallback(
    (event: { active: { id: string }; over?: { id: string } | null }) => {
      const { active, over } = event;
      const activeIndex = getItemIndex(active.id);
      const overIndex = over ? getItemIndex(over.id) : undefined;

      if (activeIndex != null && overIndex != null && activeIndex !== overIndex) {
        moveItem(activeIndex, overIndex);
      }
    },
    [getItemIndex, moveItem],
  );

  const handleDragEnd = useCallback(() => {
    setDraggingItem(undefined);
  }, []);

  return {
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragEnd,
    draggingItem,
  };
}

export function useArrayBasicSortableHandlers<
  IdType extends { toString(): string },
  ItemType,
  IdProperty extends KeysOfType<ItemType, IdType>,
>(
  array: ItemType[],
  moveItem: (activeIndex: number, overIndex: number) => unknown,
  idProperty: IdProperty,
): BasicSortableHandlers<ItemType> {
  const getItem = useCallback(
    (id: string) => {
      const item = array.find((item) => (item[idProperty] as IdType).toString() === id);
      if (!item) {
        throw new Error(`No item with ID ${id} in array`);
      }
      return item;
    },
    [array, idProperty],
  );

  const getItemIndex = useCallback(
    (id: string) => array.findIndex((item) => (item[idProperty] as IdType).toString() === id),
    [array, idProperty],
  );

  return useBasicSortableHandlers(getItem, getItemIndex, moveItem);
}
