import React, { ReactNode } from 'react';
import cx from 'classnames';
import Island from '../island';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

const PADDING_VERTICAL = {
  small: 1,
  medium: 2,
  large: 3,
};

export interface HeaderProps {
  className?: string;
  children?: ReactNode;
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'tiny' | 'hero'>;
}

const Header: GenericComponent<HeaderProps> = ({ children, className, size, ...others }) => {
  const classNames = cx(theme[`is-${size}`], className);

  return (
    <Island
      {...others}
      alignItems="center"
      className={classNames}
      display="flex"
      size={size}
      paddingVertical={
        PADDING_VERTICAL[size as Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'tiny' | 'hero'>]
      }
    >
      {children}
    </Island>
  );
};

export default Header;
