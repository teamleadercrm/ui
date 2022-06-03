import React, { ReactNode } from 'react';
import { BoxProps } from '../box/Box';
import Island from '../island';

export interface WidgetFooterProps extends Omit<BoxProps, 'ref' | 'size'> {
  /** The content to display inside the widget footer. */
  children?: ReactNode;
}

const WidgetFooter = ({ children, ...others }: WidgetFooterProps) => {
  return <Island {...others}>{children}</Island>;
};

export default WidgetFooter;
