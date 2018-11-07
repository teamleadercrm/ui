import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SingleLineInputBase from './SingleLineInputBase';

class Input extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== undefined) {
      const newValue = nextProps.value || '';

      if (newValue !== prevState.value) {
        return {
          value: newValue,
        };
      }
    }

    return null;
  }

  state = {
    value: '',
  };

  render() {
    const { onChange, ...others } = this.props;

    return (
      <SingleLineInputBase
        value={this.state.value}
        onChange={event => {
          this.setState({ value: event.currentTarget.value });
          onChange(event, event.currentTarget.value);
        }}
        {...others}
      />
    );
  }
}

Input.propTypes = {
  /** The passed down type of the input element. It can be a valid HTML5 input type, except 'number' use a NumericInput in this case. */
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
