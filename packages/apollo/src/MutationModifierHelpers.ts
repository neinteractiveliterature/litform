import type {
  ApolloCache,
  DocumentNode,
  MutationHookOptions,
  MutationTuple,
  MutationUpdaterFn,
  Reference,
  StoreObject,
} from '@apollo/client';
import type { Modifier } from '@apollo/client/cache/core/types/common';
import { useCallback } from 'react';

/** @deprecated Apollo wrappers in Litform are going away */
export function addNewObjectToReferenceArrayModifier<Q, T extends { id: string }>(
  cache: ApolloCache<Q>,
  newObject: T,
  fragment: DocumentNode,
  fragmentName?: string,
): Modifier<(Reference | undefined)[]> {
  const modifier: Modifier<(Reference | undefined)[]> = (existingObjectRefs, { readField }) => {
    const newObjectRef = cache.writeFragment({
      // @ts-expect-error This is technically broken but this package is deprecated so I don't care
      data: newObject,
      fragment: fragment,
      fragmentName: fragmentName,
    });

    if (existingObjectRefs.some((ref: Reference) => readField('id', ref) === newObject.id)) {
      return existingObjectRefs;
    }

    return [...existingObjectRefs, newObjectRef];
  };

  return modifier;
}

/** @deprecated Apollo wrappers in Litform are going away */
export function addNewObjectToReferenceArrayUpdater<Q, T extends { id: string }>(
  containingObject: Reference | StoreObject,
  fieldName: string,
  getNewObject: (data: Q) => T | undefined,
  fragment: DocumentNode,
  fragmentName?: string,
): MutationUpdaterFn<Q> {
  const updater: MutationUpdaterFn<Q> = (cache, result) => {
    const data = result.data;

    if (data) {
      const newObject = getNewObject(data);
      if (newObject) {
        cache.modify({
          id: cache.identify(containingObject),
          fields: {
            [fieldName]: addNewObjectToReferenceArrayModifier(
              cache,
              newObject,
              fragment,
              fragmentName,
            ),
          },
        });
      }
    }
  };

  return updater;
}

/** @deprecated Apollo wrappers in Litform are going away */
export function useCreateMutationWithReferenceArrayUpdater<
  TData,
  TVariables,
  ContainerType extends Record<FieldName, ItemType[]>,
  FieldName extends keyof ContainerType & string,
  ItemType extends { id: string } = ContainerType[FieldName][number],
>(
  useMutationFunction: (
    options?: MutationHookOptions<TData, TVariables>,
  ) => MutationTuple<TData, TVariables>,
  containingObject: ContainerType,
  fieldName: FieldName,
  getNewObject: (data: TData) => ItemType,
  fragment: DocumentNode,
  fragmentName?: string,
): MutationTuple<TData, TVariables> {
  return useMutationFunction({
    // @ts-expect-error This is technically broken but this package is deprecated so I don't care
    update: addNewObjectToReferenceArrayUpdater(
      containingObject,
      fieldName,
      getNewObject,
      fragment,
      fragmentName,
    ),
  });
}

/** @deprecated Apollo wrappers in Litform are going away */
export function deleteObjectFromReferenceArrayModifier<T extends { id: string }>(
  deletedObject: T,
): Modifier<Reference[]> {
  const modifier: Modifier<Reference[]> = (existingObjectRefs, { readField }) => {
    return existingObjectRefs.filter(
      (existingObjectRef: Reference) => deletedObject.id !== readField('id', existingObjectRef),
    );
  };

  return modifier;
}

/** @deprecated Apollo wrappers in Litform are going away */
export function deleteObjectFromReferenceArrayUpdater<Q, T extends { id: string }>(
  containingObject: Reference | StoreObject,
  fieldName: string,
  deletedObject: T,
): MutationUpdaterFn<Q> {
  const updater: MutationUpdaterFn<Q> = (cache) => {
    cache.modify({
      id: cache.identify(containingObject),
      fields: {
        [fieldName]: deleteObjectFromReferenceArrayModifier(deletedObject),
      },
    });
  };
  return updater;
}

/** @deprecated Apollo wrappers in Litform are going away */
export function useDeleteMutationWithReferenceArrayUpdater<
  TData,
  TVariables,
  ContainerType extends Record<FieldName, ItemType[]>,
  FieldName extends keyof ContainerType & string,
  ItemType extends { id: string } = ContainerType[FieldName][number],
>(
  useMutationFunction: (
    options?: MutationHookOptions<TData, TVariables>,
  ) => MutationTuple<TData, TVariables>,
  containingObject: ContainerType,
  fieldName: FieldName,
  getVariables: (item: ItemType) => TVariables,
): [
  (item: ItemType) => ReturnType<MutationTuple<TData, TVariables>[0]>,
  ...MutationTuple<TData, TVariables>,
] {
  const mutationTuple = useMutationFunction();
  const mutate = mutationTuple[0];
  const deleteFunction = useCallback(
    (item: ItemType) =>
      mutate({
        variables: getVariables(item),
        update: deleteObjectFromReferenceArrayUpdater(containingObject, fieldName, item),
      }),
    [containingObject, fieldName, getVariables, mutate],
  );

  return [deleteFunction, ...mutationTuple];
}
