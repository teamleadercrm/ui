import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Portal from '../hoc/Portal';
import InjectButton, { IconButton, ButtonGroup } from '../button';
import InjectOverlay from '../overlay';
import { Heading3, TextSmall } from "../typography";
import { events } from '../utils';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import ReactResizeDetector from 'react-resize-detector';
import theme from './theme.css';

const factory = (axis, calculatePositions, Overlay, Button) => {
  class Popover extends PureComponent {
    static propTypes = {
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string,
          children: PropTypes.node,
        }),
      ),
      active: PropTypes.bool,
      anchorEl: PropTypes.object,
      backdrop: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      direction: PropTypes.string.isRequired,
      offsetCorrection: PropTypes.number,
      onCloseClick: PropTypes.func,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      position: PropTypes.string.isRequired,
      title: PropTypes.string,
      showHeader: PropTypes.bool.isRequired,
      subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    };

    static defaultProps = {
      actions: [],
      active: true,
      backdrop: 'dark',
      offsetCorrection: 0,
      showHeader: true,
    };

    constructor() {
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

    componentDidMount() {
      this.setPlacement();

      events.addEventsToWindow({
        resize: this._setPlacementThrottled,
        scroll: this._setPlacementThrottled,
      });
    }

    componentWillUnmount() {
      events.removeEventsFromWindow({
        resize: this._setPlacementThrottled,
        scroll: this._setPlacementThrottled,
      });
    }

    setPlacement() {
      const { anchorEl, direction, position, offsetCorrection } = this.props;
      const targetEl = document.querySelectorAll(`[data-teamleader-ui="popover-${axis}"]`)[0];

      this.setState({
        positioning: calculatePositions(anchorEl, targetEl, direction, position, offsetCorrection),
      });
    }

    render() {
      const { left, top, arrowLeft, arrowTop } = this.state.positioning;

      const {
        actions,
        active,
        backdrop,
        children,
        className,
        onCloseClick,
        onOverlayClick,
        onEscKeyDown,
        onOverlayMouseDown,
        onOverlayMouseMove,
        onOverlayMouseUp,
        subtitle,
        showHeader,
        title,
      } = this.props;

      const actionButtons = actions.map((action, idx) => {
        const className = cx(theme['button'], {
          [action.className]: action.className,
        });

        return <Button key={idx} {...action} className={className}/>; // eslint-disable-line
      });

      const customClassName = cx(
        theme['popover'],
        {
          [theme['active']]: active,
        },
        className,
      );

      return (
        <Portal className={theme['wrapper']}>
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
          <div
            data-teamleader-ui={`popover-${axis}`}
            className={customClassName}
            style={{ left: `${left}px`, top: `${top}px` }}
          >
            <div className={theme['arrow']} style={{ left: `${arrowLeft}px`, top: `${arrowTop}px` }} />
            {showHeader && (
              <header className={theme['header']}>
                {title && <Heading3 className={theme['title']}>{title}</Heading3>}
                {subtitle && <TextSmall className={theme['subtitle']}>{subtitle}</TextSmall>}
                <IconButton icon={<IconCloseMediumOutline />} className={theme['close']} onMouseUp={onCloseClick} />
              </header>
            )}
            <section role="body" className={theme['body']}>
              {children}
            </section>
            {actionButtons.length ? (
              <ButtonGroup className={theme['navigation']}>
                {actionButtons}
              </ButtonGroup>
            ) : null}
            <ReactResizeDetector handleHeight onResize={this._setPlacementThrottled} />
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(Popover);
};

export const PopoverHorizontal = factory('horizontal', calculateHorizontalPositions, InjectOverlay, InjectButton);

export const PopoverVertical = factory('vertical', calculateVerticalPositions, InjectOverlay, InjectButton);
