import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { Heading5 } from '../typography';

export interface LabelProps extends Omit<BoxProps, 'children'> {
  inline?: boolean;
  children?: ReactNode;
}

const Label: GenericComponent<LabelProps> = ({ children, inline, ...others }) => (
  <Heading5
    color="teal"
    flex={inline ? '0 0 40%' : 1}
    marginBottom={inline ? 0 : 1}
    marginRight={inline ? 2 : 0}
    maxLines={2}
    paddingVertical={inline ? 1 : 0}
    {...others}
  >
    {children}
  </Heading5>
);

export default Label;
