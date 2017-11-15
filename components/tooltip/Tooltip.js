import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import { createPortal } from 'react-dom';
import { getViewport } from '../utils/utils';
import events from '../utils/events';
import theme from './theme.css';

const POSITION = {
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

const defaults = {
  className: '',
  color: 'white',
  delay: 0,
  hideOnClick: true,
  icon: null,
  passthrough: true,
  showOnClick: false,
  size: 'medium',
  position: POSITION.TOP,
};

const tooltipFactory = (options = {}) => {
  const {
    className: defaultClassName,
    color: defaultColor,
    delay: defaultDelay,
    hideOnClick: defaultHideOnClick,
    icon: defaultIcon,
    showOnClick: defaultShowOnClick,
    size: defaultSize,
    passthrough: defaultPassthrough,
    position: defaultPosition,
  } = { ...defaults, ...options };

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
        tooltipDelay: PropTypes.number,
        tooltipHideOnClick: PropTypes.bool,
        tooltipIcon: PropTypes.element,
        tooltipPosition: PropTypes.oneOf(Object.keys(POSITION).map(key => POSITION[key])),
        tooltipShowOnClick: PropTypes.bool,
        tooltipSize: PropTypes.oneOf(Object.keys(SIZES)),
      };

      static defaultProps = {
        className: defaultClassName,
        tooltipColor: defaultColor,
        tooltipDelay: defaultDelay,
        tooltipHideOnClick: defaultHideOnClick,
        tooltipIcon: defaultIcon,
        tooltipPosition: defaultPosition,
        tooltipShowOnClick: defaultShowOnClick,
        tooltipSize: defaultSize,
      };

      state = {
        active: false,
        position: this.props.tooltipPosition,
        visible: false,
      };

      constructor() {
        super(...arguments);

        this.tooltipRoot = document.createElement('div');
        this.tooltipRoot.id = 'tooltip-root';
      }

      componentDidMount() {
        document.body.appendChild(this.tooltipRoot);
      }

      componentWillUnmount() {
        if (this.tooltipNode) {
          events.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
        }

        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        document.body.removeChild(this.tooltipRoot);
      }

      onTransformEnd = e => {
        if (e.propertyName === 'transform') {
          events.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          this.setState({ visible: false });
        }
      };

      getPosition(element) {
        const { tooltipPosition } = this.props;

        if (tooltipPosition === POSITION.HORIZONTAL) {
          const origin = element.getBoundingClientRect();
          const { width: windowWidth } = getViewport();
          const toRight = origin.left < windowWidth / 2 - origin.width / 2;

          return toRight ? POSITION.RIGHT : POSITION.LEFT;
        } else if (tooltipPosition === POSITION.VERTICAL) {
          const origin = element.getBoundingClientRect();
          const { height: windowHeight } = getViewport();
          const toBottom = origin.top < windowHeight / 2 - origin.height / 2;

          return toBottom ? POSITION.BOTTOM : POSITION.TOP;
        }

        return tooltipPosition;
      }

      activate({ top, left, position }) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        this.setState({ visible: true, position });

        this.timeout = setTimeout(() => {
          this.setState({ active: true, top, left });
        }, this.props.tooltipDelay);
      }

      deactivate() {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        if (this.state.active) {
          events.addEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          this.setState({ active: false });
        } else if (this.state.visible) {
          this.setState({ visible: false });
        }
      }

      calculatePosition(element) {
        const { top, left, height, width } = element.getBoundingClientRect();
        const position = this.getPosition(element);
        const xOffset = window.scrollX || window.pageXOffset;
        const yOffset = window.scrollY || window.pageYOffset;

        if (position === POSITION.BOTTOM) {
          return {
            top: top + height + yOffset,
            left: left + width / 2 + xOffset,
            position,
          };
        } else if (position === POSITION.TOP) {
          return {
            top: top + yOffset,
            left: left + width / 2 + xOffset,
            position,
          };
        } else if (position === POSITION.LEFT) {
          return {
            top: top + height / 2 + yOffset,
            left: left + xOffset,
            position,
          };
        } else if (position === POSITION.RIGHT) {
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
        // this.deactivate();

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

      render() {
        const { active, left, top, position, visible } = this.state;
        const {
          children,
          className,
          onClick, // eslint-disable-line no-unused-vars
          onMouseEnter, // eslint-disable-line no-unused-vars
          onMouseLeave, // eslint-disable-line no-unused-vars
          tooltip,
          tooltipColor,
          tooltipDelay, // eslint-disable-line no-unused-vars
          tooltipHideOnClick, // eslint-disable-line no-unused-vars
          tooltipIcon,
          tooltipPosition, // eslint-disable-line no-unused-vars
          tooltipShowOnClick, // eslint-disable-line no-unused-vars
          tooltipSize,
          ...other
        } = this.props;

        const classNames = cx(theme['tooltip'], theme[tooltipColor], theme[tooltipSize], {
          [theme['active']]: active,
          [theme[position]]: theme[position],
        });

        const childProps = {
          ...other,
          className,
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        };

        const shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough;
        const finalProps = shouldPass ? { ...childProps } : childProps;

        const tooltipComponent = React.createElement(
          ComposedComponent,
          finalProps,
          children,
          visible && (
            <div
              ref={node => {
                this.tooltipNode = node;
              }}
              className={classNames}
              data-teamleader-ui="tooltip"
              style={{ top, left }}
            >
              <Box className={theme['inner']} {...SIZES[tooltipSize]}>
                {tooltipIcon && <div className={theme['icon']}>{tooltipIcon}</div>}
                <div className={theme['text']}>{tooltip}</div>
              </Box>
            </div>
          ),
        );

        return createPortal(tooltipComponent, this.tooltipRoot);
      }
    }

    return TooltippedComponent;
  };
};

export default tooltipFactory;
