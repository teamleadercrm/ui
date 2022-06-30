import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/** @type {React.ComponentType<any>} */
class ToastContainer extends PureComponent {
  render() {
    const { children, className, style } = this.props;
    const classNames = cx(theme['container'], className);

    return (
      <ul className={classNames} style={style} data-teamleader-ui="toast-container">
        <TransitionGroup component="li">
          {React.Children.map(children, (child) => {
            return (
              <CSSTransition
                timeout={1000}
                key={child.key}
                classNames={{
                  appear: cx(theme['appear']),
                  appearActive: cx(theme['appear-active']),
                  enter: cx(theme['enter']),
                  enterActive: cx(theme['enter-active']),
                  enterDone: cx(theme['enter-done']),
                  exit: cx(theme['exit']),
                  exitActive: cx(theme['exit-active']),
                  exitDone: cx(theme['exit-done']),
                }}
              >
                {child}
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
    );
  }
}

ToastContainer.propTypes = {
  /** The content to display inside the ToastContainer */
  children: PropTypes.any,
  /** A custom class name for custom styling */
  className: PropTypes.string,
  /** Custom style properties for the container */
  style: PropTypes.object,
};

export default ToastContainer;
