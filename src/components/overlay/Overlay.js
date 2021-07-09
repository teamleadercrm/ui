import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import theme from './theme.css';

class Overlay extends PureComponent {
  innerWrapperRef = React.createRef();

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

  handleEscKey = (e) => {
    if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
      e.stopPropagation();
      this.props.onEscKeyDown(e);
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Only register clicks outside of the children
    if (this.props.onClick && !this.innerWrapperRef.current?.contains(event.target)) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      active,
      className,
      backdrop,
      lockScroll, // eslint-disable-line
      onEscKeyDown, // eslint-disable-line
      ...other
    } = this.props; // eslint-disable-line

    return (
      <Transition timeout={0} in={active} appear>
        {(state) => {
          return (
            <div
              data-teamleader-ui="overlay"
              {...other}
              onKeyDown={this.handleEscKey}
              onClick={this.handleClick}
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
  onClick: PropTypes.func,
  onEscKeyDown: PropTypes.func,
};

Overlay.defaultProps = {
  backdrop: 'dark',
  lockScroll: true,
};

export default Overlay;
