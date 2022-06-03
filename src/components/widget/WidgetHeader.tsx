import React, { ReactNode } from 'react';
import theme from './theme.css';
import cx from 'classnames';
import Island from '../island';
import { BoxProps } from '../box/Box';

type Size = 'small' | 'medium' | 'large';

const PADDING_VERTICAL = {
  small: 1,
  medium: 2,
  large: 3,
};

export interface WidgetHeaderProps extends Omit<BoxProps, 'ref' | 'size'> {
  /** The content to display inside the widget header. */
  children?: ReactNode;
  /** A class name for the header to give custom styles. */
  className?: string;
  /** The size which controls the horizontal padding of the Island. */
  size?: Size;
}

const WidgetHeader = ({ children, className, size = 'medium', ...others }: WidgetHeaderProps) => {
  const classNames = cx(theme[`is-${size}`], className);

  return (
    <Island
      {...others}
      alignItems="center"
      className={classNames}
      display="flex"
      size={size}
      paddingVertical={PADDING_VERTICAL[size]}
    >
      {children}
    </Island>
  );
};

export default WidgetHeader;
