import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import Overlay from '../overlay/Overlay';
import Transition from 'react-transition-group/Transition';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import useFocusTrap from '../../utils/useFocusTrap';
import useDraggable from './useDraggable';

export const DialogBase = ({
  active,
  backdrop,
  children,
  className,
  onEscKeyDown,
  onOverlayClick,
  scrollable,
  size,
  initialFocusRef,
  dragHandleRef,
}) => {
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
              <div ref={ref} data-teamleader-ui="dialog" className={dialogClassNames}>
                <div className={theme['inner']}>
                  {scrollable ? (
                    <Box display="flex" flexDirection="column" overflowY="auto">
                      {children}
                    </Box>
                  ) : (
                    children
                  )}
                </div>
              </div>
            </FocusRing>
          </Overlay>
        );
      }}
    </Transition>
  );

  return createPortal(dialog, document.body);
};

DialogBase.propTypes = {
  /** If true, the dialog will show on screen. */
  active: PropTypes.bool,
  /** Specify which backdrop the dialog should show. */
  backdrop: PropTypes.string,
  /** The content to display inside the dialog. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Callback function that is fired when the escape key is pressed. */
  onEscKeyDown: PropTypes.func,
  /** Callback function that is fired when the mouse clicks on the overlay. */
  onOverlayClick: PropTypes.func,
  /** If true, the content of the dialog will be scrollable when it exceeds the available height. */
  scrollable: PropTypes.bool,
  /** The size of the dialog. */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
  /** The initial part of the dialog where the focus will be set, useful to avoid focusing on the close button */
  initialFocusRef: PropTypes.any,
  /** The element used to drag a dialog, @see Dialog component header for an example */
  dragHandleRef: PropTypes.any,
};

DialogBase.defaultProps = {
  active: false,
  backdrop: 'dark',
  scrollable: true,
  size: 'medium',
};

DialogBase.Header = Header;
DialogBase.Body = Body;
DialogBase.Footer = Footer;

export default DialogBase;
