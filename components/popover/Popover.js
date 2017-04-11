import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { throttle } from 'lodash';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Portal from '../hoc/Portal';
import InjectButton from '../button';
import InjectOverlay from '../overlay';
import { events } from '../utils';
import { themr } from 'react-css-themr';
import { POPOVER_HORIZONTAL, POPOVER_VERTICAL } from '../identifiers';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';

const factory = (axis, calculatePositions, Overlay, Button) => {
  class Popover extends Component {
    static propTypes = {
      actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
      })),
      active: PropTypes.bool,
      anchorEl: PropTypes.object,
      backdrop: PropTypes.string,
      children: PropTypes.node,
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
        subtitle: PropTypes.string,
        wrapper: PropTypes.string,
      }),
      title: PropTypes.string,
      subtitle: React.PropTypes.oneOfType([ React.PropTypes.object, React.PropTypes.string ]),
      position: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
      offsetCorrection: PropTypes.number,
    };

    static defaultProps = {
      actions: [],
      active: true,
      backdrop: 'dark',
      offsetCorrection: 0,
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
      const { anchorEl, direction, position, offsetCorrection } = this.props;
      const targetEl = document.querySelectorAll(`[data-teamleader-ui="popover-${axis}"]`)[0];

      this.setState(
        {
          positioning: calculatePositions(anchorEl, targetEl, direction, position, offsetCorrection),
        }
      );
    }

    render () {
      const { left, top, arrowLeft, arrowTop } = this.state.positioning;

      const {
        actions,
        active,
        backdrop,
        children,
        subtitle,
        theme,
        title,
        onCloseClick,
        onOverlayClick,
        onEscKeyDown,
        onOverlayMouseDown,
        onOverlayMouseMove,
        onOverlayMouseUp,
      } = this.props;

      const actionButtons = actions.map((action, idx) => {
        const className = classnames(
          theme.button,
          {
            [action.className]: action.className,
          }
        );

        return <Button key={idx} {...action} className={className} />; // eslint-disable-line
      });

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
              {title
                ? <h6 className={theme.title}>{title}</h6>
                : null
              }
              {subtitle
                ? <p className={theme.subtitle}>{subtitle}</p>
                : null
              }
              <Button icon="close" className={theme.close} onMouseUp={onCloseClick} />
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

  return ActivableRenderer()(Popover);
};

export const PopoverHorizontal = themr(POPOVER_HORIZONTAL)(
  factory('horizontal', calculateHorizontalPositions, InjectOverlay, InjectButton)
);

export const PopoverVertical = themr(POPOVER_VERTICAL)(
  factory('vertical', calculateVerticalPositions, InjectOverlay, InjectButton)
);
