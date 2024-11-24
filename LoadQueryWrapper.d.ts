import { OperationVariables, QueryHookOptions, QueryResult } from '@apollo/client';
/** @deprecated Apollo wrappers in Litform are going away */
export default function LoadQueryWrapper<TData, TVariables extends OperationVariables, TProps>(useLoadData: (baseOptions: QueryHookOptions<TData, TVariables>) => QueryResult<TData>, WrappedComponent: React.ComponentType<TProps & {
    data: TData;
}>): (props: TProps) => JSX.Element;
