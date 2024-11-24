import { ApolloCache, DocumentNode, MutationHookOptions, MutationTuple, MutationUpdaterFn, Reference, StoreObject } from '@apollo/client';
import { Modifier } from '@apollo/client/cache/core/types/common';
/** @deprecated Apollo wrappers in Litform are going away */
export declare function addNewObjectToReferenceArrayModifier<Q, T extends {
    id: string;
}>(cache: ApolloCache<Q>, newObject: T, fragment: DocumentNode, fragmentName?: string): Modifier<(Reference | undefined)[]>;
/** @deprecated Apollo wrappers in Litform are going away */
export declare function addNewObjectToReferenceArrayUpdater<Q, T extends {
    id: string;
}>(containingObject: Reference | StoreObject, fieldName: string, getNewObject: (data: Q) => T | undefined, fragment: DocumentNode, fragmentName?: string): MutationUpdaterFn<Q>;
/** @deprecated Apollo wrappers in Litform are going away */
export declare function useCreateMutationWithReferenceArrayUpdater<TData, TVariables, ContainerType extends Record<FieldName, ItemType[]>, FieldName extends keyof ContainerType & string, ItemType extends {
    id: string;
} = ContainerType[FieldName][number]>(useMutationFunction: (options?: MutationHookOptions<TData, TVariables>) => MutationTuple<TData, TVariables>, containingObject: ContainerType, fieldName: FieldName, getNewObject: (data: TData) => ItemType, fragment: DocumentNode, fragmentName?: string): MutationTuple<TData, TVariables>;
/** @deprecated Apollo wrappers in Litform are going away */
export declare function deleteObjectFromReferenceArrayModifier<T extends {
    id: string;
}>(deletedObject: T): Modifier<Reference[]>;
/** @deprecated Apollo wrappers in Litform are going away */
export declare function deleteObjectFromReferenceArrayUpdater<Q, T extends {
    id: string;
}>(containingObject: Reference | StoreObject, fieldName: string, deletedObject: T): MutationUpdaterFn<Q>;
/** @deprecated Apollo wrappers in Litform are going away */
export declare function useDeleteMutationWithReferenceArrayUpdater<TData, TVariables, ContainerType extends Record<FieldName, ItemType[]>, FieldName extends keyof ContainerType & string, ItemType extends {
    id: string;
} = ContainerType[FieldName][number]>(useMutationFunction: (options?: MutationHookOptions<TData, TVariables>) => MutationTuple<TData, TVariables>, containingObject: ContainerType, fieldName: FieldName, getVariables: (item: ItemType) => TVariables): [
    (item: ItemType) => ReturnType<MutationTuple<TData, TVariables>[0]>,
    ...MutationTuple<TData, TVariables>
];
