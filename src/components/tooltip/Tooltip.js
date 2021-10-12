import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import omit from 'lodash.omit';
import { createPortal } from 'react-dom';
import { getViewport } from '../utils/utils';
import DocumentObjectProvider, { Context as DocumentObjectContext } from '../hoc/DocumentObjectProvider';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

const POSITIONS = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical',
};

const SIZES = {
  large: {
    padding: 4,
  },
  medium: {
    padding: 3,
  },
  small: {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
};

const Tooltip = (ComposedComponent) => {
  class TooltippedComponent extends Component {
    tooltipRoot = this.props.documentObject.createElement('div');
    ref = React.createRef();

    state = {
      active: false,
      position: this.props.tooltipPosition,
    };

    componentDidMount() {
      const { tooltipActive } = this.props;

      if (tooltipActive) {
        this.activate(this.calculatePosition(this.ref.current));
      }
    }

    componentDidUpdate({ tooltipActive: prevTooltipActive }) {
      const { tooltipActive } = this.props;
      const { active } = this.state;

      if (tooltipActive !== prevTooltipActive) {
        if (tooltipActive && !active) {
          this.activate(this.calculatePosition(this.ref.current));
        }

        if (!tooltipActive && active) {
          this.deactivate();
        }
      }
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
      this.props.documentObject.body.appendChild(this.tooltipRoot);
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

    handleMouseEnter = (event) => {
      this.activate(this.calculatePosition(event.currentTarget));

      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(event);
      }
    };

    handleMouseLeave = (event) => {
      this.deactivate();

      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(event);
      }
    };

    handleClick = (event) => {
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
      this.props.documentObject.body.removeChild(this.tooltipRoot);
    };

    handleTransitionEntered = () => {
      const { onTooltipEntered } = this.props;
      onTooltipEntered && onTooltipEntered();
    };

    render() {
      const { active, left, top, position } = this.state;
      const {
        children,
        className,
        tooltip,
        tooltipColor,
        tooltipIcon,
        tooltipSize,
        tooltipShowDelay,
        zIndex,
        onClick,
        onMouseEnter,
        onMouseLeave,
        tooltipActive,
        ...other
      } = this.props;

      const rest = omit(other, [
        'onTooltipEntered',
        'tooltipHideOnClick',
        'tooltipPosition',
        'tooltipShowOnClick',
        'tooltipShowDelay',
        'documentObject',
      ]);

      let childProps = {
        ...rest,
        className,
        onClick,
        onMouseEnter,
        onMouseLeave,
        ref: this.ref,
      };

      if (tooltipActive === null) {
        childProps = {
          ...childProps,
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        };
      }

      return React.createElement(
        ComposedComponent,
        childProps,
        children,
        createPortal(
          <Transition
            in={active}
            onExited={this.handleTransitionExited}
            onEntered={this.handleTransitionEntered}
            timeout={{ enter: tooltipShowDelay, exit: 1000 }}
          >
            {(state) => {
              const classNames = cx(
                uiUtilities['box-shadow-200'],
                theme['tooltip'],
                theme[tooltipColor],
                theme[tooltipSize],
                {
                  [theme['is-entering']]: state === 'entering',
                  [theme['is-entered']]: state === 'entered',
                  [theme['is-exiting']]: state === 'exiting',
                  [theme[position]]: theme[position],
                },
              );

              return (
                <div className={classNames} data-teamleader-ui="tooltip" style={{ top, left, zIndex }}>
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

  TooltippedComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTooltipEntered: PropTypes.func,
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    tooltipColor: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse']),
    tooltipHideOnClick: PropTypes.bool,
    tooltipIcon: PropTypes.element,
    tooltipPosition: PropTypes.oneOf(Object.keys(POSITIONS).map((key) => POSITIONS[key])),
    tooltipShowOnClick: PropTypes.bool,
    tooltipSize: PropTypes.oneOf(Object.keys(SIZES)),
    documentObject: PropTypes.object.isRequired,
    tooltipShowDelay: PropTypes.number,
    /** The z-index of the Tooltip */
    zIndex: PropTypes.number,
    tooltipActive: PropTypes.bool,
  };

  TooltippedComponent.defaultProps = {
    className: '',
    tooltipColor: 'white',
    tooltipHideOnClick: true,
    tooltipIcon: null,
    tooltipPosition: POSITIONS.TOP,
    tooltipShowOnClick: false,
    tooltipSize: 'medium',
    tooltipShowDelay: 100,
    zIndex: 700,
    tooltipActive: null,
  };

  return DocumentObjectProvider((props) => {
    return (
      <DocumentObjectContext.Consumer>
        {(documentObject) => <TooltippedComponent {...props} documentObject={documentObject} />}
      </DocumentObjectContext.Consumer>
    );
  });
};

export default Tooltip;
