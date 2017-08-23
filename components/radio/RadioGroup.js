import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { RADIO } from '../identifiers';
import RadioButton from './index';
import isComponentOfType from '../utils/is-component-of-type';

class RadioGroup extends Component {
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

export default themr(RADIO)(RadioGroup);
export { RadioGroup };
