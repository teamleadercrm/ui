import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ActivableRenderer from '../hoc/ActivableRenderer';
import { Button, IconButton } from '../button';
import Portal from '../hoc/Portal';
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

    componentDidMount() {
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

      const classNames = cx(
        [theme['toast'], theme[type]],
        {
          [theme['active']]: active,
        },
        className,
      );

      return (
        <Portal>
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
                  className={theme['iconButton']}
                  icon={<IconCloseMediumOutline />}
                  inverse
                  onClick={onClick}
                />
              )
            ) : null}
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(Toast);
};

const Toast = factory(Button, IconButton);

export default Toast;
export { factory as toastFactory, Toast };
