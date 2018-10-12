import React, { PureComponent } from 'react';
import InputBase from './InputBase';

export default class Input extends PureComponent {
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
      <InputBase
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
