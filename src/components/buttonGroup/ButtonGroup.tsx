import React, { PureComponent } from 'react';
import omit from 'lodash.omit';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Button from '../button';
import cx from 'classnames';
import isComponentOfType from '../utils/is-component-of-type';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { BUTTON_LEVELS } from '../button/Button';
import isReactElement from '../utils/is-react-element';
import { SIZES } from '../../constants';

export interface ButtonGroupProps extends Omit<BoxProps, 'size' | 'onChange' | 'ref'> {
  /** The content to display inside the button group. */
  children?: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** If true, child components will be displayed segmented. */
  segmented?: boolean;
  /** The level of the buttons */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'hero'>;
  /** The level of the buttons */
  level?: keyof typeof BUTTON_LEVELS;
  /** The value of the currently active button. */
  value?: string;
  /** Callback function that is fired when the active button changes. */
  onChange?: (value: string, event: Event) => void;
}

class ButtonGroup extends PureComponent<ButtonGroupProps> {
  handleChange = (value: string, event: Event) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  };

  render() {
    const { children, className, segmented = false, value, ...others } = this.props;

    const classNames = cx(
      theme['group'],
      {
        [theme['segmented']]: segmented,
      },
      className,
    );

    return (
      <Box data-teamleader-ui="button-group" className={classNames} {...pickBoxProps(others)}>
        {React.Children.map(children, (child) => {
          if (!isReactElement(child) || (isReactElement(child) && !isComponentOfType(Button, child))) {
            return child;
          }

          let optionalChildProps = {};
          if (value) {
            optionalChildProps = {
              active: child.props.value === value,
              onClick: (event: Event) => this.handleChange(child.props.value, event),
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
  }
}

export default ButtonGroup;
