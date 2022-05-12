import React, { ReactNode } from 'react';
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

interface EmptyStateProps extends Omit<BoxProps, 'size'> {
  hidePointer?: boolean;
  metaText?: ReactNode | string;
  size?: 'small' | 'medium' | 'large';
  title?: ReactNode | string;
  className?: string;
}

const illustrationMap = {
  small: <IllustrationEmptyState36X36Pointer />,
  medium: <IllustrationEmptyState48X48Pointer />,
  large: <IllustrationEmptyState130X130Pointer />,
};

const EmptyState = ({
  className,
  metaText,
  hidePointer = false,
  size = 'medium',
  title,
  ...others
}: EmptyStateProps) => {
  const classNames = cx(
    theme['wrapper'],
    theme[`is-${size}`],
    {
      [theme['has-pointer']]: title,
    },
    className,
  );

  return (
    <Box
      {...others}
      alignItems="center"
      className={classNames}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      {title && !hidePointer && <div className={theme['pointer']}>{illustrationMap[size]}</div>}
      <div className={theme['content']}>
        {title && <Heading3 color="teal">{title}</Heading3>}
        {metaText && (
          <TextBody marginTop={title && 2} color="neutral">
            {metaText}
          </TextBody>
        )}
      </div>
    </Box>
  );
};

export default EmptyState;
