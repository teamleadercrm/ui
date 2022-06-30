import cx from 'classnames';
import React, { CSSProperties, ReactChild, ReactElement, ReactFragment, ReactNode, ReactPortal } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GenericComponent } from '../../@types/types';
import theme from './theme.css';

interface ToastContainerProps {
  /** The content to display inside the ToastContainer */
  children: ReactNode;
  /** A custom class name for custom styling */
  className?: string;
  /** Custom style properties for the container */
  style?: CSSProperties;
}

type AllowedChildrenTypes = ReactChild | ReactFragment | ReactPortal | boolean;

const ToastContainer: GenericComponent<ToastContainerProps> = ({ children, className, style }) => {
  const classNames = cx(theme['container'], className);

  if (!children) {
    return null;
  }

  return (
    <ul className={classNames} style={style} data-teamleader-ui="toast-container">
      <TransitionGroup component="li">
        {React.Children.map<ReactElement, AllowedChildrenTypes>(children, (child, index) => {
          return (
            <CSSTransition
              timeout={1000}
              key={index}
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
};

export default ToastContainer;
