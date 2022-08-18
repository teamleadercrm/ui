import React, { ReactNode } from 'react';

import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { TextSmall } from '../typography';

export interface HelpTextProps extends BoxProps {
  children?: ReactNode;
  inverse?: boolean;
}

const HelpText: GenericComponent<HelpTextProps> = ({
  children = 'This is the help text',
  inverse = false,
  ...others
}) => (
  <TextSmall
    {...others}
    color={inverse ? 'teal' : 'neutral'}
    data-teamleader-ui="help-text"
    marginTop={1}
    tint={inverse ? 'light' : 'darkest'}
  >
    {children}
  </TextSmall>
);

export default HelpText;
