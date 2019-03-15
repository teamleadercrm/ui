import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SingleLineInputBase from './SingleLineInputBase';

class DurationInput extends PureComponent {
  state = {
    value: 'time',
  };
  render() {
    return <SingleLineInputBase value={this.state.value} type={'time'} />;
  }
}

export default DurationInput;
