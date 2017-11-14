import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading3 } from '../typography';
import InjectButton, { ButtonGroup } from '../button';
import InjectIconButton from '../button/IconButton';
import InjectOverlay from '../overlay/Overlay';
import Transition from 'react-transition-group/Transition';
import { IconCloseMediumOutline, IconWarningMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

const factory = (Overlay, Button, IconButton) => {
  class Dialog extends PureComponent {
    static propTypes = {
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string,
          children: PropTypes.node,
        }),
      ),
      active: PropTypes.bool,
      backdrop: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      onCloseClick: PropTypes.func,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
      title: PropTypes.string,
      type: PropTypes.oneOf(['regular', 'warning']),
    };

    static defaultProps = {
      actions: [],
      active: false,
      backdrop: 'dark',
      size: 'medium',
      type: 'regular',
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
        actions,
        active,
        backdrop,
        children,
        className,
        onCloseClick,
        onEscKeyDown,
        onOverlayClick,
        onOverlayMouseDown,
        onOverlayMouseMove,
        onOverlayMouseUp,
        size,
        title,
        type,
      } = this.props;

      if (!active) {
        return null;
      }

      const actionButtons = actions.map((action, index) => {
        return <Button key={index} {...action} />;
      });

      const dialogClassNames = cx(theme['dialog'], theme[`is-${size}`], theme[`is-${type}`], className);

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
                  <header className={theme['header']}>
                    {type === 'warning' && <IconWarningMediumOutline className={theme['icon']} />}
                    {title && <Heading3 className={theme['title']}>{title}</Heading3>}
                    <IconButton icon={<IconCloseMediumOutline />} className={theme['close']} onClick={onCloseClick} />
                  </header>
                  <section role="body" className={theme['body']}>
                    {children}
                  </section>
                  {actionButtons.length ? (
                    <ButtonGroup role="navigation" className={theme['navigation']}>
                      {actionButtons}
                    </ButtonGroup>
                  ) : null}
                </div>
              </div>
            );
          }}
        </Transition>
      );

      return createPortal(dialog, this.dialogRoot);
    }
  }

  return Dialog;
};

const Dialog = factory(InjectOverlay, InjectButton, InjectIconButton);

export default Dialog;
export { Dialog, factory as dialogFactory };
