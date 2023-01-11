import React, { ReactNode, useState } from 'react';
import { TextBody, Heading3 } from '../typography';
import Icon from '../icon';
import Box, { pickBoxProps } from '../box';
import { IconChevronDownSmallOutline, IconChevronRightSmallOutline } from '@teamleader/ui-icons';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES } from '../../constants';

export type AllowedAdvancedCollapsibleSize = Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
export type AllowedAdvancedCollapsibleColor = Exclude<
  typeof COLORS[number],
  'aqua' | 'gold' | 'mint' | 'ruby' | 'violet'
>;
export interface AdvancedCollapsibleProps extends Omit<BoxProps, 'size'> {
  color?: AllowedAdvancedCollapsibleColor;
  children: ReactNode;
  indent?: boolean;
  title: string;
  size?: AllowedAdvancedCollapsibleSize;
  defaultIsCollapsed?: boolean;
  onChange?: (collapsed: boolean, event: React.MouseEvent) => void;
}

const AdvancedCollapsible: GenericComponent<AdvancedCollapsibleProps> = ({
  children,
  color = 'teal',
  indent = true,
  size = 'medium',
  title,
  defaultIsCollapsed = true,
  onChange,
  ...others
}) => {
  const [collapsed, setCollapsed] = useState(defaultIsCollapsed);

  const boxProps = pickBoxProps(others);
  const TitleElement = size === 'large' ? Heading3 : TextBody;

  const handleTitleClick = (event: React.MouseEvent) => {
    if (onChange) {
      onChange(!collapsed, event);
    }

    setCollapsed(!collapsed);
  };

  return (
    <Box data-teamleader-ui="advanced-collapsible">
      <Box className={theme['title']} display="flex" alignItems="center" onClick={handleTitleClick} {...boxProps}>
        <Icon color={color} tint="darkest">
          {collapsed ? <IconChevronRightSmallOutline /> : <IconChevronDownSmallOutline />}
        </Icon>
        <TitleElement color={color} marginLeft={2} tint="darkest">
          {size === 'medium' ? <strong>{title}</strong> : title}
        </TitleElement>
      </Box>
      {!collapsed && (
        <Box {...(indent && { className: theme['children-indent'] })} marginTop={2}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default AdvancedCollapsible;
