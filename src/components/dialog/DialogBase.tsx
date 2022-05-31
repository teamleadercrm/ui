import React, { ReactNode, RefObject } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import Box from '../box';
import Overlay from '../overlay/Overlay';
import Transition from 'react-transition-group/Transition';
import * as DialogHeader from './Header';
import * as DialogBody from './Body';
import * as DialogFooter from './Footer';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import useFocusTrap from '../../utils/useFocusTrap';
import useDraggable from './useDraggable';
import { BoxProps } from '../box/Box';

export interface DialogBaseProps extends Omit<BoxProps, 'form' | 'size'> {
  /** If true, the dialog will show on screen. */
  active?: boolean;
  /** Specify which backdrop the dialog should show. */
  backdrop?: string;
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Callback function that is fired when the escape key is pressed. */
  onEscKeyDown?: () => void;
  /** Callback function that is fired when the mouse clicks on the overlay. */
  onOverlayClick?: () => void;
  /** If true, the content of the dialog will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
  /** The size of the dialog. */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** The initial part of the dialog where the focus will be set, useful to avoid focusing on the close button */
  initialFocusRef?: RefObject<HTMLElement>;
  /** The element used to drag a dialog, @see Dialog component header for an example */
  dragHandleRef?: RefObject<HTMLElement>;
  /** If true the dialog will render as a form element. */
  form?: boolean;
  /** Optional callback if the dialog is a form and is being submitted */
  onSubmit?: () => void;
}

export const DialogBase = ({
  active = false,
  backdrop = 'dark',
  children,
  className,
  onEscKeyDown,
  onOverlayClick,
  scrollable = true,
  size = 'medium',
  initialFocusRef,
  dragHandleRef,
  form,
  onSubmit,
}: DialogBaseProps) => {
  const { ref, FocusRing } = useFocusTrap({ active, initialFocusRef });
  useDraggable({ active, dragTargetRef: ref, dragHandleRef });

  if (!active) {
    return null;
  }

  const dialog = (
    <Transition timeout={0} in={active} appear>
      {(state) => {
        const dialogClassNames = cx(
          uiUtilities['box-shadow-300'],
          theme['dialog-base'],
          theme[`is-${size}`],
          { [theme['is-entering']]: state === 'entering', [theme['is-entered']]: state === 'entered' },
          className,
        );

        return (
          <Overlay
            active={active}
            backdrop={backdrop}
            className={theme['overlay']}
            onOverlayClick={onOverlayClick}
            onEscKeyDown={onEscKeyDown}
          >
            <FocusRing>
              <Box
                element={form ? 'form' : 'div'}
                ref={ref}
                data-teamleader-ui="dialog"
                className={dialogClassNames}
                {...(form && { onSubmit })}
              >
                <div className={theme['inner']}>
                  {scrollable ? (
                    <Box display="flex" flexDirection="column" overflowY="auto">
                      {children}
                    </Box>
                  ) : (
                    children
                  )}
                </div>
              </Box>
            </FocusRing>
          </Overlay>
        );
      }}
    </Transition>
  );

  return createPortal(dialog, document.body);
};

DialogBase.Header = DialogHeader.default;
DialogBase.Body = DialogBody.default;
DialogBase.Footer = DialogFooter.default;

export default DialogBase;