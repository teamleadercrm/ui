import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import theme from './theme.css';
import { KEY } from '../../constants';
import { selectOverlayNode } from '../select/Select';

/** @type {React.ComponentType<any>} */
class Overlay extends PureComponent {
  innerWrapperRef = React.createRef();
  clickOriginRef = React.createRef();

  componentDidMount() {
    const { active, lockScroll } = this.props;

    if (active && lockScroll) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lockScroll) {
      const becomingActive = this.props.active && !prevProps.active;
      const becomingUnactive = !this.props.active && prevProps.active;

      if (becomingActive) {
        document.body.style.overflow = 'hidden';
      }

      if (becomingUnactive && !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }
  }

  componentWillUnmount() {
    if (this.props.active && this.props.lockScroll) {
      if (!document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }
  }

  handleEscKey = (event) => {
    if (this.props.active && event.key === KEY.Escape) {
      event.stopPropagation();
      // react-select has its own implementation of an overlay, conflicting with our custom implementation
      // so escape events fired while the select menu is open should be ignored
      const selectMenuOpen = selectOverlayNode.hasChildNodes();
      !selectMenuOpen && this.props.onEscKeyDown && this.props.onEscKeyDown(event);
    }
  };

  handleMouseDown = (event) => {
    this.clickOriginRef.current = event.target;
  };

  handleMouseUp = (event) => {
    // Only register clicks outside of the children
    if (
      this.props.onOverlayClick &&
      // if the clickOrigin is no longer part of the DOM tree, (f.e. due to internal React re-renders)
      document.body.contains(this.clickOriginRef.current) &&
      !this.innerWrapperRef.current?.contains(this.clickOriginRef.current) &&
      // react-select has its own implementation of an overlay, conflicting with our custom implementation
      // so clicks on the select overlay shouldn't be registered either
      !selectOverlayNode.contains(this.clickOriginRef.current) &&
      // make sure only clicks within the current portal's DOM tree are handled
      event.currentTarget.contains(event.target)
    ) {
      this.props.onOverlayClick(event);
    }
  };

  render() {
    const { active, className, backdrop, lockScroll, onEscKeyDown, onOverlayClick, ...other } = this.props;

    return (
      <Transition timeout={0} in={active} appear>
        {(state) => {
          return (
            <div
              data-teamleader-ui="overlay"
              {...other}
              onKeyDown={this.handleEscKey}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              className={cx(
                theme['overlay'],
                theme[backdrop],
                {
                  [theme['is-entered']]: state === 'entered',
                },
                className,
              )}
            >
              <div ref={this.innerWrapperRef}>{this.props.children}</div>
            </div>
          );
        }}
      </Transition>
    );
  }
}

Overlay.propTypes = {
  active: PropTypes.bool,
  backdrop: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  lockScroll: PropTypes.bool,
  onOverlayClick: PropTypes.func,
  onEscKeyDown: PropTypes.func,
};

Overlay.defaultProps = {
  backdrop: 'dark',
  lockScroll: true,
};

export default Overlay;
