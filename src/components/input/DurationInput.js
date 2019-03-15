import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SingleLineInputBase from './SingleLineInputBase';

class DurationInput extends PureComponent {
  state = {
    value: '00:00',
  };
  render() {
    const { ...others } = this.props;
    return (
      <SingleLineInputBase
        value={this.state.value}
        onChange={event => {
          console.log(this.state.value);
          this.setState({ value: event.currentTarget.value });
        }}
        type={'time'}
        {...others}
      />
    );
  }
}

export default DurationInput;
