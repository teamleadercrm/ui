import React, { PureComponent } from 'react';
import { DialogBase } from './index';

class Dialog extends PureComponent {
  render() {
    return <DialogBase {...this.props} />;
  }
}

Dialog.propTypes = {};

Dialog.defaultProps = {};

export default Dialog;
