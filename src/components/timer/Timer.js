import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import LoadingSpinner from '../loadingSpinner';
import { Monospaced, UITextBody } from '../typography';
import { IconTimerMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
class Timer extends PureComponent {
  render() {
    const { children, className, loading, running, timerRef, ...others } = this.props;

    const classNames = cx(
      theme['timer'],
      {
        [theme['is-loading']]: loading,
        [theme['is-running']]: running,
      },
      className,
    );

    return (
      <Box
        {...others}
        borderRadius="rounded"
        className={classNames}
        data-teamleader-ui="timer"
        element="button"
        alignItems="center"
        display="flex"
        ref={timerRef}
        paddingHorizontal={2}
      >
        <Icon color={running ? 'violet' : 'teal'} tint="darkest">
          <IconTimerMediumOutline />
        </Icon>
        {loading ? (
          <Box flex={1} display="flex" justifyContent="center">
            <LoadingSpinner color={running ? 'violet' : 'neutral'} size="small" />
          </Box>
        ) : (
          <UITextBody element={Monospaced} marginLeft={2} color={running ? 'violet' : 'teal'}>
            {children}
          </UITextBody>
        )}
      </Box>
    );
  }
}

Timer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  loading: PropTypes.bool,
  running: PropTypes.bool,
};

Timer.defaultProps = {
  loading: false,
  running: false,
};

export default Timer;
