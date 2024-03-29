import { IconDragMediumFilled } from '@teamleader/ui-icons';
import cx from 'classnames';
import omit from 'lodash.omit';
import React, { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { GenericComponent } from '../../@types/types';
import { ButtonGroup, DialogBase, Heading3 } from '../../index';
import { DialogBaseProps } from './DialogBase';
import theme from './theme.css';
import { SIZES } from '../../constants';
import TooltippedButton from './TooltippedButton';

export interface DialogProps extends Omit<DialogBaseProps, 'ref'> {
  /** If true, the dialog will show on screen. */
  active?: boolean;
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** A class name for the wrapper to apply custom styles. */
  className?: string;
  /** Object containing the the props of the action on the left (a Button). */
  leftAction?: object;
  /** Callback function that is fired when the close icon (in the header) is clicked. */
  onCloseClick?: () => void;
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: object;
  /** The size of the dialog. */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'smallest'>;
  /** If true, the content of the dialog will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction?: object;
  /** Object containing the props of the tertiary action (a Link, with the inherit props set to false). */
  tertiaryAction?: object;
  /** The title of the dialog. */
  title?: ReactNode;
  /** If true the dialog will render as a form element. */
  form?: boolean;
  /** Optional callback if the dialog is a form and is being submitted */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Dialog: GenericComponent<DialogProps> = ({
  children,
  className,
  scrollable = true,
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
  const bodyRef = useRef<HTMLElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const [showScrollShadow, setShowScrollShadow] = useState(true);
  const [reachedScrollEnd, setReachedScrollEnd] = useState(false);

  const handleScrollShadow = useCallback(() => {
    const currentRef = bodyRef.current;
    if (currentRef) {
      setShowScrollShadow(currentRef.scrollHeight > currentRef.clientHeight);
    }
  }, [bodyRef]);
  useEffect(() => {
    handleScrollShadow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyRef, otherProps.active]);

  useResizeDetector({
    refreshMode: 'throttle',
    refreshRate: 250,
    onResize: handleScrollShadow,
    targetRef: bodyRef as MutableRefObject<HTMLElement>,
  });

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
      <DialogBase.Footer
        display="flex"
        justifyContent={leftAction ? 'space-between' : 'flex-end'}
        className={cx({ [theme['scroll-shadow']]: !reachedScrollEnd && showScrollShadow })}
      >
        {leftAction && <TooltippedButton {...leftAction} />}
        <ButtonGroup justifyContent="flex-end">
          {tertiaryAction && <TooltippedButton {...tertiaryAction} level="link" />}
          {secondaryAction && <TooltippedButton {...secondaryAction} />}
          <TooltippedButton level="primary" {...primaryAction} />
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
      <DialogBase.Body ref={bodyRef} scrollable={scrollable} handleShowScrollShadow={setReachedScrollEnd}>
        {children}
      </DialogBase.Body>
      {getFooter()}
    </DialogBase>
  );
};

export default Dialog;
