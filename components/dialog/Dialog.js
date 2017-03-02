import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers.js';
import { events } from '../utils';
import throttle from 'lodash.throttle';
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
      anchorEl: PropTypes.object,
      anchorOrigin: PropTypes.shape({
        horizontal: PropTypes.string.isRequired,
        vertical: PropTypes.string.isRequired,
      }),
      canAutoPosition: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      onCloseClick: PropTypes.func,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      targetOrigin: PropTypes.shape({
        horizontal: PropTypes.string.isRequired,
        vertical: PropTypes.string.isRequired,
      }),
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
      canAutoPosition: false,
      type: 'normal',
    };

    componentDidMount () {
      if (this.props.anchorOrigin && this.props.targetOrigin) {
        this.setPlacement();

        events.addEventsToWindow({
          resize: throttle(this.setPlacement.bind(this), 16),
          scroll: throttle(this.setPlacement.bind(this), 16),
        });
      }
    }

    componentWillUnmount () {
      if (this.props.anchorOrigin && this.props.targetOrigin) {
        events.removeEventsFromWindow({
          resize: throttle(this.setPlacement.bind(this), 16),
          scroll: throttle(this.setPlacement.bind(this), 16),
        });
      }
    }

    getAnchorPosition (anchorEl) {
      const anchorRect = anchorEl.getBoundingClientRect();

      const anchorPosition = {
        top: anchorRect.top,
        left: anchorRect.left,
        width: anchorEl.offsetWidth,
        height: anchorEl.offsetHeight,
      };

      anchorPosition.right = anchorRect.right || anchorPosition.left + anchorPosition.width;
      anchorPosition.bottom = anchorRect.bottom || anchorPosition.top + anchorPosition.height;
      anchorPosition.middle = anchorPosition.left + ((anchorPosition.right - anchorPosition.left) / 2);
      anchorPosition.center = anchorPosition.top + ((anchorPosition.bottom - anchorPosition.top) / 2);

      return anchorPosition;
    }

    getTargetPosition (targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth,
      };
    }

    getOverlapMode (anchor, target, median) {
      if ([ anchor, target ].indexOf(median) >= 0) {
        return 'auto';
      }
      if (anchor === target) {
        return 'inclusive';
      }
      return 'exclusive';
    }

    getPositions (anchorOrigin, targetOrigin) {
      const anchor = { ...anchorOrigin };
      const target = { ...targetOrigin };

      const positions = {
        x: [ 'left', 'right' ].filter((position) => position !== target.horizontal),
        y: [ 'top', 'bottom' ].filter((position) => position !== target.vertical),
      };

      const overlap = {
        x: this.getOverlapMode(anchor.horizontal, target.horizontal, 'middle'),
        y: this.getOverlapMode(anchor.vertical, target.vertical, 'center'),
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        anchor.vertical = anchor.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          target.vertical = target.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        anchor.horizontal = anchor.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          target.horizontal = target.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: anchor,
      };
    }

    setPlacement () {
      const { anchorEl, anchorOrigin, targetOrigin, canAutoPosition } = this.props;
      const targetEl = document.querySelectorAll('[data-teamleader-ui="dialog"]')[0];
      // const arrowEl = targetEl.querySelector('.' + this.props.theme.arrow);
      const anchor = this.getAnchorPosition(anchorEl);
      let target = this.getTargetPosition(targetEl);

      let targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal],
      };

      if (canAutoPosition) {
        target = this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.position = 'absolute';
      targetEl.style.top = `${Math.max(0, targetPosition.top)}px`;
      targetEl.style.left = `${Math.max(0, targetPosition.left)}px`;
      targetEl.style.maxHeight = `${window.innerHeight}px`;
    }

    applyAutoPositionIfNeeded (anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      const { positions, anchorPos } = this.getPositions(anchorOrigin, targetOrigin);

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        let newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          }
        }
      }

      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        let newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          }
        }
      }

      return targetPosition;
    }

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
            className={this.props.theme.overlay}
            onClick={this.props.onOverlayClick}
            onEscKeyDown={this.props.onEscKeyDown}
            onMouseDown={this.props.onOverlayMouseDown}
            onMouseMove={this.props.onOverlayMouseMove}
            onMouseUp={this.props.onOverlayMouseUp}
            theme={this.props.theme}
            themeNamespace='overlay'
          />
          <div data-teamleader-ui='dialog' className={className}>
            {this.props.anchorOrigin && this.props.targetOrigin ? <div className={this.props.theme.arrow} /> : null}
            <header className={this.props.theme.header}>
              {this.props.title ? <h6 className={this.props.theme.title}>{this.props.title}</h6> : null}
              <Button icon='close' className={this.props.theme.close} onMouseUp={this.props.onCloseClick} />
            </header>
            <section role='body' className={this.props.theme.body}>
              {this.props.children}
            </section>
            {actions.length
              ? <nav role='navigation' className={this.props.theme.navigation}>
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
