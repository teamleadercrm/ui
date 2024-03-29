import React, { ReactNode } from 'react';
import RadioButton from './index';
import Box from '../box';
import isComponentOfType from '../utils/is-component-of-type';
import omit from 'lodash.omit';
import { GenericComponent } from '../../@types/types';
import isReactElement from '../utils/is-react-element';
import { BoxProps } from '../box/Box';

export interface RadioGroupProps extends Omit<BoxProps, 'children' | 'className'> {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?: (value: string | boolean, event?: React.MouseEvent) => void;
  value?: string | boolean;
}

const RadioGroup: GenericComponent<RadioGroupProps> = ({
  children,
  className = '',
  disabled = false,
  onChange,
  value,
  ...others
}) => {
  const rest = omit(others, ['onChange']);

  const handleChange = (value: string | boolean, event: React.MouseEvent) => {
    if (onChange) {
      onChange(value, event);
    }
  };

  return (
    <Box data-teamleader-ui="radio-group" className={className} {...rest}>
      {React.Children.map(children, (child) => {
        const isRadioButtonComponent = isReactElement(child) && isComponentOfType(RadioButton, child);

        if (!isRadioButtonComponent) {
          return child;
        }

        if (isRadioButtonComponent) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            disabled: disabled || child.props.disabled,
            onChange: (checked: boolean, event: React.MouseEvent) => handleChange(child.props.value, event),
          });
        }
      })}
    </Box>
  );
};

export default RadioGroup;
