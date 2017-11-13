import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './index';
import Box from '../box';
import isComponentOfType from '../utils/is-component-of-type';
import omit from 'lodash.omit';

class RadioGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  static defaultProps = {
    className: '',
    disabled: false,
  };

  constructor() {
    super(...arguments);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, event) {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  }

  render() {
    const { children, className, disabled, value, ...others } = this.props;
    const rest = omit(others, ['onChange']);

    return (
      <Box data-teamleader-ui="radio-group" className={className} {...rest}>
        {React.Children.map(
          children,
          child =>
            !isComponentOfType(RadioButton, child)
              ? child
              : React.cloneElement(child, {
                  checked: child.props.value === value,
                  disabled: disabled || child.props.disabled,
                  onChange: event => this.handleChange(child.props.value, event),
                }),
        )}
      </Box>
    );
  }
}

export default RadioGroup;
export { RadioGroup };
