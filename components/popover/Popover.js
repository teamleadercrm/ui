import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import InjectButton, { IconButton, ButtonGroup } from '../button';
import InjectOverlay from '../overlay';
import Transition from 'react-transition-group/Transition';
import ReactResizeDetector from 'react-resize-detector';
import { Heading3, TextSmall } from '../typography';
import { events } from '../utils';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
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
      subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    };

    static defaultProps = {
      actions: [],
      active: true,
      backdrop: 'dark',
      offsetCorrection: 0,
    };

    constructor() {
      super(...arguments);

      this.popoverRoot = document.createElement('div');
      this.popoverRoot.id = 'popover-root';

      this.setPlacement = ::this.setPlacement;
      this.setPlacementThrottled = ::this.setPlacementThrottled;

      this.state = {
        positioning: {
          left: 0,
          top: 0,
          arrowLeft: 0,
          arrowTop: 0,
        },
      };
    }

    setPlacementThrottled = throttle(this.setPlacement, 16);

    componentDidMount() {
      document.body.appendChild(this.popoverRoot);

      events.addEventsToWindow({
        resize: this.setPlacementThrottled,
        scroll: this.setPlacementThrottled,
      });
    }

    componentWillUnmount() {
      events.removeEventsFromWindow({
        resize: this.setPlacementThrottled,
        scroll: this.setPlacementThrottled,
      });

      document.body.removeChild(this.popoverRoot);
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.active && prevProps !== this.props) {
        this.setPlacement();
      }
    }

    setPlacement() {
      const { anchorEl, direction, position, offsetCorrection } = this.props;

      if (this.popoverNode) {
        this.setState({
          positioning: calculatePositions(anchorEl, this.popoverNode, direction, position, offsetCorrection),
        });
      }
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
        title,
      } = this.props;

      if (!active) {
        return null;
      }

      const actionButtons = actions.map((action, idx) => <Button key={idx} {...action} />);

      const arrowClassNames = cx(theme['arrow'], {
        [theme['at-header']]: (title || subtitle || onCloseClick) && arrowTop < 0,
      });

      const popover = (
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
                <div
                  data-teamleader-ui={`popover-${axis}`}
                  className={cx(theme['popover'], className)}
                  style={{ left: `${left}px`, top: `${top}px` }}
                  ref={node => {
                    this.popoverNode = node;
                  }}
                >
                  <div className={arrowClassNames} style={{ left: `${arrowLeft}px`, top: `${arrowTop}px` }} />
                  {(title || subtitle || onCloseClick) && (
                    <header className={theme['header']}>
                      {title && <Heading3 className={theme['title']}>{title}</Heading3>}
                      {subtitle && (
                        <TextSmall className={theme['subtitle']} marginTop={1}>
                          {subtitle}
                        </TextSmall>
                      )}
                      {onCloseClick && (
                        <IconButton
                          icon={<IconCloseMediumOutline />}
                          className={theme['close']}
                          onMouseUp={onCloseClick}
                        />
                      )}
                    </header>
                  )}
                  <section role="body" className={theme['body']}>
                    {children}
                  </section>
                  {actionButtons.length ? (
                    <ButtonGroup className={theme['navigation']}>{actionButtons}</ButtonGroup>
                  ) : null}
                  <ReactResizeDetector handleHeight onResize={this.setPlacementThrottled} />
                </div>
              </div>
            );
          }}
        </Transition>
      );

      return createPortal(popover, this.popoverRoot);
    }
  }

  return Popover;
};

export const PopoverHorizontal = factory('horizontal', calculateHorizontalPositions, InjectOverlay, InjectButton);

export const PopoverVertical = factory('vertical', calculateVerticalPositions, InjectOverlay, InjectButton);
