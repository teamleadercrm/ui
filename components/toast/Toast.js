import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import { Button, IconButton } from '../button';
import { createPortal } from 'react-dom';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

const factory = (Button, IconButton) => {
  class Toast extends PureComponent {
    static propTypes = {
      action: PropTypes.string,
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      onClick: PropTypes.func,
      onTimeout: PropTypes.func,
      timeout: PropTypes.number,
      type: PropTypes.oneOf(['accept', 'cancel', 'warning']),
    };

    constructor() {
      super(...arguments);

      this.toastRoot = document.createElement('div');
      this.toastRoot.id = 'toast-root';
    }

    componentDidMount() {
      document.body.appendChild(this.toastRoot);

      if (this.props.active && this.props.timeout) {
        this._scheduleTimeout(this.props);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.active && nextProps.timeout) {
        this._scheduleTimeout(nextProps);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.currentTimeout);
      document.body.removeChild(this.toastRoot);
    }

    _scheduleTimeout = props => {
      const { onTimeout, timeout } = props;

      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }

      this.currentTimeout = setTimeout(() => {
        if (onTimeout) {
          onTimeout();
        }

        this.currentTimeout = null;
      }, timeout);
    };

    render() {
      const { action, active, children, className, label, onClick, type } = this.props;

      const toast = (
        <Transition
          in={active}
          timeout={{
            // Set 'enter' timeout to '0' so that enter animation will start immediately.
            enter: 0,
            // Set 'exit' timeout to 'duration' so that the 'exited' status won't be applied until animation completes.
            exit: 1000,
          }}
        >
          {state => {
            if (state === 'exited') {
              return null;
            }

            const classNames = cx(
              theme['toast'],
              theme[type],
              {
                [theme['is-entering']]: state === 'entering',
                [theme['is-entered']]: state === 'entered',
                [theme['is-exiting']]: state === 'exiting',
              },
              className,
            );

            return (
              <div data-teamleader-ui="toast" className={classNames}>
                <span className={theme['label']}>
                  {label}
                  {children}
                </span>
                {onClick ? (
                  action ? (
                    <Button className={theme['button']} label={action} level="outline" onClick={onClick} size="small" />
                  ) : (
                    <IconButton
                      className={theme['icon-button']}
                      icon={<IconCloseMediumOutline />}
                      color="white"
                      onClick={onClick}
                    />
                  )
                ) : null}
              </div>
            );
          }}
        </Transition>
      );

      return createPortal(toast, this.toastRoot);
    }
  }

  return Toast;
};

const Toast = factory(Button, IconButton);

export default Toast;
export { factory as toastFactory, Toast };
