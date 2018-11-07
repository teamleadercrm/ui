import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { DialogBase } from './index';
import { Banner, Button, ButtonGroup, COLORS, Heading3 } from '../../index';

class Dialog extends PureComponent {
  getHeader = () => {
    const { headerColor, headerIcon, onCloseClick, title } = this.props;

    return (
      <Banner color={headerColor} fullWidth icon={headerIcon} onClose={onCloseClick}>
        <Heading3>{title}</Heading3>
      </Banner>
    );
  };

  getFooter = () => {
    const { tertiaryAction, secondaryAction, primaryAction } = this.props;

    return (
      <ButtonGroup justifyContent="flex-end" padding={4}>
        {tertiaryAction && <Button label={tertiaryAction.label} onMouseUp={tertiaryAction.onMouseUp} level="link" />}
        {secondaryAction && <Button label={secondaryAction.label} onMouseUp={secondaryAction.onMouseUp} />}
        {primaryAction && <Button label={primaryAction.label} onMouseUp={primaryAction.onMouseUp} level="primary" />}
      </ButtonGroup>
    );
  };

  render() {
    const { children, title, ...otherProps } = this.props;

    const restProps = omit(otherProps, ['headerColor', 'onCloseClick', 'primaryAction', 'secondaryAction']);

    return (
      <DialogBase {...restProps}>
        {title && this.getHeader()}
        {children}
        {this.getFooter()}
      </DialogBase>
    );
  }
}

Dialog.propTypes = {
  headerColor: PropTypes.oneOf(COLORS),
  headerIcon: PropTypes.element,
  onCloseClick: PropTypes.func,
  primaryAction: PropTypes.object,
  secondaryAction: PropTypes.object,
  tertiaryAction: PropTypes.object,
  title: PropTypes.string,
};

Dialog.defaultProps = {
  headerColor: 'neutral',
};

export default Dialog;
