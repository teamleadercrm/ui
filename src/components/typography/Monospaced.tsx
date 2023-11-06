import cx from 'classnames';
import React, { ElementType, ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import uiTypography from '@teamleader/ui-typography';

export interface MonospacedProps {
  children?: ReactNode;
  className?: string;
  element?: ElementType;
}
const Monospaced: GenericComponent<MonospacedProps> = forwardRef<HTMLElement, MonospacedProps>(
  ({ children, className, element = 'span' }, ref) => {
    const classNames = cx(uiTypography['monospaced'], className);

    const Element = element;

    return (
      <Element data-teamleader-ui="monospaced" className={classNames} ref={ref}>
        {children}
      </Element>
    );
  },
);

Monospaced.displayName = 'Monospaced';

export default Monospaced;
