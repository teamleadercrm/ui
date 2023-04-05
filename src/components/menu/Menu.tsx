import cx from 'classnames';
import React, { ReactElement, ReactNode, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';

import Box, { pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import MarketingMenuItem from '../marketingMenuItem';
import { events } from '../utils';
import isComponentOfType from '../utils/is-component-of-type';
import { getViewport } from '../utils/utils';
import MenuItem from './MenuItem';
import theme from './theme.css';

const POSITION: Record<string, 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'> = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

export interface MenuProps<S = any> extends Omit<BoxProps, 'children' | 'className'> {
  /** If true, the menu will be active. */
  active?: boolean;
  /** The content to display inside the menu. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Callback function that is fired when the menu hides. */
  onHide?: () => void;
  /** Callback function that is fired when a menu item is clicked. */
  onSelect?: (selected: S) => void;
  /** Callback function that is fired when the menu shows. */
  onShow?: () => void;
  /** If true, a border is rendered around the menu. */
  outline?: boolean;
  /** The position in which the menu is rendered. */
  position?: 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** If true, the menu will highlight the selected value. */
  selectable?: boolean;
  /** The value of the menu item that will be highlighted. */
  selected?: S;
}

type Position = Exclude<MenuProps['position'], undefined>;

const Menu = <S,>({
  active = false,
  children,
  className,
  onHide,
  onSelect,
  onShow,
  outline = true,
  position = 'static',
  selectable = true,
  selected,
  ...others
}: MenuProps<S>): ReactElement<any, any> | null => {
  const [positionState, setPositionState] = useState<Position>(position);

  const menuNode = useRef<HTMLUListElement>(null);
  const menuWrapper = useRef<HTMLElement>(null);

  const boxProps = pickBoxProps(others);
  const classNames = cx(
    theme['menu'],
    theme[positionState],
    {
      [theme['active']]: active,
    },
    className,
  );

  const innerClassNames = cx(theme['menu-inner'], {
    [theme['outline']]: outline,
    [theme['shadow']]: positionState !== POSITION.STATIC,
  });

  const handleDocumentClick = (event: Event) => {
    if (active && !events.targetIsDescendant(event, menuWrapper.current)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      hide();
    }
  };

  const handleSelect = (item: ReactElement, event: SyntheticEvent) => {
    const { value, onClick } = item.props;

    if (onSelect) {
      onSelect(value);
    }

    if (onClick) {
      event.persist();
      onClick(event);
    }

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    hide();
  };

  const addEvents = () => {
    window.setTimeout(
      () =>
        events.addEventsToDocument({
          click: handleDocumentClick,
          touchstart: handleDocumentClick,
        }),
      0,
    );
  };

  const removeEvents = () => {
    events.removeEventsFromDocument({
      click: handleDocumentClick,
      touchstart: handleDocumentClick,
    });
  };

  const calculatePosition = () => {
    const parentNode = menuWrapper?.current?.parentNode as HTMLElement;

    if (!parentNode) {
      return 'static';
    }

    const { top, left, height, width } = parentNode.getBoundingClientRect();
    const { height: vh, width: vw } = getViewport();

    const toTop = top < vh / 2 - height / 2;
    const toLeft = left < vw / 2 - width / 2;

    return `${toTop ? 'top' : 'bottom'}-${toLeft ? 'left' : 'right'}` as Position;
  };

  const getItems = useCallback(() => {
    return React.Children.map(children, (item: ReactNode) => {
      if (!item) {
        return item;
      }

      if (React.isValidElement(item)) {
        if (isComponentOfType(MenuItem, item) || isComponentOfType(MarketingMenuItem, item)) {
          return React.cloneElement(item, {
            selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
            onClick: (event: SyntheticEvent) => handleSelect(item, event),
          });
        }

        return React.cloneElement(item);
      }
    });
  }, [children]);

  const show = () => {
    onShow && onShow();
    addEvents();
  };

  const hide = () => {
    onHide && onHide();
    removeEvents();
  };

  useEffect(() => {
    active ? show() : hide();

    return () => {
      active && removeEvents();
    };
  }, [active]);

  useEffect(() => {
    if (position === POSITION.AUTO) {
      setPositionState(calculatePosition());
    }
  }, []);

  return (
    <Box data-teamleader-ui="menu" className={classNames} ref={menuWrapper} {...boxProps}>
      <ul ref={menuNode} className={innerClassNames}>
        {/* An invisible element so the first element doesn't look like its selected or focused */}
        <Box className={theme['invisible-menu-item']} data-teamleader-ui="menu-item" element="li">
          <Box element="button" />
        </Box>
        {getItems()}
      </ul>
    </Box>
  );
};

export default Menu;
