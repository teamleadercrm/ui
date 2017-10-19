import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Portal from '../hoc/Portal';
import ActivableRenderer from '../hoc/ActivableRenderer';
import InjectButton from '../button/Button.js';
import InjectIconButton from '../button/IconButton';
import InjectOverlay from '../overlay/Overlay';
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

      const actionButtons = actions.map((action, idx) => {
        const className = cx(theme.button, {
          [action.className]: action.className,
        });
        return <Button key={idx} {...action} className={className} />; // eslint-disable-line
      });

      const dialogClassNames = cx(
        [theme.dialog, theme[size], theme[type]],
        {
          [theme.active]: active,
        },
        className,
      );

      return (
        <Portal className={theme.wrapper}>
          <Overlay
            active={active}
            backdrop={backdrop}
            className={theme.overlay}
            onClick={onOverlayClick}
            onEscKeyDown={onEscKeyDown}
            onMouseDown={onOverlayMouseDown}
            onMouseMove={onOverlayMouseMove}
            onMouseUp={onOverlayMouseUp}
          />
          <div data-teamleader-ui="dialog" className={dialogClassNames}>
            <header className={theme.header}>
              {type === 'warning' && <IconWarningMediumOutline className={theme.icon} />}
              {title && <h6 className={theme.title}>{title}</h6>}
              <IconButton icon={<IconCloseMediumOutline />} className={theme.close} onMouseUp={onCloseClick} />
            </header>
            <section role="body" className={theme.body}>
              {children}
            </section>
            {actionButtons.length && (
              <nav role="navigation" className={theme.navigation}>
                {actionButtons}
              </nav>
            )}
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(Dialog);
};

const Dialog = factory(InjectOverlay, InjectButton, InjectIconButton);

export default Dialog;
export { Dialog, factory as dialogFactory };
