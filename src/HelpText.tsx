import { ReactNode } from 'react';

export type HelpTextProps = {
  children?: ReactNode | ReactNode[];
};

function HelpText({ children }: HelpTextProps): JSX.Element {
  if (!children) {
    return <></>;
  }

  return <small className="form-text text-muted">{children}</small>;
}

export default HelpText;
