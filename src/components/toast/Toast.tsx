import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { GenericComponent } from '../../@types/types';
import IconButton from '../iconButton';
import Link from '../link';
import LoadingSpinner from '../loadingSpinner';
import { TextBody } from '../typography';
import theme from './theme.css';

export interface ToastProps {
  /** A custom action you want to attach to the toast link */
  action?: () => void;
  /** The label for the custom action you want to show */
  actionLabel?: string;
  /** The content to display inside the Toast */
  children?: ReactNode;
  /** A class name for the Toast to give custom styles. */
  className?: string;
  /** The textual label displayed inside the button. */
  label?: ReactNode;
  /** A custom link element to point to */
  link?: ReactElement;
  /** Action to close the Toast */
  onClose?: () => void;
  /** Action to be executed when the timeout limit has been reached */
  onTimeout?: () => void;
  /** Show or hide the processing icon */
  processing?: boolean;
  /** Timeout duration in milliseconds */
  timeout?: number;
}

const Toast: GenericComponent<ToastProps> = ({
  children,
  className,
  label,
  processing,
  timeout,
  onTimeout,
  link,
  action,
  actionLabel,
  onClose,
}) => {
  const [currentTimeout, setCurrentTimeout] = useState<number | undefined>(undefined);
  const clearCurrentTimeout = () => {
    clearTimeout(currentTimeout);
    setCurrentTimeout(undefined);
  };
  const scheduleTimeout = () => {
    if (currentTimeout) {
      clearCurrentTimeout();
    }

    setCurrentTimeout(
      window.setTimeout(() => {
        if (onTimeout) {
          onTimeout();
        }

        clearCurrentTimeout();
      }, timeout),
    );
  };
  const handleMouseEnter = () => {
    if (timeout) {
      clearCurrentTimeout();
    }
  };

  const handleMouseLeave = () => {
    if (timeout) {
      scheduleTimeout();
    }
  };

  const renderCustomAction = () => {
    return (
      action && (
        <Link className={theme['action-link']} onClick={action}>
          {actionLabel}
        </Link>
      )
    );
  };

  const renderCustomLink = () => {
    return (
      link && (
        <TextBody>{React.cloneElement(link, { className: cx(link.props.className, theme['action-link']) })}</TextBody>
      )
    );
  };

  const renderCloseButton = () => {
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

  useEffect(() => {
    if (timeout) {
      scheduleTimeout();
    }
    return () => {
      clearCurrentTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout]);

  const classNames = cx(uiUtilities['reset-box-sizing'], uiUtilities['box-shadow-400'], theme['toast'], className);

  return (
    <div
      data-teamleader-ui="toast"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames}
    >
      {processing && <LoadingSpinner className={theme['spinner']} color="neutral" tint="lightest" />}
      <TextBody className={theme['label']} color="neutral" tint="lightest" element="div">
        {label}
        {children}
      </TextBody>
      {renderCustomAction() || renderCustomLink() || renderCloseButton()}
    </div>
  );
};

export default Toast;
