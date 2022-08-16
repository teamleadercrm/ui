import React, { ReactNode, useState } from 'react';
import { TextBody, Heading3 } from '../typography';
import Icon from '../icon';
import Box, { pickBoxProps } from '../box';
import { IconChevronDownSmallOutline, IconChevronRightSmallOutline } from '@teamleader/ui-icons';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';
import { PolymorphicComponentProps } from '../../@types/utils';

interface AdvancedCollapsibleProps extends BoxProps {
  color?: 'neutral' | 'teal';
  children: ReactNode;
  title: string;
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
}

const AdvancedCollapsible = <T extends React.ElementType = 'div'>({
  children,
  color = 'teal',
  size = 'medium',
  title,
  ...others
}: PolymorphicComponentProps<T, AdvancedCollapsibleProps>) => {
  const [collapsed, setCollapsed] = useState(true);

  const boxProps = pickBoxProps(others);
  const TitleElement = size === 'large' ? Heading3 : TextBody;

  const handleTitleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box>
      <Box className={theme['title']} display="flex" alignItems="center" onClick={handleTitleClick} {...boxProps}>
        <Icon color={color} tint="darkest">
          {collapsed ? <IconChevronRightSmallOutline /> : <IconChevronDownSmallOutline />}
        </Icon>
        <TitleElement color={color} marginLeft={2} tint="darkest">
          {size === 'medium' ? <strong>{title}</strong> : title}
        </TitleElement>
      </Box>
      {!collapsed && (
        <Box className={theme['children']} marginTop={2}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default AdvancedCollapsible;
