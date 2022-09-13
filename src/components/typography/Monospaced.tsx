import cx from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import theme from './theme.css';

export interface MonospacedProps {
  children?: ReactNode;
  className?: string;
  element?: ElementType;
}
const Monospaced: GenericComponent<MonospacedProps> = ({ children, className, element = 'span' }) => {
  const classNames = cx(theme['monospaced'], className);

  const Element = element;

  return (
    <Element data-teamleader-ui="monospaced" className={classNames}>
      {children}
    </Element>
  );
};

export default Monospaced;
