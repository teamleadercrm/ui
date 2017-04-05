import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import throttle from 'lodash.throttle';
import Portal from '../hoc/Portal';
import ActivableRenderer from '../hoc/ActivableRenderer';
import { POPOVER_HORIZONTAL, POPOVER_VERTICAL } from '../identifiers';
import { events } from '../utils';
import InjectOverlay from '../overlay';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';

const factory = (Overlay, calculatePositions, axis) => {
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
      const targetEl = document.querySelectorAll(`[data-teamleader-ui="popover-${axis}"]`)[0];
      this.setState(
        {
          positioning: calculatePositions(this.props.anchorEl, targetEl, this.props.direction, this.props.position),
        }
      );
    }

    render () {
      const { active, children, theme, title } = this.props;
      const { left, top, arrowLeft, arrowTop } = this.state.positioning;

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
            active={this.props.active}
            backdrop={this.props.backdrop}
            className={theme.overlay}
            onClick={this.props.onOverlayClick}
            onEscKeyDown={this.props.onEscKeyDown}
            onMouseDown={this.props.onOverlayMouseDown}
            onMouseMove={this.props.onOverlayMouseMove}
            onMouseUp={this.props.onOverlayMouseUp}
            theme={theme}
            themeNamespace="overlay"

          />
          <div
            data-teamleader-ui={`popover-${axis}`}
            className={className}
            style={{ left: `${left}px`, top: `${top}px`, position: 'absolute' }}
          >
            <div className={theme.arrow} style={{ left : `${arrowLeft}px`, top : `${arrowTop}px` }} />
            <header className={theme.header}>
              <h6 className={theme.title}>{title}</h6>
              <button icon="close" className={theme.close} />
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
  factory(InjectOverlay, calculateHorizontalPositions, 'horizontal')
);

export const PopoverVertical = themr(POPOVER_VERTICAL)(
  factory(InjectOverlay, calculateVerticalPositions, 'vertical')
);
