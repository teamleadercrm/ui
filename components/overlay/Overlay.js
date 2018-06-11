import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import theme from './theme.css';

class Overlay extends PureComponent {
  constructor() {
    super(...arguments);

    this.handleEscKey = ::this.handleEscKey;
  }

  componentDidMount() {
    const { active, lockScroll, onEscKeyDown } = this.props;
    if (onEscKeyDown) {
      document.body.addEventListener('keydown', this.handleEscKey);
    }
    if (active && lockScroll) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.lockScroll) {
      const becomingActive = nextProps.active && !this.props.active;
      const becomingUnactive = !nextProps.active && this.props.active;

      if (becomingActive) {
        document.body.style.overflow = 'hidden';
      }

      if (becomingUnactive && !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.active && !prevProps.active && this.props.onEscKeyDown) {
      document.body.addEventListener('keydown', this.handleEscKey);
    }
  }

  componentWillUnmount() {
    if (this.props.active && this.props.lockScroll) {
      if (!document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }

    if (this.props.onEscKeyDown) {
      document.body.removeEventListener('keydown', this.handleEscKey);
    }
  }

  handleEscKey = e => {
    if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
      this.props.onEscKeyDown(e);
    }
  };

  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.onClick) {
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
        {state => {
          return (
            <div
              data-teamleader-ui="overlay"
              {...other}
              onClick={this.handleClick}
              className={cx(
                theme['overlay'],
                theme[backdrop],
                {
                  [theme['is-entering']]: state === 'entering',
                  [theme['is-entered']]: state === 'entered',
                },
                className,
              )}
            />
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
