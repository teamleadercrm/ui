import { IconTimerMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { forwardRef, ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import LoadingSpinner from '../loadingSpinner';
import { Monospaced, UITextBody } from '../typography';
import theme from './theme.css';

export interface TimerProps extends Omit<BoxProps, 'children' | 'className'> {
  className?: string;
  children: ReactNode;
  loading?: boolean;
  running?: boolean;
}

const Timer: GenericComponent<TimerProps> = forwardRef<HTMLElement, TimerProps>(
  ({ children, className, loading = false, running = false, ...others }, ref) => {
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
        ref={ref}
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
  },
);

Timer.displayName = 'Timer';
export default Timer;
