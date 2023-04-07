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

type Position = 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MenuProps<S = any> extends Omit<BoxProps, 'children' | 'className'> {
  /** If true, the menu will be active. */
  active?: boolean;
  /** Callback to hide the menu. */
  onHide?: () => void;
  /** The content to display inside the menu. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Callback function that is fired when a menu item is clicked. */
  onSelect?: (selected: S) => void;
  /** If true, a border is rendered around the menu. */
  outline?: boolean;
  /** The position in which the menu is rendered. */
  position?: Position;
  /** If true, the menu will highlight the selected value. */
  selectable?: boolean;
  /** The value of the menu item that will be highlighted. */
  selected?: S;
  /** The anchor element */
  anchorElement?: HTMLElement | null;
}

const Menu = <S,>({
  active = false,
  onHide,
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
  const [maxHeight, setMaxHeight] = useState<number>();
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

  const handleDocumentClick = useCallback(
    (event: Event) => {
      const clickedNode = event.target as HTMLElement;
      const menuNode = menuRef.current;

      if (menuNode && menuNode !== clickedNode && anchorElement !== clickedNode && !menuNode.contains(clickedNode)) {
        onHide && onHide();
      }
    },
    [anchorElement, onHide],
  );

  const handleSelect = useCallback(
    (item: ReactElement, event: SyntheticEvent) => {
      const { value, onClick } = item.props;

      if (onSelect) {
        onSelect(value);
      }

      if (onClick) {
        event.persist();
        onClick(event);
      }

      if (position !== POSITION.STATIC) {
        onHide && onHide();
      }
    },
    [onHide, onSelect, position],
  );

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

  const calculateMaxHeight = useCallback(() => {
    if (anchorElement) {
      const { top, height } = anchorElement.getBoundingClientRect();
      const { height: viewportHeight } = getViewport();

      if (positionState === POSITION.TOP_LEFT || positionState === POSITION.TOP_RIGHT) {
        return viewportHeight - top - height - 24;
      }

      if (positionState === POSITION.BOTTOM_LEFT || positionState === POSITION.BOTTOM_RIGHT) {
        return top - 24;
      }
    }
  }, [anchorElement, positionState]);

  const renderItems = useCallback(() => {
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
  }, [children, handleSelect, selectable, selected]);

  useEffect(() => {
    if (position !== POSITION.STATIC && active) {
      document.documentElement.addEventListener('click', handleDocumentClick);

      return () => {
        document.documentElement.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [active, handleDocumentClick, position]);

  useEffect(() => {
    const menuNode = menuRef.current;
    if (!menuNode) {
      return;
    }

    menuNode.addEventListener('focusout', handleDocumentClick);

    return () => {
      menuNode && menuNode.removeEventListener('focusout', handleDocumentClick);
    };
  }, [handleDocumentClick, menuRef]);

  useLayoutEffect(() => {
    if (position === POSITION.AUTO && anchorElement && active) {
      setPositionState(calculateAutoPosition(anchorElement));
    } else {
      setPositionState(position);
    }
  }, [active, anchorElement, position]);

  useLayoutEffect(() => {
    if (positionState !== POSITION.STATIC && positionState !== POSITION.AUTO) {
      setMaxHeight(calculateMaxHeight());
    }
  }, [calculateMaxHeight, positionState]);

  useLayoutEffect(() => {
    if (positionState !== POSITION.STATIC) {
      setCalculatedPosition(calculatePosition());
    }
  }, [calculatePosition, positionState, maxHeight]);

  return localActive ? (
    <Box data-teamleader-ui="menu" className={classNames} ref={menuRef} style={calculatedPosition} {...others}>
      <ul className={theme['menu-inner']} style={{ maxHeight }}>
        {renderItems()}
      </ul>
    </Box>
  ) : null;
};

export default Menu;
