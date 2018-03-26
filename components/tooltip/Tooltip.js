import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import omit from 'lodash.omit';
import { createPortal } from 'react-dom';
import { getViewport } from '../utils/utils';
import theme from './theme.css';

const POSITIONS = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical',
};

const SIZES = {
  medium: {
    padding: 3,
  },
  small: {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
};

const tooltipFactory = () => {
  return ComposedComponent => {
    class TooltippedComponent extends Component {
      static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        tooltipColor: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse']),
        tooltipHideOnClick: PropTypes.bool,
        tooltipIcon: PropTypes.element,
        tooltipPosition: PropTypes.oneOf(Object.keys(POSITIONS).map(key => POSITIONS[key])),
        tooltipShowOnClick: PropTypes.bool,
        tooltipSize: PropTypes.oneOf(Object.keys(SIZES)),
      };

      static defaultProps = {
        className: '',
        tooltipColor: 'white',
        tooltipHideOnClick: true,
        tooltipIcon: null,
        tooltipPosition: POSITIONS.TOP,
        tooltipShowOnClick: false,
        tooltipSize: 'medium',
      };

      constructor() {
        super(...arguments);

        this.state = {
          active: false,
          position: this.props.tooltipPosition,
        };

        this.tooltipRoot = document.createElement('div');
        this.tooltipRoot.id = 'tooltip-root';
      }

      getPosition(element) {
        const { tooltipPosition } = this.props;

        if (tooltipPosition === POSITIONS.HORIZONTAL) {
          const origin = element.getBoundingClientRect();
          const { width: windowWidth } = getViewport();
          const toRight = origin.left < windowWidth / 2 - origin.width / 2;

          return toRight ? POSITIONS.RIGHT : POSITIONS.LEFT;
        } else if (tooltipPosition === POSITIONS.VERTICAL) {
          const origin = element.getBoundingClientRect();
          const { height: windowHeight } = getViewport();
          const toBottom = origin.top < windowHeight / 2 - origin.height / 2;

          return toBottom ? POSITIONS.BOTTOM : POSITIONS.TOP;
        }

        return tooltipPosition;
      }

      activate({ top, left, position }) {
        document.body.appendChild(this.tooltipRoot);
        this.setState({ active: true, top, left, position });
      }

      deactivate() {
        this.setState({ active: false });
      }

      calculatePosition(element) {
        const { top, left, height, width } = element.getBoundingClientRect();
        const position = this.getPosition(element);
        const xOffset = window.scrollX || window.pageXOffset;
        const yOffset = window.scrollY || window.pageYOffset;

        if (position === POSITIONS.BOTTOM) {
          return {
            top: top + height + yOffset,
            left: left + width / 2 + xOffset,
            position,
          };
        } else if (position === POSITIONS.TOP) {
          return {
            top: top + yOffset,
            left: left + width / 2 + xOffset,
            position,
          };
        } else if (position === POSITIONS.LEFT) {
          return {
            top: top + height / 2 + yOffset,
            left: left + xOffset,
            position,
          };
        } else if (position === POSITIONS.RIGHT) {
          return {
            top: top + height / 2 + yOffset,
            left: left + width + xOffset,
            position,
          };
        }
      }

      handleMouseEnter = event => {
        this.activate(this.calculatePosition(event.currentTarget));

        if (this.props.onMouseEnter) {
          this.props.onMouseEnter(event);
        }
      };

      handleMouseLeave = event => {
        this.deactivate();

        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(event);
        }
      };

      handleClick = event => {
        if (this.props.tooltipHideOnClick && this.state.active) {
          this.deactivate();
        }

        if (this.props.tooltipShowOnClick && !this.state.active) {
          this.activate(this.calculatePosition(event.currentTarget));
        }

        if (this.props.onClick) {
          this.props.onClick(event);
        }
      };

      handleTransitionExited = () => {
        document.body.removeChild(this.tooltipRoot);
      };

      render() {
        const { active, left, top, position } = this.state;
        const { children, className, tooltip, tooltipColor, tooltipIcon, tooltipSize, ...other } = this.props;

        const rest = omit(other, [
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'tooltipHideOnClick',
          'tooltipPosition',
          'tooltipShowOnClick',
        ]);

        const childProps = {
          ...rest,
          className,
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        };

        return React.createElement(
          ComposedComponent,
          childProps,
          children,
          createPortal(
            <Transition in={active} onExited={this.handleTransitionExited} timeout={{ enter: 0, exit: 1000 }}>
              {state => {
                const classNames = cx(theme['tooltip'], theme[tooltipColor], theme[tooltipSize], {
                  [theme['is-entering']]: state === 'entering',
                  [theme['is-entered']]: state === 'entered',
                  [theme['is-exiting']]: state === 'exiting',
                  [theme[position]]: theme[position],
                });

                return (
                  <div className={classNames} data-teamleader-ui="tooltip" style={{ top, left }}>
                    <Box className={theme['inner']} {...SIZES[tooltipSize]}>
                      {tooltipIcon && <div className={theme['icon']}>{tooltipIcon}</div>}
                      <div className={theme['text']}>{tooltip}</div>
                    </Box>
                  </div>
                );
              }}
            </Transition>,
            this.tooltipRoot,
          ),
        );
      }
    }

    return TooltippedComponent;
  };
};

export default tooltipFactory;
