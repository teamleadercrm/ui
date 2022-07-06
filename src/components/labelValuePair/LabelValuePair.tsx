import React, { ReactNode } from 'react';
import isComponentOfType from '../utils/is-component-of-type';
import Box from '../box';
import Label, { LabelProps } from './Label';
import Value, { ValueProps } from './Value';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

interface LabelValuePairProps extends Omit<BoxProps, 'children'> {
  alignValue?: 'left' | 'right';
  children: ReactNode;
  inline?: boolean;
}

interface LabelValuePairComponent extends GenericComponent<LabelValuePairProps> {
  Label: GenericComponent<LabelProps>;
  Value: GenericComponent<ValueProps>;
}

const LabelValuePair: LabelValuePairComponent = ({ alignValue = 'left', children, inline = true, ...others }) => (
  <Box {...others} display="flex" flexDirection={inline ? 'row' : 'column'} marginBottom={inline ? 2 : 3}>
    {React.Children.map(children, (child) => {
      if (isComponentOfType(Label, child) && React.isValidElement(child)) {
        return React.cloneElement(child, { inline, ...child.props });
      }

      if (isComponentOfType(Value, child) && React.isValidElement(child)) {
        return React.cloneElement(child, {
          justifyContent: alignValue === 'left' ? 'flex-start' : 'flex-end',
          paddingVertical: inline ? 1 : 0,
          textAlign: alignValue,
          ...child.props,
        });
      }
    })}
  </Box>
);

LabelValuePair.Label = Label;
LabelValuePair.Label.displayName = 'LabelValuePair.Label';
LabelValuePair.Value = Value;
LabelValuePair.Value.displayName = 'LabelValuePair.Value';

export default LabelValuePair;
