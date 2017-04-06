import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers.js';
import Portal from '../hoc/Portal';
import ActivableRenderer from '../hoc/ActivableRenderer';
import InjectButton from '../button/Button.js';
import InjectOverlay from '../overlay/Overlay';

const factory = (Overlay, Button) => {
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
      type: PropTypes.string,
    };

    static defaultProps = {
      actions: [],
      active: false,
      backdrop: 'dark',
      type: 'normal',
    };

    render () {
      const actions = this.props.actions.map((action, idx) => {
        const className = classnames(
          this.props.theme.button,
          { [action.className]: action.className }
        );
        return <Button key={idx} {...action} className={className} />; // eslint-disable-line
      });

      const className = classnames(
        [
          this.props.theme.dialog,
          this.props.theme[this.props.type],
        ],
        {
          [this.props.theme.active]: this.props.active,
        },
        this.props.className
      );

      return (
        <Portal className={this.props.theme.wrapper}>
          <Overlay
            active={this.props.active}
            backdrop={this.props.backdrop}
            className={this.props.theme.overlay}
            onClick={this.props.onOverlayClick}
            onEscKeyDown={this.props.onEscKeyDown}
            onMouseDown={this.props.onOverlayMouseDown}
            onMouseMove={this.props.onOverlayMouseMove}
            onMouseUp={this.props.onOverlayMouseUp}
            theme={this.props.theme}
            themeNamespace="overlay"

          />
          <div
            data-teamleader-ui="dialog"
            className={className}
          >
            <header className={this.props.theme.header}>
              {this.props.title
                ? <h6 className={this.props.theme.title}>{this.props.title}</h6>
                : null
              }
              <Button icon="close" className={this.props.theme.close} onMouseUp={this.props.onCloseClick} />
            </header>
            <section role="body" className={this.props.theme.body}>
              {this.props.children}
            </section>
            {actions.length
              ? <nav role="navigation" className={this.props.theme.navigation}>
                {actions}
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

const Dialog = factory(InjectOverlay, InjectButton);
export default themr(DIALOG)(Dialog);
export { Dialog };
export { factory as dialogFactory };
