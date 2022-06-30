import cx from 'classnames';
import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import theme from './theme.css';

import { BoxProps } from '../box/Box';
import { Heading4, Heading5 } from '../typography';
import { GenericComponent } from '../../@types/types';

interface TitleTabProps extends Omit<BoxProps, 'size' | 'element'> {
  active?: boolean;
  children: ReactNode;
  element?: React.ElementType;
  className?: string;
  counter?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  size?: 'small' | 'medium';
}

const TitleTab: GenericComponent<TitleTabProps> = forwardRef<HTMLElement, TitleTabProps>(
  (
    { active = false, children, className, counter = null, size = 'medium', onClick, element = 'a', ...others },
    ref,
  ) => {
    const tabRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => tabRef.current!);

    const blur = () => {
      const currentTabRef = tabRef.current;
      if (currentTabRef?.blur) {
        currentTabRef.blur();
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick(event);
      }
      if (event.pageX !== 0 && event.pageY !== 0) {
        blur();
      }
    };

    const getPaddingHorizontal = () => {
      switch (size) {
        case 'small':
          return 2;
        case 'medium':
        default:
          return 3;
      }
    };

    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    const TextElement = size === 'small' ? Heading5 : Heading4;

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        marginHorizontal={size === 'small' ? 1 : 2}
        paddingHorizontal={getPaddingHorizontal()}
        ref={tabRef}
        onClick={handleClick}
        element={element}
        {...others}
      >
        <TextElement element="span">{children}</TextElement>
        {counter}
      </Box>
    );
  },
);

TitleTab.displayName = 'TitleTab';

export default TitleTab;
