import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconButton } from '../button';
import Link from '../link';
import { TextBody } from '../typography';
import LoadingSpinner from '../loadingSpinner';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';
import uiUtils from '@teamleader/ui-utilities';

class Toast extends PureComponent {
  componentDidMount() {
    if (this.props.timeout) {
      this.scheduleTimeout(this.props);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.currentTimeout);
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

  renderCustomAction = () => {
    const { action, actionLabel } = this.props;
    return (
      action && (
        <Link className={theme['action-link']} onClick={action}>
          {actionLabel}
        </Link>
      )
    );
  };

  renderCustomLink = () => {
    const { link } = this.props;
    return (
      link && (
        <TextBody>{React.cloneElement(link, { className: cx(link.props.className, theme['action-link']) })}</TextBody>
      )
    );
  };

  renderCloseButton = () => {
    const { onClose } = this.props;
    return (
      onClose && (
        <IconButton
          className={theme['action-button']}
          icon={<IconCloseMediumOutline />}
          color="white"
          onClick={onClose}
        />
      )
    );
  };

  handleMouseEnter = () => {
    if (this.props.timeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
  };

  handleMouseLeave = () => {
    if (this.props.timeout) {
      this.scheduleTimeout(this.props);
    }
  };

  render() {
    const { children, className, label, processing } = this.props;

    const classNames = cx(uiUtils['reset-box-sizing'], theme['toast'], uiUtils['box-shadow-400'], className);

    return (
      <div
        data-teamleader-ui="toast"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={classNames}
      >
        {processing && <LoadingSpinner className={theme['spinner']} color="neutral" tint="lightest" />}
        <TextBody className={theme['label']} color="neutral" tint="lightest" element="div">
          {label}
          {children}
        </TextBody>
        {this.renderCustomAction() || this.renderCustomLink() || this.renderCloseButton()}
      </div>
    );
  }
}

Toast.propTypes = {
  /** A custom action you want to attach to the toast link */
  action: PropTypes.func,
  /** The label for the custom action you want to show */
  actionLabel: PropTypes.string,
  /** The content to display inside the Toast */
  children: PropTypes.node,
  /** A class name for the Toast to give custom styles. */
  className: PropTypes.string,
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A custom link element to point to */
  link: PropTypes.element,
  /** Action to close the Toast */
  onClose: PropTypes.func,
  /** Action to be executed when the timeout limit has been reached */
  onTimeout: PropTypes.func, // eslint-disable-line
  /** Show or hide the processing icon */
  processing: PropTypes.bool,
  /** Timeout duration in milliseconds */
  timeout: PropTypes.number,
};

export default Toast;
