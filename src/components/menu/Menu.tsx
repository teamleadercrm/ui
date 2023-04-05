import cx from 'classnames';
import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Box, { pickBoxProps } from '../box';
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
  setActive?: Dispatch<SetStateAction<boolean>>;
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
}

type Position = Exclude<MenuProps['position'], undefined>;

const Menu = <S,>({
  active = false,
  setActive,
  children,
  className,
  onSelect,
  outline = true,
  position = 'static',
  selectable = true,
  selected,
  ...others
}: MenuProps<S>): ReactElement<any, any> | null => {
  const [positionState, setPositionState] = useState<Position>(position);

  const menuRef = useRef<HTMLUListElement>(null);
  const menuWrapperRef = useRef<HTMLElement>(null);

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
    const clickedNode = event.target as HTMLElement;
    const menuNode = menuRef.current;
    if (clickedNode !== menuNode && clickedNode.contains(menuNode)) {
      setActive && setActive(false);
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
      setActive && setActive(false);
    }
  };

  const calculatePosition = () => {
    const parentNode = menuWrapperRef?.current?.parentNode as HTMLElement;

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

  useEffect(() => {
    if (position === POSITION.STATIC) {
      setActive && setActive(true);
    }
  }, []);

  useEffect(() => {
    if (position === POSITION.AUTO) {
      setPositionState(calculatePosition());
    }

    if (position !== POSITION.STATIC && active) {
      document.documentElement.addEventListener('click', handleDocumentClick);

      return () => {
        active && document.documentElement.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [active]);

  return active ? (
    <Box data-teamleader-ui="menu" className={classNames} ref={menuWrapperRef} {...boxProps}>
      <ul ref={menuRef} className={innerClassNames}>
        {/* An invisible element so the first element doesn't look like its selected or focused */}
        <Box className={theme['invisible-menu-item']} data-teamleader-ui="menu-item" element="li">
          <Box element="button" />
        </Box>
        {getItems()}
      </ul>
    </Box>
  ) : null;
};

export default Menu;
