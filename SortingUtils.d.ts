import { KeysOfType } from './ValueUtils';
export declare function buildOptimisticArrayForMove<T extends {
    position: number;
}>(items: T[], dragIndex: number, hoverIndex: number): T[];
export type BasicSortableHandlers<ItemType> = {
    onDragStart: (event: {
        active: {
            id: string | number;
        };
    }) => void;
    onDragOver: (event: {
        active: {
            id: string | number;
        };
        over?: {
            id: string | number;
        } | null;
    }) => void;
    onDragEnd: () => void;
    onDragCancel: () => void;
    draggingItem: ItemType | undefined;
};
export declare function useBasicSortableHandlers<ItemType>(getItem: (id: string | number) => ItemType, getItemIndex: (id: string | number) => number, moveItem: (activeIndex: number, overIndex: number) => unknown): BasicSortableHandlers<ItemType>;
export declare function useArrayBasicSortableHandlers<IdType extends {
    toString(): string;
}, ItemType extends {
    [x in IdProperty]: IdType;
}, IdProperty extends KeysOfType<ItemType, IdType>>(array: ItemType[], moveItem: (activeIndex: number, overIndex: number) => unknown, idProperty: IdProperty): BasicSortableHandlers<ItemType>;
