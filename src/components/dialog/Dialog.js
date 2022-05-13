import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';

import theme from './theme.css';

import { Button, ButtonGroup, DialogBase, Heading3 } from '../../index';
import { IconDragMediumFilled } from '@teamleader/ui-icons';

/** @type {React.ComponentType<any>} */
const Dialog = ({
  children,
  className,
  scrollable,
  title,
  form,
  onSubmit,
  tertiaryAction,
  secondaryAction,
  primaryAction,
  leftAction,
  onCloseClick,
  ...otherProps
}) => {
  const bodyRef = createRef();
  const dragHandleRef = createRef();

  const getHeader = () => {
    const dragIcon = (
      <div className={theme['drag-icon']} ref={dragHandleRef}>
        <IconDragMediumFilled />
      </div>
    );

    return (
      <DialogBase.Header icon={dragIcon} onCloseClick={onCloseClick}>
        <Heading3 maxLines={1}>{title}</Heading3>
      </DialogBase.Header>
    );
  };

  const getFooter = () => {
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
      initialFocusRef={bodyRef}
      dragHandleRef={dragHandleRef}
      form={form}
      onSubmit={onSubmit}
    >
      {title && getHeader()}
      <DialogBase.Body ref={bodyRef} scrollable={scrollable}>
        {children}
      </DialogBase.Body>
      {getFooter()}
    </DialogBase>
  );
};

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
  /** If true the dialog will render as a form element. */
  form: PropTypes.boolean,
  /** Optional callback if the dialog is a form and is being submitted */
  onSubmit: PropTypes.func,
};

Dialog.defaultProps = {
  scrollable: true,
  size: 'medium',
};

export default Dialog;
