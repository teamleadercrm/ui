import React, { ReactNode, forwardRef } from 'react';
import omit from 'lodash.omit';
import Box, { omitBoxProps } from '../box';
import Button, { ButtonProps } from './Button';
import cx from 'classnames';
import isComponentOfType from '../utils/is-component-of-type';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface MarketingButtonGroupProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the button group. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The value of the currently active button. */
  value?: string;
  /** Callback function that is fired when the active button changes. */
  onChange?: (value: string, event: React.ChangeEvent) => void;
}

interface MarketingButtonGroupComponent extends GenericComponent<MarketingButtonGroupProps> {
  Button: GenericComponent<ButtonProps>;
}

const MarketingButtonGroup: GenericComponent<MarketingButtonGroupProps> = forwardRef<
  HTMLElement,
  MarketingButtonGroupProps
>(({ children, className, value, onChange, ...others }, ref) => {
  const handleChange = (value: string, event: React.ChangeEvent) => {
    if (onChange) {
      onChange(value, event);
    }
  };

  const classNames = cx(theme['group'], theme['segmented'], className);

  return (
    <Box data-teamleader-ui="button-group" className={classNames} {...others} ref={ref}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return;
        }

        if (!isComponentOfType(Button, child)) {
          return child;
        }

        let optionalChildProps = {};
        if (value) {
          optionalChildProps = {
            active: child.props.value === value,
            onClick: (event: React.ChangeEvent) => handleChange(child.props.value || '', event),
          };
        }

        const childProps = omit(child.props, ['value']);
        const groupProps = omit(others, ['onChange']);

        return React.createElement(child.type, {
          ...childProps,
          ...optionalChildProps,
          ...omitBoxProps(groupProps),
        });
      })}
    </Box>
  );
});

MarketingButtonGroup.displayName = 'MarketingButtonGroup';

// It has to be written like this, since `forwardRef` return component without sub-components and that doesn't match with our typing
const MarketingButtonGroupWithSubComponents = MarketingButtonGroup as MarketingButtonGroupComponent;

MarketingButtonGroupWithSubComponents.Button = Button;

export default MarketingButtonGroupWithSubComponents;
