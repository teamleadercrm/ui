import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './index';
import isComponentOfType from '../utils/is-component-of-type';

class RadioGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  };

  static defaultProps = {
    className: '',
    disabled: false,
  };

  constructor () {
    super(...arguments);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value, event) {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  };

  render () {
    return (
      <div data-teamleader-ui="radio-group" className={this.props.className}>
        {
          React.Children.map(this.props.children, child => (
            !isComponentOfType(RadioButton, child)
              ? child
              : React.cloneElement(child, {
                checked: child.props.value === this.props.value,
                disabled: this.props.disabled || child.props.disabled,
                onChange: event => this.handleChange(child.props.value, event),
              })
            )
          )
        }
      </div>
    );
  }
}

export default RadioGroup;
export { RadioGroup };
