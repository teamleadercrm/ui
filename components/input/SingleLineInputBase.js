import React, { PureComponent } from 'react';
import InputBase from './InputBase';

class SingleLineInputBase extends PureComponent {
  render() {
    return <InputBase {...this.props} />;
  }
}

SingleLineInputBase.propTypes = {};

SingleLineInputBase.defaultProps = {};

export default SingleLineInputBase;
