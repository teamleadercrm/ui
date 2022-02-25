import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import Box, { omitBoxProps } from '../box';
import Button from './Button';
import cx from 'classnames';
import isComponentOfType from '../utils/is-component-of-type';
import theme from './theme.css';

class MarketingButtonGroup extends PureComponent {
  handleChange = (value, event) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  };

  render() {
    const { children, className, value, ...others } = this.props;

    const classNames = cx(theme['group'], theme['segmented'], className);

    return (
      <Box data-teamleader-ui="button-group" className={classNames} {...others}>
        {React.Children.map(children, (child) => {
          if (!isComponentOfType(Button, child)) {
            return child;
          }

          let optionalChildProps = {};
          if (value) {
            optionalChildProps = {
              active: child.props.value === value,
              onClick: (event) => this.handleChange(child.props.value, event),
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

MarketingButtonGroup.propTypes = {
  /** The content to display inside the button group. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The value of the currently active button. */
  value: PropTypes.string,
  /** Callback function that is fired when the active button changes. */
  onChange: PropTypes.func,
};

MarketingButtonGroup.Button = Button;

export default MarketingButtonGroup;
