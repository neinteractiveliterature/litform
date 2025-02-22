import { OperationVariables, QueryHookOptions, QueryResult } from '@apollo/client';
import { ErrorDisplay, PageLoadingIndicator } from '@neinteractiveliterature/litform-core';

/** @deprecated Apollo wrappers in Litform are going away */
export default function LoadQueryWrapper<TData, TVariables extends OperationVariables, TProps>(
  useLoadData: (baseOptions: QueryHookOptions<TData, TVariables>) => QueryResult<TData>,
  WrappedComponent: React.ComponentType<TProps & { data: TData }>,
): (props: TProps) => JSX.Element {
  const Wrapper = (props: TProps) => {
    const { data, loading, error } = useLoadData({});

    if (loading) {
      return <PageLoadingIndicator visible />;
    }

    if (error) {
      return <ErrorDisplay graphQLError={error} />;
    }

    return <WrappedComponent data={data!} {...props} />;
  };

  const wrappedComponentDisplayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Wrapper.displayName = `LoadQueryWrapper<${wrappedComponentDisplayName}>`;

  return Wrapper;
}
