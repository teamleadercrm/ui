import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface SuccessTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const SuccessText: GenericComponent<SuccessTextProps> = ({
  children = 'This is the success text',
  inverse = false,
  ...others
}) => (
  <TextSmall {...others} color="mint" data-teamleader-ui="success-text" marginTop={1} tint={inverse ? 'light' : 'dark'}>
    {children}
  </TextSmall>
);

export default SuccessText;
