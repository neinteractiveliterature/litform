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
