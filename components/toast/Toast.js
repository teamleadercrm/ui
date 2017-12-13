import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import { IconButton } from '../button';
import { TextSmall } from '../typography';
import Link from '../link';
import LoadingSpinner from '../loadingSpinner';
import { createPortal } from 'react-dom';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

const factory = (Link, IconButton) => {
  class Toast extends PureComponent {
    static propTypes = {
      action: PropTypes.string,
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      onClick: PropTypes.func,
      onTimeout: PropTypes.func,
      processing: PropTypes.bool,
      timeout: PropTypes.number,
    };

    constructor() {
      super(...arguments);

      this.toastRoot = document.createElement('div');
      this.toastRoot.id = 'toast-root';
    }

    componentDidMount() {
      document.body.appendChild(this.toastRoot);

      if (this.props.active && this.props.timeout) {
        this.scheduleTimeout(this.props);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.active && nextProps.timeout) {
        this.scheduleTimeout(nextProps);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.currentTimeout);
      document.body.removeChild(this.toastRoot);
    }

    scheduleTimeout = props => {
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
      const { action, active, children, className, label, onClick, processing } = this.props;

      const toast = (
        <Transition in={active} timeout={{ enter: 0, exit: 1000 }}>
          {state => {
            if (state === 'exited') {
              return null;
            }

            const classNames = cx(
              theme['toast'],
              {
                [theme['is-entering']]: state === 'entering',
                [theme['is-entered']]: state === 'entered',
                [theme['is-exiting']]: state === 'exiting',
              },
              className,
            );

            return (
              <div data-teamleader-ui="toast" className={classNames}>
                {processing && <LoadingSpinner className={theme['spinner']} color="white"/>}
                <TextSmall className={theme['label']} color="white" soft>
                  {label}
                  {children}
                </TextSmall>
                {onClick ? (
                  action ? (
                    <TextSmall className={theme['action-link']} color="white">
                      <Link onClick={onClick}>{action}</Link>
                    </TextSmall>
                  ) : (
                    <IconButton
                      className={theme['action-button']}
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

const Toast = factory(Link, IconButton);

export default Toast;
export { factory as toastFactory, Toast };
