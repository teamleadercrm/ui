import React, { ReactNode, forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import {
  IllustrationEmptyState36X36Pointer,
  IllustrationEmptyState48X48Pointer,
  IllustrationEmptyState130X130Pointer,
} from '@teamleader/ui-illustrations';
import { Heading3, TextBody } from '../typography';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import BadgedLink, { BadgedLinkProps } from '../badgedLink';
import { IconAddSmallOutline } from '@teamleader/ui-icons';

export interface EmptyStateProps extends Omit<BoxProps, 'size'> {
  hidePointer?: boolean;
  metaText?: ReactNode | string;
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  title?: ReactNode | string;
  action?: Omit<BadgedLinkProps, 'icon' | 'inherit'> & { children: ReactNode };
}

const illustrationMap = {
  small: <IllustrationEmptyState36X36Pointer />,
  medium: <IllustrationEmptyState48X48Pointer />,
  large: <IllustrationEmptyState130X130Pointer />,
};

const EmptyState: GenericComponent<EmptyStateProps> = forwardRef<HTMLElement, EmptyStateProps>(
  ({ className, metaText, hidePointer = false, size = 'medium', title, action, ...others }, ref) => {
    const classNames = cx(
      theme['wrapper'],
      theme[`is-${size}`],
      {
        [theme['has-pointer']]: title,
      },
      className as string,
    );

    return (
      <Box
        data-teamleader-ui="empty-state"
        {...others}
        alignItems="center"
        className={classNames}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        ref={ref}
      >
        {title && !hidePointer && <div className={theme['pointer']}>{illustrationMap[size]}</div>}
        <div className={theme['content']}>
          {title && <Heading3 color="teal">{title}</Heading3>}
          {metaText && (
            <TextBody marginTop={title ? 2 : undefined} color="neutral">
              {metaText}
            </TextBody>
          )}
          {action && (
            <Box marginTop={3}>
              <BadgedLink {...action} icon={<IconAddSmallOutline />} inherit={false} />
            </Box>
          )}
        </div>
      </Box>
    );
  },
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;
