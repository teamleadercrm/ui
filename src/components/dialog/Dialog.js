import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';

import theme from './theme.css';

import { Button, ButtonGroup, DialogBase, Heading2, Heading3, Link } from '../../index';
import { COLORS } from '../../constants';
import { IconDragMediumFilled } from '@teamleader/ui-icons';

class Dialog extends PureComponent {
  bodyRef = createRef();
  dragHandleRef = createRef();

  getHeader = () => {
    const { draggable, headerColor, headerIcon, headingLevel, onCloseClick, title } = this.props;
    const icon = draggable ? <div className={theme['drag-icon']} ref={this.dragHandleRef}><IconDragMediumFilled /></div> : headerIcon;

    return (
      <DialogBase.Header color={headerColor} icon={icon} onClose={onCloseClick}>
        {headingLevel === 2 ? <Heading2>{title}</Heading2> : <Heading3>{title}</Heading3>}
      </DialogBase.Header>
    );
  };

  getFooter = () => {
    const { tertiaryAction, secondaryAction, primaryAction } = this.props;

    return (
      <DialogBase.Footer>
        <ButtonGroup justifyContent="flex-end">
          {tertiaryAction && <Link inherit={false} {...tertiaryAction} />}
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
      'headerColor',
      'onCloseClick',
      'primaryAction',
      'secondaryAction',
      'tertiaryAction',
    ]);

    return (
      <DialogBase
        {...restProps}
        className={classNames}
        dragHandleRef={this.dragHandleRef}
        initialFocusRef={this.bodyRef}
        scrollable={false}
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
  /** If true, the dialog will be draggable. */
  draggable: PropTypes.bool,
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
  headerColor: 'neutral',
  headingLevel: 3,
  scrollable: true,
  size: 'medium',
};

export default Dialog;
