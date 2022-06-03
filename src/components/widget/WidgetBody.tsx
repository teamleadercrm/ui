import React, { ReactNode } from 'react';
import { BoxProps } from '../box/Box';
import Island from '../island';

export interface WidgetBodyProps extends Omit<BoxProps, 'ref' | 'size'> {
  /** The content to display inside the widget body. */
  children?: ReactNode;
}

const WidgetBody = ({ children, ...others }: WidgetBodyProps) => {
  return <Island {...others}>{children}</Island>;
};

export default WidgetBody;
