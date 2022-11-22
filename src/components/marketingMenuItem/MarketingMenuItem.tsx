import React, { ReactNode, MouseEvent } from 'react';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import { TextBodyCompact } from '../typography';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import MarketingLockBadge from '../marketingLockBadge';

export interface MarketingMenuItemProps extends Omit<BoxProps, 'children' | 'className' | 'element' | 'style'> {
  /** The text used as the label for the component. */
  label: React.ReactNode;
  /** A caption displayed underneath the label. */
  caption?: string;
  /** The icon to display on the right side of the label. */
  icon?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The element to render. */
  element?: React.ElementType;
  /** Callback function that is fired when clicking the component. */
  onClick?: (event: MouseEvent) => void;
  /** If true, component will look active. */
  selected?: boolean;
}

const MarketingMenuItem: GenericComponent<MarketingMenuItemProps> = ({
  onClick,
  icon,
  caption,
  className = '',
  element = 'button',
  label,
  selected = false,
  ...others
}) => {
  const classNames = cx(
    theme['marketing-menu-item'],
    {
      [theme['is-selected']]: selected,
    },
    className,
  );

  const boxProps = pickBoxProps(others);
  const restProps = omitBoxProps(others);

  return (
    <Box {...boxProps} data-teamleader-ui="menu-item" display="flex" element="li">
      <Box
        onClick={onClick}
        alignItems="center"
        className={classNames}
        display="flex"
        element={element}
        flex="1 1 auto"
        paddingHorizontal={3}
        paddingVertical={2}
        textAlign="left"
        {...(element === 'a' && { tabIndex: -1 })}
        {...restProps}
      >
        <MarketingLockBadge size="small" />
        <Box
          marginHorizontal={3}
          flex="1 1 auto"
          className={cx(theme['marketing-menu-item-text-container'], {
            [theme['marketing-menu-item-link-container']]: element === 'a',
          })}
        >
          <TextBodyCompact>{label}</TextBodyCompact>
          {caption && (
            <TextBodyCompact color="neutral" tint="darkest">
              {caption}
            </TextBodyCompact>
          )}
        </Box>
        {icon && <Icon className={theme['marketing-menu-item-icon']}>{icon}</Icon>}
      </Box>
    </Box>
  );
};

export default MarketingMenuItem;
