import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface ErrorTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const ErrorText: GenericComponent<ErrorTextProps> = ({
  children = 'This is the error text',
  inverse = false,
  ...others
}) => (
  <TextSmall color="ruby" data-teamleader-ui="error-text" marginTop={1} tint={inverse ? 'light' : 'dark'} {...others}>
    {children}
  </TextSmall>
);

export default ErrorText;
