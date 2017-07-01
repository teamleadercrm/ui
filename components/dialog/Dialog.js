import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers.js';
import Portal from '../hoc/Portal';
import ActivableRenderer from '../hoc/ActivableRenderer';
import FontIcon from '../font_icon';
import InjectButton from '../button/Button.js';
import InjectIconButton from '../button/IconButton';
import InjectOverlay from '../overlay/Overlay';

const factory = (Overlay, Button, IconButton) => {
  class Dialog extends Component {
    static propTypes = {
      actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
      })),
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
      size: PropTypes.oneOf([ 'small', 'medium', 'large', 'fullscreen' ]),
      theme: PropTypes.shape({
        active: PropTypes.string,
        arrow: PropTypes.string,
        body: PropTypes.string,
        button: PropTypes.string,
        close: PropTypes.string,
        dialog: PropTypes.string,
        header: PropTypes.string,
        navigation: PropTypes.string,
        overlay: PropTypes.string,
        title: PropTypes.string,
        wrapper: PropTypes.string,
      }),
      title: PropTypes.string,
      type: PropTypes.oneOf([ 'regular', 'warning' ]),
    };

    static defaultProps = {
      actions: [],
      active: false,
      backdrop: 'dark',
      size: 'medium',
      type: 'regular',
    };

    render () {
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
        theme,
        title,
        type,
      } = this.props;

      const actionButtons = actions.map((action, idx) => {
        const className = cx(
          theme.button,
          {
            [action.className]: action.className,
          }
        );
        return <Button key={idx} {...action} className={className} medium />; // eslint-disable-line
      });

      const dialogClassNames = cx(
        [
          theme.dialog,
          theme[size],
          theme[type],
        ],
        {
          [theme.active]: active,
        },
        className
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
            theme={theme}
            themeNamespace="overlay"
          />
          <div
            data-teamleader-ui="dialog"
            className={dialogClassNames}
          >
            <header className={theme.header}>
              {type === 'warning' ? <FontIcon className={theme.icon} value="alert_circle" /> : null}
              {title
                ? <h6 className={theme.title}>{title}</h6>
                : null
              }
              <IconButton icon="close" className={theme.close} onMouseUp={onCloseClick} />
            </header>
            <section role="body" className={theme.body}>
              {children}
            </section>
            {actionButtons.length
              ? <nav role="navigation" className={theme.navigation}>
                {actionButtons}
              </nav>
              : null
            }
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(Dialog);
};

const Dialog = factory(InjectOverlay, InjectButton, InjectIconButton);
export default themr(DIALOG)(Dialog);
export { Dialog };
export { factory as dialogFactory };
