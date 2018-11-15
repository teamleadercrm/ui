import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import theme from './theme.css';

import { Banner, Box, Button, ButtonGroup, DialogBase, Heading2, Heading3, Link } from '../../index';
import { COLORS } from '../../constants';
import { isElementOverflowingY } from '../utils/utils';

class Dialog extends PureComponent {
  bodyRef = createRef();

  state = {
    isBodyOverFlowing: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.active && !prevProps.active) {
      this.setIsBodyOverflowing();
    }
  }

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
    const { isBodyOverFlowing } = this.state;

    return (
      <ButtonGroup
        className={isBodyOverFlowing ? theme['has-border'] : undefined}
        justifyContent="flex-end"
        padding={4}
      >
        {tertiaryAction && <Link inherit={false} {...tertiaryAction} />}
        {secondaryAction && <Button {...secondaryAction} />}
        <Button level="primary" {...primaryAction} />
      </ButtonGroup>
    );
  };

  setIsBodyOverflowing = () => {
    if (this.bodyRef.current) {
      this.setState({ isBodyOverFlowing: isElementOverflowingY(this.bodyRef.current.node) });
    }
  };

  render() {
    const { children, className, primaryAction, secondaryAction, tertiaryAction, title, ...otherProps } = this.props;

    const classNames = cx(theme['dialog'], className);

    const restProps = omit(otherProps, [
      'headerColor',
      'onCloseClick',
      'primaryAction',
      'secondaryAction',
      'tertiaryAction',
    ]);

    return (
      <DialogBase className={classNames} {...restProps}>
        {title && this.getHeader()}
        <Box className={theme['dialog-body']} padding={4} ref={this.bodyRef}>
          {children}
        </Box>
        {this.getFooter()}
        <ReactResizeDetector handleHeight onResize={this.setIsBodyOverflowing} />
      </DialogBase>
    );
  }
}

Dialog.propTypes = {
  /** A class name for the wrapper to apply custom styles. */
  className: PropTypes.string,
  /** The color of the header of the dialog. */
  headerColor: PropTypes.oneOf(COLORS),
  /** The icon in the header of the dialog. */
  headerIcon: PropTypes.element,
  /** The level of the heading of the dialog. */
  headingLevel: PropTypes.oneOf([2, 3]),
  /** Callback function that is fired when the close icon (in the header) is clicked. */
  onCloseClick: PropTypes.func,
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: PropTypes.object.isRequired,
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction: PropTypes.object,
  /** Object containing the props of the tertiary action (a Link, with the inherit props set to false). */
  tertiaryAction: PropTypes.object,
  /** The title of the dialog. */
  title: PropTypes.string,
};

Dialog.defaultProps = {
  headerColor: 'neutral',
  headingLevel: 3,
};

export default Dialog;
