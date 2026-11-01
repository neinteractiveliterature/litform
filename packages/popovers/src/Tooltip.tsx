import { Ref, ReactNode, JSX } from 'react';
import classNames from 'classnames';
import type { LitformFloatingResult } from './FloatingUtils';

export type TooltipProps = Pick<LitformFloatingResult, 'styles' | 'attributes' | 'state'> & {
  floatingRef: Ref<HTMLDivElement>;
  arrowRef: Ref<HTMLDivElement>;
  visible?: boolean;
  children: ReactNode | ReactNode[];
};

function Tooltip({
  floatingRef,
  arrowRef,
  styles,
  visible,
  attributes,
  state,
  children,
}: TooltipProps): JSX.Element {
  const placementClass = (state?.placement ?? '').split('-')[0];

  return (
    <div
      ref={floatingRef}
      style={{ ...styles.floating, ...(visible ? {} : { zIndex: -9999 }) }}
      className={classNames(`tooltip bs-tooltip-${placementClass}`, {
        show: visible,
        'd-none': !visible,
      })}
      role="tooltip"
      {...attributes.floating}
    >
      <div className="tooltip-arrow" ref={arrowRef} style={styles.arrow} />
      <div className="tooltip-inner">{children}</div>
    </div>
  );
}

export default Tooltip;
