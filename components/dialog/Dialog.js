import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay from '../overlay/Overlay';
import Transition from 'react-transition-group/Transition';
import theme from './theme.css';

class Dialog extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    backdrop: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onEscKeyDown: PropTypes.func,
    onOverlayClick: PropTypes.func,
    onOverlayMouseDown: PropTypes.func,
    onOverlayMouseMove: PropTypes.func,
    onOverlayMouseUp: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
  };

  static defaultProps = {
    active: false,
    backdrop: 'dark',
    size: 'medium',
  };

  constructor() {
    super(...arguments);

    this.dialogRoot = document.createElement('div');
    this.dialogRoot.id = 'dialog-root';
  }

  componentDidMount() {
    document.body.appendChild(this.dialogRoot);
  }

  componentWillUnmount() {
    document.body.removeChild(this.dialogRoot);
  }

  render() {
    const {
      active,
      backdrop,
      children,
      className,
      onEscKeyDown,
      onOverlayClick,
      onOverlayMouseDown,
      onOverlayMouseMove,
      onOverlayMouseUp,
      size,
    } = this.props;

    if (!active) {
      return null;
    }

    const dialogClassNames = cx(theme['dialog'], theme[`is-${size}`], className);

    const dialog = (
      <Transition timeout={0} in={active} appear>
        {state => {
          return (
            <div
              className={cx(theme['wrapper'], {
                [theme['is-entering']]: state === 'entering',
                [theme['is-entered']]: state === 'entered',
              })}
            >
              <Overlay
                active={active}
                backdrop={backdrop}
                className={theme['overlay']}
                onClick={onOverlayClick}
                onEscKeyDown={onEscKeyDown}
                onMouseDown={onOverlayMouseDown}
                onMouseMove={onOverlayMouseMove}
                onMouseUp={onOverlayMouseUp}
              />
              <div data-teamleader-ui="dialog" className={dialogClassNames}>
                <div className={theme['inner']}>{children}</div>
              </div>
            </div>
          );
        }}
      </Transition>
    );

    return createPortal(dialog, this.dialogRoot);
  }
}

export default Dialog;
export { Dialog };
