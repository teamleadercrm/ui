import React, { ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

interface Props extends Omit<BoxProps, 'ref'> {
  children?: ReactNode;
  className?: string;
  fixed?: boolean;
}

const Container = ({ children, className, fixed, ...others }: Props) => {
  const classNames = cx(
    theme['container'],
    {
      [theme['is-fixed']]: fixed,
    },
    className,
  );

  return (
    <Box {...others} boxSizing="content-box" className={classNames}>
      {children}
    </Box>
  );
};

export default Container;
