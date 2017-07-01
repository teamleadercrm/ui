import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { TOAST } from '../identifiers';
import ActivableRenderer from '../hoc/ActivableRenderer';
import { Button, IconButton } from '../button';
import Portal from '../hoc/Portal';

const factory = (Button, IconButton) => {
  class Toast extends Component {
    static propTypes = {
      action: PropTypes.string,
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      onClick: PropTypes.func,
      onTimeout: PropTypes.func,
      theme: PropTypes.shape({
        accept: PropTypes.string,
        active: PropTypes.string,
        button: PropTypes.string,
        cancel: PropTypes.string,
        iconButton: PropTypes.string,
        label: PropTypes.string,
        toast: PropTypes.string,
        warning: PropTypes.string,
      }),
      timeout: PropTypes.number,
      type: PropTypes.oneOf([ 'accept', 'cancel', 'warning' ]),
    };

    componentDidMount () {
      if (this.props.active && this.props.timeout) {
        this._scheduleTimeout(this.props);
      }
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.active && nextProps.timeout) {
        this._scheduleTimeout(nextProps);
      }
    }

    componentWillUnmount () {
      clearTimeout(this.currentTimeout);
    }

    _scheduleTimeout = (props) => {
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

    render () {
      const {
        action,
        active,
        children,
        label,
        onClick,
        theme,
        type,
      } = this.props;

      const className = classnames([
        theme.toast,
        theme[ type ],
      ], {
        [theme.active]: active,
      },
        this.props.className
      );

      return (
        <Portal className={theme.portal}>
          <div
            data-teamleader-ui="toast"
            className={className}
          >
            <span className={theme.label}>
              { label }
              { children }
            </span>
            {
              onClick ? action ? <Button className={theme.button} label={action} onClick={onClick} />
                : <IconButton className={theme.iconButton} icon="close" onClick={onClick} /> : null
            }
          </div>
        </Portal>
      );
    }
  }

  return ActivableRenderer()(Toast);
};

const Toast = factory(Button, IconButton);
export default themr(TOAST)(Toast);
export { factory as toastFactory };
export { Toast };
