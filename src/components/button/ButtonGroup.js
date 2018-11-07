import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import Box, { omitBoxProps } from '../box';
import Button from './Button';
import cx from 'classnames';
import isComponentOfType from '../utils/is-component-of-type';
import theme from './theme.css';

class ButtonGroup extends PureComponent {
  handleChange = (value, event) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  };

  render() {
    const { children, className, segmented, value, ...others } = this.props;

    const classNames = cx(
      theme['group'],
      {
        [theme['segmented']]: segmented,
      },
      className,
    );

    return (
      <Box data-teamleader-ui="button-group" className={classNames} {...others}>
        {React.Children.map(children, child => {
          if (!isComponentOfType(Button, child)) {
            return child;
          }

          let optionalChildProps = {};
          if (value) {
            optionalChildProps = {
              active: child.props.value === value,
              onClick: event => this.handleChange(child.props.value, event),
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

ButtonGroup.propTypes = {
  /** The content to display inside the button group. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** If true, child components will be displayed segmented. */
  segmented: PropTypes.bool,
  /** The value of the currently active button. */
  value: PropTypes.string,
  /** Callback function that is fired when the active button changes. */
  onChange: PropTypes.func,
};

ButtonGroup.defaultProps = {
  segmented: false,
};

export default ButtonGroup;
