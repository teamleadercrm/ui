import cx from 'classnames';
import React, {
  Fragment,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
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
import { createPortal } from 'react-dom';

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
  /** If true, the menu closes on child select */
  shouldCloseOnSelect?: boolean;
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
  shouldCloseOnSelect = true,
  anchorElement,
  ...others
}: MenuProps<S>): ReactElement<any, any> | null => {
  const [positionState, setPositionState] = useState<Position>(position);
  const [calculatedPosition, setCalculatedPosition] = useState({});
  const [maxHeight, setMaxHeight] = useState<number>();
  const menuRef = useRef<HTMLDivElement>(null);

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

      if (position !== POSITION.STATIC && shouldCloseOnSelect) {
        onHide && onHide();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (anchorElement && menuRef.current && active) {
      const { top, left, height, width } = anchorElement.getBoundingClientRect();
      const { height: menuHeight, width: menuWidth } = menuRef.current.getBoundingClientRect();

      let leftOffset = 0;
      let topOffset = 0;

      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        leftOffset = window.visualViewport?.offsetLeft || 0;
        topOffset = window.visualViewport?.offsetTop || 0;
      }

      if (positionState === POSITION.TOP_LEFT) {
        return {
          top: top + height + 3 + topOffset,
          left: left + leftOffset,
        };
      }

      if (positionState === POSITION.TOP_RIGHT) {
        return {
          top: top + height + 3 + topOffset,
          left: left + width - menuWidth + leftOffset,
        };
      }

      if (positionState === POSITION.BOTTOM_LEFT) {
        return {
          top: -1 * (menuHeight + 3) + top + topOffset,
          left: left + leftOffset,
        };
      }

      if (positionState === POSITION.BOTTOM_RIGHT) {
        return {
          top: -1 * (menuHeight + 3) + top + topOffset,
          left: left + width - menuWidth + leftOffset,
        };
      }
    }
    return {};
  }, [active, anchorElement, positionState]);

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

        if (isComponentOfType(Fragment, item)) {
          const itemChildren = React.Children.toArray(item.props.children);
          return React.Children.map(
            itemChildren,
            (child: ReactNode) =>
              React.isValidElement(child) &&
              React.cloneElement(child as ReactElement, {
                onClick: (event: SyntheticEvent) => handleSelect(child, event),
              }),
          );
        }

        return React.cloneElement(item as ReactElement, {
          onClick: (event: SyntheticEvent) => handleSelect(item, event),
        });
      }
    });
  }, [children, handleSelect, selectable, selected]);

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

  const menu = localActive ? (
    <div
      style={{
        position: position === POSITION.STATIC ? 'relative' : 'absolute',
      }}
      className={theme['menu-overlay']}
      onClick={(event) => {
        event.stopPropagation();
        onHide && onHide();
      }}
    >
      <Box
        data-teamleader-ui="menu"
        className={classNames}
        ref={menuRef}
        style={calculatedPosition}
        onClick={(event) => event.stopPropagation()}
        {...others}
      >
        <ul className={theme['menu-inner']} style={{ maxHeight }}>
          {renderItems()}
        </ul>
      </Box>
    </div>
  ) : null;

  return position === POSITION.STATIC ? menu : createPortal(menu, document.body);
};

export default Menu;
