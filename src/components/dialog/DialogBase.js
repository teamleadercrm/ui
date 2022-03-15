import React, { useEffect, useRef } from 'react';
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
}) => {
  const { ref, FocusRing } = useFocusTrap({ active, initialFocusRef });
  useEffect(() => {
    if (active) {
      makeDraggable(ref);
    }
  }, [active]);
  if (!active) {
    return null;
  }

  const dialog = (
    <Transition timeout={0} in={active} appear>
      {(state) => {
        const dialogClassNames = cx(
          uiUtilities['box-shadow-300'],
          theme['dialog-base'],
          theme['draggable'],
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

const makeDraggable = (targetRef) => {
  let x = 0;
  let y = 0;

  const ele = targetRef.current;

  const mouseDownHandler = function (e) {
    x = e.clientX;
    y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  ele.addEventListener('mousedown', mouseDownHandler);
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
