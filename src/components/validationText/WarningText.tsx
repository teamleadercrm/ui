import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface WarningTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const WarningText: GenericComponent<WarningTextProps> = forwardRef<HTMLElement, WarningTextProps>(
  ({ children = 'This is the warning text', inverse = false, ...others }, ref) => (
    <TextSmall
      {...others}
      color="gold"
      data-teamleader-ui="warning-text"
      marginTop={1}
      tint={inverse ? 'light' : 'dark'}
      ref={ref}
    >
      {children}
    </TextSmall>
  ),
);

WarningText.displayName = 'WarningText';

export default WarningText;
