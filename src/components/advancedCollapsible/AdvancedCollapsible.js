import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextBody, Heading3 } from '../typography';
import Icon from '../icon';
import Box, { pickBoxProps } from '../box';
import { IconChevronDownSmallOutline, IconChevronRightSmallOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

const AdvancedCollapsible = ({ children, color, size, title, ...others }) => {
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

AdvancedCollapsible.propTypes = {
  color: PropTypes.oneOf(['neutral', 'teal']),
  children: PropTypes.any,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

AdvancedCollapsible.defaultProps = {
  color: 'teal',
  size: 'medium',
};

export default AdvancedCollapsible;
