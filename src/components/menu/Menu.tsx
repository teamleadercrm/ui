import cx from 'classnames';
import React, {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import Box from '../box';
import { BoxProps } from '../box/Box';
import MarketingMenuItem from '../marketingMenuItem';
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
  /** Callback to hide the menu. */
  onInactive?: () => void;
  /** The content to display inside the menu. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Callback function that is fired when a menu item is clicked. */
  onSelect?: (selected: S) => void;
  /** If true, a border is rendered around the menu. */
  outline?: boolean;
  /** The position in which the menu is rendered. */
  position?: 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** If true, the menu will highlight the selected value. */
  selectable?: boolean;
  /** The value of the menu item that will be highlighted. */
  selected?: S;
  /** The anchor element */
  anchorElement?: HTMLElement | null;
}

type Position = Exclude<MenuProps['position'], undefined>;

const Menu = <S,>({
  active = false,
  onInactive,
  children,
  className,
  onSelect,
  outline = true,
  position = 'static',
  selectable = true,
  selected,
  anchorElement,
  ...others
}: MenuProps<S>): ReactElement<any, any> | null => {
  const [positionState, setPositionState] = useState<Position>(position);
  const [calculatedPosition, setCalculatedPosition] = useState({});

  const menuRef = useRef<HTMLUListElement>(null);

  const localActive = active || positionState === POSITION.STATIC;

  const classNames = cx(
    theme['menu'],
    {
      [theme['static']]: positionState === POSITION.STATIC,
      [theme['outline']]: outline,
      [theme['shadow']]: positionState !== POSITION.STATIC,
    },
    className,
  );

  const handleDocumentClick = (event: Event) => {
    const clickedNode = event.target as HTMLElement;
    const menuNode = menuRef.current;
    if (clickedNode !== menuNode && clickedNode.contains(menuNode)) {
      onInactive && onInactive();
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

    if (position !== POSITION.STATIC) {
      onInactive && onInactive();
    }
  };

  const calculateAutoPosition = (anchorElement: HTMLElement) => {
    const { top, left, height, width } = anchorElement.getBoundingClientRect();
    const { height: vh, width: vw } = getViewport();

    const toTop = top < vh / 2 - height / 2;
    const toLeft = left < vw / 2 - width / 2;

    return `${toTop ? 'top' : 'bottom'}-${toLeft ? 'left' : 'right'}` as Position;
  };

  const calculatePosition = useCallback(() => {
    if (anchorElement && menuRef.current) {
      const { height } = anchorElement.getBoundingClientRect();
      const { height: menuHeight } = menuRef.current.getBoundingClientRect();
      console.log(menuHeight);

      if (positionState === POSITION.TOP_LEFT) {
        return {
          top: height + 3,
          left: 0,
        };
      }

      if (positionState === POSITION.TOP_RIGHT) {
        return {
          top: height + 3,
          right: 0,
        };
      }

      if (positionState === POSITION.BOTTOM_LEFT) {
        return {
          top: -1 * (menuHeight + 3),
          left: 0,
        };
      }

      if (positionState === POSITION.BOTTOM_RIGHT) {
        return {
          top: -1 * (menuHeight + 3),
          right: 0,
        };
      }
    }
    return {};
  }, [anchorElement, positionState]);

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

  useEffect(() => {
    if (position !== POSITION.STATIC && active) {
      document.documentElement.addEventListener('click', handleDocumentClick);

      return () => {
        document.documentElement.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [active]);

  useLayoutEffect(() => {
    if (position === POSITION.AUTO && anchorElement && active) {
      setPositionState(calculateAutoPosition(anchorElement));
    }

    if (position !== POSITION.STATIC) {
      setCalculatedPosition(calculatePosition());
    }
  }, [active, anchorElement, calculatePosition, position]);

  return localActive ? (
    <Box data-teamleader-ui="menu" className={classNames} ref={menuRef} style={calculatedPosition} {...others}>
      <ul className={theme['menu-inner']}>{getItems()}</ul>
    </Box>
  ) : null;
};

export default Menu;
