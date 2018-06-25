import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import { IconButton, LinkButton } from '../button';
import { TextBody } from '../typography';
import LoadingSpinner from '../loadingSpinner';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';
import Link from '../link';

class Toast extends PureComponent {
  componentDidMount() {
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
    return action && <LinkButton className={theme['action-link']} inverse label={actionLabel} onClick={action} />;
  };

  renderCustomLink = () => {
    const { link, linkLabel, linkTarget } = this.props;
    return (
      link && (
        <TextBody className={theme['label']} color="white" soft>
          <Link href={link} target={linkTarget} className={theme['action-link']} inherit>
            {linkLabel}
          </Link>
        </TextBody>
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

  render() {
    const { active, children, className, label, processing } = this.props;

    return (
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
              {processing && <LoadingSpinner className={theme['spinner']} color="white" />}
              <TextBody className={theme['label']} color="white">
                {label}
                {children}
              </TextBody>
              {this.renderCustomAction() || this.renderCustomLink() || this.renderCloseButton()}
            </div>
          );
        }}
      </Transition>
    );
  }
}

Toast.propTypes = {
  /** A custom action you want to attach to the toast link */
  action: PropTypes.func,
  /** The label for the custom action you want to show */
  actionLabel: PropTypes.string,
  /** Show or hide the Toast  */
  active: PropTypes.bool,
  /** The content to display inside the Toast */
  children: PropTypes.node,
  /** A class name for the Toast to give custom styles. */
  className: PropTypes.string,
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A custom link to point to */
  link: PropTypes.string,
  /** The textual label displayed inside the link */
  linkLabel: PropTypes.string,
  /** The target for the custom link */
  linkTarget: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /** Action to close the Toast */
  onClose: PropTypes.func,
  /** Action to be executed when the timeout limit has been reached */
  onTimeout: PropTypes.func, // eslint-disable-line
  /** Show or hide the processing icon */
  processing: PropTypes.bool,
  /** Timeout duration in milliseconds */
  timeout: PropTypes.number,
};

Toast.defaultProps = {
  linkTarget: '_self',
};

export default Toast;
