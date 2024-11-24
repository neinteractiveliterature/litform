import { Component, ReactNode, ErrorInfo } from 'react';

import ErrorDisplay from './ErrorDisplay';

export type ErrorBoundaryProps = {
  errorType?: 'graphql' | 'plain';
  placement?: 'before' | 'after' | 'replace';
  children?: ReactNode | ReactNode[];
};

type ErrorBoundaryState = {
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(error: Error | null): ErrorBoundaryState {
    return { error };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error });

    if (typeof Rollbar !== 'undefined') {
      Rollbar.error(error, { errorInfo: info });
    }

    if (typeof console !== 'undefined') {
      console.log(error);
      console.log(info);
    }
  }

  render(): ReactNode | ReactNode[] {
    const errorType = this.props.errorType ?? 'graphql';
    const placement = this.props.placement ?? 'before';
    const { children } = this.props;

    if (!this.state.error) {
      return children;
    }

    const errorDisplayProps =
      (errorType ?? 'graphql') === 'graphql'
        ? { graphQLError: this.state.error }
        : { stringError: this.state.error.message };

    if (placement === 'before') {
      return (
        <>
          <ErrorDisplay {...errorDisplayProps} />
          {children}
        </>
      );
    }

    if (placement === 'replace') {
      return <ErrorDisplay {...errorDisplayProps} />;
    }

    return (
      <>
        {children}
        <ErrorDisplay {...errorDisplayProps} />
      </>
    );
  }
}

export default ErrorBoundary;
