import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import throttle from 'lodash.throttle';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Portal from '../hoc/Portal';
import InjectButton from '../button';
import InjectOverlay from '../overlay';
import { events } from '../utils';
import { themr } from 'react-css-themr';
import { POPOVER_HORIZONTAL, POPOVER_VERTICAL } from '../identifiers';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';

const factory = (Overlay, Button, calculatePositions, axis) => {
  class PopoverHorizontal extends Component {
    static propTypes = {
      active: PropTypes.bool,
      anchorEl: PropTypes.object,
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
      position: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    };

    static defaultProps = {
      active: true,
      backdrop: 'dark',
    };

    constructor () {
      super(...arguments);

      this.setPlacement = this.setPlacement.bind(this);
      this._setPlacementThrottled = this._setPlacementThrottled.bind(this);

      this.state = {
        positioning: {
          left: 0,
          top: 0,
          arrowLeft: 0,
          arrowTop: 0,
        },
      };
    }

    _setPlacementThrottled = throttle(this.setPlacement, 16);

    componentDidMount () {
      this.setPlacement();

      events.addEventsToWindow({
        resize: this._setPlacementThrottled,
        scroll: this._setPlacementThrottled,
      });
    }

    componentWillUnmount () {
      events.removeEventsFromWindow({
        resize: this._setPlacementThrottled,
        scroll: this._setPlacementThrottled,
      });
    }

    setPlacement () {
      const { anchorEl, direction, position } = this.props;
      const targetEl = document.querySelectorAll(`[data-teamleader-ui="popover-${axis}"]`)[0];

      this.setState(
        {
          positioning: calculatePositions(anchorEl, targetEl, direction, position),
        }
      );
    }

    render () {
      const { left, top, arrowLeft, arrowTop } = this.state.positioning;

      const {
        active,
        backdrop,
        children,
        theme,
        title,
        onOverlayClick,
        onEscKeyDown,
        onOverlayMouseDown,
        onOverlayMouseMove,
        onOverlayMouseUp,
      } = this.props;

      const className = classnames(
        [
          theme.popover,
        ],
        {
          [theme.active]: active,
        }
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
            data-teamleader-ui={`popover-${axis}`}
            className={className}
            style={{ left: `${left}px`, top: `${top}px` }}
          >
            <div className={theme.arrow} style={{ left : `${arrowLeft}px`, top : `${arrowTop}px` }} />
            <header className={theme.header}>
              <h6 className={theme.title}>{title}</h6>
              <Button icon="close" className={theme.close} />
            </header>
            <section role="body" className={theme.body}>
              {children}
            </section>
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(PopoverHorizontal);
};

export const PopoverHorizontal = themr(POPOVER_HORIZONTAL)(
  factory(InjectOverlay, InjectButton, calculateHorizontalPositions, 'horizontal')
);

export const PopoverVertical = themr(POPOVER_VERTICAL)(
  factory(InjectOverlay, InjectButton, calculateVerticalPositions, 'vertical')
);
