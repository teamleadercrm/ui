import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';

import theme from './theme.css';

import { Button, ButtonGroup, DialogBase, Heading3 } from '../../index';
import { IconDragMediumFilled } from '@teamleader/ui-icons';

class Dialog extends PureComponent {
  bodyRef = createRef();
  dragHandleRef = createRef();

  getHeader = () => {
    const { onCloseClick, title } = this.props;

    const dragIcon = (
      <div className={theme['drag-icon']} ref={this.dragHandleRef}>
        <IconDragMediumFilled />
      </div>
    );

    return (
      <DialogBase.Header icon={dragIcon} onCloseClick={onCloseClick}>
        <Heading3 maxLines={1}>{title}</Heading3>
      </DialogBase.Header>
    );
  };

  getFooter = () => {
    const { tertiaryAction, secondaryAction, primaryAction, leftAction } = this.props;

    return (
      <DialogBase.Footer display="flex" justifyContent={leftAction ? 'space-between' : 'flex-end'}>
        {leftAction && <Button {...leftAction} />}
        <ButtonGroup justifyContent="flex-end">
          {tertiaryAction && <Button {...tertiaryAction} level="link" />}
          {secondaryAction && <Button {...secondaryAction} />}
          <Button level="primary" {...primaryAction} />
        </ButtonGroup>
      </DialogBase.Footer>
    );
  };

  render() {
    const { children, className, scrollable, title, ...otherProps } = this.props;

    const classNames = cx(theme['dialog'], className);

    const restProps = omit(otherProps, [
      'onCloseClick',
      'primaryAction',
      'secondaryAction',
      'tertiaryAction',
      'leftAction',
    ]);

    return (
      <DialogBase
        className={classNames}
        {...restProps}
        scrollable={false}
        initialFocusRef={this.bodyRef}
        dragHandleRef={this.dragHandleRef}
      >
        {title && this.getHeader()}
        <DialogBase.Body ref={this.bodyRef} scrollable={scrollable}>
          {children}
        </DialogBase.Body>
        {this.getFooter()}
      </DialogBase>
    );
  }
}

Dialog.propTypes = {
  /** If true, the dialog will show on screen. */
  active: PropTypes.bool,
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** A class name for the wrapper to apply custom styles. */
  className: PropTypes.string,
  /** Object containing the the props of the action on the left (a Button). */
  leftAction: PropTypes.object,
  /** Callback function that is fired when the close icon (in the header) is clicked. */
  onCloseClick: PropTypes.func,
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: PropTypes.object.isRequired,
  /** The size of the dialog. */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
  /** If true, the content of the dialog will be scrollable when it exceeds the available height. */
  scrollable: PropTypes.bool,
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction: PropTypes.object,
  /** Object containing the props of the tertiary action (a Link, with the inherit props set to false). */
  tertiaryAction: PropTypes.object,
  /** The title of the dialog. */
  title: PropTypes.string,
};

Dialog.defaultProps = {
  scrollable: true,
  size: 'medium',
};

export default Dialog;
