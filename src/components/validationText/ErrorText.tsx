import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface ErrorTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const ErrorText: GenericComponent<ErrorTextProps> = forwardRef<HTMLElement, ErrorTextProps>(
  ({ children = 'This is the error text', inverse = false, ...others }, ref) => (
    <TextSmall
      {...others}
      color="ruby"
      data-teamleader-ui="error-text"
      marginTop={1}
      tint={inverse ? 'light' : 'dark'}
      ref={ref}
    >
      {children}
    </TextSmall>
  ),
);

ErrorText.displayName = 'ErrorText';

export default ErrorText;
