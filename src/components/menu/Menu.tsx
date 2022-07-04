import React, { ReactElement, ReactNode, SyntheticEvent, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { events } from '../utils';
import { getViewport } from '../utils/utils';
import Box, { pickBoxProps } from '../box';
import MenuItem from './MenuItem';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export type Positions = 'auto' | 'static' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
const POSITION: Record<string, Positions> = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

interface MenuProps extends Omit<BoxProps, 'children' | 'className'> {
  /** If true, the menu will be active. */
  active?: boolean;
  /** The content to display inside the menu. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Callback function that is fired when the menu hides. */
  onHide?: () => void;
  /** Callback function that is fired when a menu item is clicked. */
  onSelect?: (e: SyntheticEvent) => void;
  /** Callback function that is fired when the menu shows. */
  onShow?: () => void;
  /** If true, a border is rendered around the menu. */
  outline?: boolean;
  /** The position in which the menu is rendered. */
  position?: Positions;
  /** If true, the menu will highlight the selected value. */
  selectable?: boolean;
  /** The value of the menu item that will be highlighted. */
  selected?: any;
}

const Menu: GenericComponent<MenuProps> = ({
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
}) => {
  const [stateWidth, setWidth] = useState<number | undefined>(0);
  const [stateHeight, setHeight] = useState<number | undefined>(0);
  const [stateActive, setActive] = useState<boolean>(active);
  const [statePosition, setPosition] = useState<string | undefined>(position);

  const menuNode = useRef<HTMLUListElement>(null);
  const menuWrapper = useRef<HTMLElement>(null);

  const boxProps = pickBoxProps(others);
  const classNames = cx(
    theme['menu'],
    theme[position],
    {
      [theme['active']]: active,
    },
    className,
  );
  const outlineClassNames = cx(theme['outline'], {
    [uiUtilities['box-shadow-200']]: position !== POSITION.STATIC,
  });

  const handleDocumentClick = (event: SyntheticEvent) => {
    if (stateActive && !events.targetIsDescendant(event, menuWrapper.current)) {
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
      return;
    }

    const { top, left, height, width } = parentNode.getBoundingClientRect();
    const { height: vh, width: vw } = getViewport();

    const toTop = top < vh / 2 - height / 2;
    const toLeft = left < vw / 2 - width / 2;

    return `${toTop ? 'top' : 'bottom'}${toLeft ? 'Left' : 'Right'}`;
  };

  const getRootStyle = () => {
    if (statePosition !== POSITION.STATIC) {
      return { width: stateWidth, height: stateHeight };
    }
  };

  const getActiveMenuStyle = () => {
    return { clip: `rect(0 ${stateWidth}px ${stateHeight}px 0)` };
  };

  const getMenuStyleByPosition = () => {
    switch (statePosition) {
      case POSITION.TOP_RIGHT:
        return { clip: `rect(0 ${stateWidth}px 0 ${stateWidth}px)` };
      case POSITION.BOTTOM_RIGHT:
        return { clip: `rect(${stateHeight}px ${stateWidth}px ${stateHeight}px ${stateWidth}px)` };
      case POSITION.BOTTOM_LEFT:
        return { clip: `rect(${stateHeight}px 0 ${stateHeight}px 0)` };
      case POSITION.TOP_LEFT:
        return { clip: 'rect(0 0 0 0)' };
      default:
        return {};
    }
  };

  const getMenuStyle = () => {
    return stateActive ? getActiveMenuStyle() : getMenuStyleByPosition();
  };

  const getItems = () => {
    // Because React Hot Loader creates proxied versions of your components,
    // comparing reference types of elements won't work
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Known%20Limitations.md#checking-element-types
    const MenuItemType = (<MenuItem />).type;

    return React.Children.map(children, (item: ReactNode) => {
      if (!item) {
        return item;
      }

      if (React.isValidElement(item)) {
        if (item.type === MenuItemType) {
          return React.cloneElement(item, {
            selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
            onClick: (event: SyntheticEvent) => handleSelect(item, event),
          });
        } else {
          return React.cloneElement(item);
        }
      }
    });
  };

  const show = () => {
    onShow && onShow();

    setActive(true);
    addEvents();
  };

  const hide = () => {
    onHide && onHide();

    setActive(false);
    removeEvents();
  };

  useEffect(() => {
    const { width, height } = menuNode?.current?.getBoundingClientRect() || {};

    width && setWidth(width);
    height && setHeight(height);
  }, [menuNode]);

  useEffect(() => {
    stateActive ? show() : hide();

    if (statePosition === POSITION.AUTO) {
      setPosition(calculatePosition());
    }

    return () => {
      stateActive && removeEvents();
    };
  }, [stateActive, statePosition]);

  return (
    <Box data-teamleader-ui="menu" className={classNames} ref={menuWrapper} style={getRootStyle()} {...boxProps}>
      {outline ? (
        <div
          className={outlineClassNames}
          style={{ ...(stateWidth ? { width: Math.ceil(stateWidth) } : {}), height: stateHeight }}
        />
      ) : null}
      <ul ref={menuNode} className={theme['menu-inner']} style={getMenuStyle()}>
        {getItems()}
      </ul>
    </Box>
  );
};

export default Menu;