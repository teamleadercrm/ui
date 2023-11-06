import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface SuccessTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const SuccessText: GenericComponent<SuccessTextProps> = forwardRef<HTMLElement, SuccessTextProps>(
  ({ children = 'This is the success text', inverse = false, ...others }, ref) => (
    <TextSmall
      {...others}
      color="mint"
      data-teamleader-ui="success-text"
      marginTop={1}
      tint={inverse ? 'light' : 'dark'}
      ref={ref}
    >
      {children}
    </TextSmall>
  ),
);

SuccessText.displayName = 'SuccessText';

export default SuccessText;
