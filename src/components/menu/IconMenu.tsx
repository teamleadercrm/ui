import React, { ReactElement, ReactNode, SyntheticEvent, MouseEvent, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { IconMoreMediumOutline } from '@teamleader/ui-icons';
import IconButton from '../iconButton';
import Menu from './Menu';
import theme from './theme.css';
import Box, { pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface IconMenuProps extends Omit<BoxProps, 'children' | 'className'> {
  children?: ReactNode;
  className?: string;
  icon?: ReactElement;
  onHide?: () => void;
  onSelect?: (e: SyntheticEvent) => void;
  onShow?: () => void;
  onClick?: (e: MouseEvent) => void;
  position?: 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
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

  const buttonRef = useRef<HTMLButtonElement>(null);

  const buttonIcon = icon || <IconMoreMediumOutline />;
  const boxProps = pickBoxProps(others);

  const handleButtonClick = (event: MouseEvent) => {
    setActive(!active);
    onClick && onClick(event);
  };

  const handleMenuHide = () => {
    setActive(false);
    onHide && onHide();
  };

  useEffect(() => {
    if (active) {
      onShow && onShow();
    } else {
      onHide && onHide();
    }
  }, [active, onHide, onShow]);

  return (
    <Box data-teamleader-ui="icon-menu" {...boxProps} className={cx(theme['icon-menu'], className)}>
      <IconButton className={theme['icon']} icon={buttonIcon} onClick={handleButtonClick} ref={buttonRef} />
      <Menu
        active={active}
        onInactive={handleMenuHide}
        onSelect={onSelect}
        position={position}
        selectable={selectable}
        selected={selected}
        anchorElement={buttonRef.current}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default IconMenu;
