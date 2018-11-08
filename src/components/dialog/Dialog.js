import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { DialogBase } from './index';
import { Banner, Box, Button, ButtonGroup, COLORS, Heading2, Heading3, Link } from '../../index';

class Dialog extends PureComponent {
  getHeader = () => {
    const { headerColor, headerIcon, headingLevel, onCloseClick, title } = this.props;

    return (
      <Banner color={headerColor} fullWidth icon={headerIcon} onClose={onCloseClick}>
        {headingLevel === 2 ? <Heading2>{title}</Heading2> : <Heading3>{title}</Heading3>}
      </Banner>
    );
  };

  getFooter = () => {
    const { tertiaryAction, secondaryAction, primaryAction } = this.props;

    return (
      <ButtonGroup justifyContent="flex-end" padding={4}>
        {tertiaryAction && <Link inherit={false} {...tertiaryAction} />}
        {secondaryAction && <Button {...secondaryAction} />}
        <Button level="primary" {...primaryAction} />
      </ButtonGroup>
    );
  };

  render() {
    const { children, primaryAction, secondaryAction, tertiaryAction, title, ...otherProps } = this.props;

    const restProps = omit(otherProps, [
      'headerColor',
      'onCloseClick',
      'primaryAction',
      'secondaryAction',
      'tertiaryAction',
    ]);

    return (
      <DialogBase {...restProps}>
        {title && this.getHeader()}
        <Box padding={4}>{children}</Box>
        {this.getFooter()}
      </DialogBase>
    );
  }
}

Dialog.propTypes = {
  /** The color of the header of the dialog. */
  headerColor: PropTypes.oneOf(COLORS),
  /** The icon in the header of the dialog. */
  headerIcon: PropTypes.element,
  /** The level of the heading of the dialog. */
  headingLevel: PropTypes.oneOf([2, 3]),
  /** Callback function that is fired when the close icon (in the header) is clicked. */
  onCloseClick: PropTypes.func,
  /** Object containing the label and mouse up handler of the primary action. */
  primaryAction: PropTypes.object.isRequired,
  /** Object containing the label and mouse up handler of the secondary action. */
  secondaryAction: PropTypes.object,
  /** Object containing the label and mouse up handler of the tertiary action. */
  tertiaryAction: PropTypes.object,
  /** The title of the dialog. */
  title: PropTypes.string,
};

Dialog.defaultProps = {
  headerColor: 'neutral',
  headingLevel: 3,
};

export default Dialog;
