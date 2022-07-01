import React, { ReactElement, ReactNode, SyntheticEvent, useState } from 'react';
import cx from 'classnames';
import { IconMoreMediumOutline } from '@teamleader/ui-icons';
import IconButton from '../iconButton';
import Menu, { Positions } from './Menu';
import theme from './theme.css';
import Box, { pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

interface IconMenuProps extends Omit<BoxProps, 'children' | 'className'> {
  children?: ReactNode;
  className?: string;
  icon?: ReactElement;
  onHide?: () => void;
  onSelect?: (e: SyntheticEvent) => void;
  onShow?: () => void;
  onClick?: (e: SyntheticEvent) => void;
  position?: Positions;
  selectable?: boolean;
  selected?: any;
}

const IconMenu: GenericComponent<IconMenuProps> = ({
  children,
  className = '',
  icon,
  onHide,
  onSelect,
  onShow,
  position = 'auto',
  selectable = false,
  selected,
  onClick,
  ...others
}) => {
  const [active, setActive] = useState(false);
  const buttonIcon = icon || <IconMoreMediumOutline />;
  const boxProps = pickBoxProps(others);

  const handleButtonClick = (event: SyntheticEvent) => {
    setActive(!active);
    onClick && onClick(event);
  };

  const handleMenuHide = () => {
    setActive(false);
    onHide && onHide();
  };

  return (
    <Box data-teamleader-ui="icon-menu" {...boxProps} className={cx(theme['icon-menu'], className)}>
      <IconButton className={theme['icon']} icon={buttonIcon} onClick={handleButtonClick} />
      <Menu
        active={active}
        onHide={handleMenuHide}
        onSelect={onSelect}
        onShow={onShow}
        position={position}
        selectable={selectable}
        selected={selected}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default IconMenu;
