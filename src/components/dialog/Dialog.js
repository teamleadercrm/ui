import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { DialogBase } from './index';
import { Banner, COLORS, Heading3 } from '../../index';

class Dialog extends PureComponent {
  getHeader = () => {
    const { headerColor, headerIcon, onCloseClick, title } = this.props;

    return (
      <Banner color={headerColor} fullWidth icon={headerIcon} onClose={onCloseClick}>
        <Heading3>{title}</Heading3>
      </Banner>
    );
  };

  render() {
    const { children, title, ...otherProps } = this.props;

    const restProps = omit(otherProps, ['headerColor', 'onCloseClick']);

    return (
      <DialogBase {...restProps}>
        {title && this.getHeader()}
        {children}
      </DialogBase>
    );
  }
}

Dialog.propTypes = {
  headerColor: PropTypes.oneOf(COLORS),
  headerIcon: PropTypes.element,
  onCloseClick: PropTypes.func,
  title: PropTypes.string,
};

Dialog.defaultProps = {
  headerColor: 'neutral',
};

export default Dialog;
