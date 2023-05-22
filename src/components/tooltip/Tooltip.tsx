import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import omit from 'lodash.omit';
import React, { MouseEventHandler, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import DocumentObjectProvider, { Context as DocumentObjectContext } from '../hoc/DocumentObjectProvider';
import { getViewport } from '../utils/utils';
import theme from './theme.css';

type Position = 'bottom' | 'horizontal' | 'left' | 'right' | 'top' | 'vertical';

export const POSITIONS: Record<string, Position> = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical',
};

interface PositionState {
  position: Position;
  top: number | string;
  left: number | string;
}
export type AllowedColor = Exclude<typeof COLORS[number], 'teal'> | 'white' | 'inverse';
export type AllowedSize = Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
const SIZE_MAP: Record<AllowedSize, BoxProps> = {
  large: {
    padding: 4,
  },
  medium: {
    padding: 3,
  },
  small: {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
};

interface TooltippedComponentProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onTooltipEntered?: () => void;
  tooltip: ReactNode;
  tooltipColor?: AllowedColor;
  tooltipHideOnClick?: boolean;
  tooltipIcon?: ReactNode;
  tooltipPosition?: Position;
  tooltipShowOnClick?: boolean;
  tooltipSize?: AllowedSize;
  documentObject: Document;
  tooltipShowDelay?: number;
  /** The z-index of the Tooltip */
  zIndex?: number;
  tooltipActive?: boolean;
  ComposedComponent: React.ElementType;
}
export interface TooltipProps extends Omit<TooltippedComponentProps, 'ComposedComponent' | 'documentObject'> {}

const TooltippedComponent: GenericComponent<TooltippedComponentProps> = ({
  children,
  className,
  documentObject,
  tooltip,
  tooltipColor = 'white',
  onTooltipEntered,
  tooltipHideOnClick = true,
  tooltipIcon = null,
  tooltipPosition = 'top',
  tooltipShowOnClick = false,
  tooltipSize = 'medium',
  tooltipShowDelay = 100,
  zIndex = 700,
  onClick,
  onMouseEnter,
  onMouseLeave,
  tooltipActive,
  ComposedComponent,
  ...other
}) => {
  const tooltipRoot = useMemo(() => documentObject.createElement('div'), [documentObject]);
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState<PositionState>({ position: tooltipPosition, top: 'auto', left: 'auto' });

  const activate = useCallback(
    (position: PositionState) => {
      documentObject.body.appendChild(tooltipRoot);
      setActive(true);
      setPosition({ position: position.position, top: position.top, left: position.left });
    },
    [documentObject.body, tooltipRoot],
  );

  const getPosition = useCallback(
    (element: Element) => {
      if (tooltipPosition === POSITIONS.HORIZONTAL) {
        const origin = element.getBoundingClientRect();
        const { width: windowWidth } = getViewport();
        const toRight = origin.left < windowWidth / 2 - origin.width / 2;

        return toRight ? POSITIONS.RIGHT : POSITIONS.LEFT;
      } else if (tooltipPosition === POSITIONS.VERTICAL) {
        const origin = element.getBoundingClientRect();
        const { height: windowHeight } = getViewport();
        const toBottom = origin.top < windowHeight / 2 - origin.height / 2;

        return toBottom ? POSITIONS.BOTTOM : POSITIONS.TOP;
      }

      return tooltipPosition;
    },
    [tooltipPosition],
  );

  const calculatePosition = useCallback(
    (element: Element | null) => {
      if (typeof element?.getBoundingClientRect !== 'function') {
        return { top: 0, left: 0, position: tooltipPosition };
      }

      const { top, left, height, width } = element.getBoundingClientRect();
      const position = getPosition(element);
      const xOffset = window.scrollX || window.pageXOffset;
      const yOffset = window.scrollY || window.pageYOffset;

      if (position === POSITIONS.BOTTOM) {
        return {
          top: top + height + yOffset,
          left: left + width / 2 + xOffset,
          position,
        };
      } else if (position === POSITIONS.TOP) {
        return {
          top: top + yOffset,
          left: left + width / 2 + xOffset,
          position,
        };
      } else if (position === POSITIONS.LEFT) {
        return {
          top: top + height / 2 + yOffset,
          left: left + xOffset,
          position,
        };
      } else if (position === POSITIONS.RIGHT) {
        return {
          top: top + height / 2 + yOffset,
          left: left + width + xOffset,
          position,
        };
      }
      return { top: 0, left: 0, position: tooltipPosition };
    },
    [getPosition, tooltipPosition],
  );

  const handleMouseEnter: MouseEventHandler = (event) => {
    activate(calculatePosition(event.currentTarget));

    if (onMouseEnter) {
      onMouseEnter(event);
    }
  };

  const handleMouseLeave: MouseEventHandler = (event) => {
    setActive(false);

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  };

  const handleClick: MouseEventHandler = (event) => {
    if (tooltipHideOnClick && active) {
      setActive(false);
    }

    if (tooltipShowOnClick && !active) {
      activate(calculatePosition(event.currentTarget));
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleTransitionExited = () => {
    documentObject.body.removeChild(tooltipRoot);
  };

  const handleTransitionEntered = () => {
    onTooltipEntered && onTooltipEntered();
  };

  useEffect(() => {
    if (tooltipActive && !active) {
      activate(calculatePosition(ref.current));
    }

    if (!tooltipActive && active) {
      setActive(false);
    }
  }, [activate, active, calculatePosition, tooltipActive]);

  const rest = omit(other, [
    'onTooltipEntered',
    'tooltipHideOnClick',
    'tooltipPosition',
    'tooltipShowOnClick',
    'tooltipShowDelay',
    'documentObject',
  ]);

  let childProps = {
    ...rest,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ref,
  };

  if (tooltipActive === undefined) {
    childProps = {
      ...childProps,
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    };
  }

  return React.createElement(
    ComposedComponent,
    childProps,
    children,
    createPortal(
      <Transition
        in={active}
        onExited={handleTransitionExited}
        onEntered={handleTransitionEntered}
        timeout={{ enter: tooltipShowDelay, exit: 1000 }}
      >
        {(state) => {
          const classNames = cx(
            uiUtilities['box-shadow-200'],
            theme['tooltip'],
            theme[tooltipColor],
            theme[tooltipSize],
            {
              [theme['is-entering']]: state === 'entering',
              [theme['is-entered']]: state === 'entered',
              [theme['is-exiting']]: state === 'exiting',
              [theme[position.position]]: theme[position.position],
            },
          );

          return (
            <div
              className={classNames}
              data-teamleader-ui="tooltip"
              style={{ top: position.top, left: position.left, zIndex }}
            >
              <Box className={theme['inner']} {...SIZE_MAP[tooltipSize]}>
                {tooltipIcon && <div className={theme['icon']}>{tooltipIcon}</div>}
                <div className={theme['text']}>{tooltip}</div>
              </Box>
            </div>
          );
        }}
      </Transition>,
      tooltipRoot,
    ),
  );
};

function Tooltip<E extends keyof JSX.IntrinsicElements>(
  ComposedComponent: E,
): React.ComponentType<JSX.IntrinsicElements[E] & TooltipProps>;
function Tooltip<P>(ComposedComponent: React.ElementType<P>): React.ComponentType<P & TooltipProps>;
function Tooltip(ComposedComponent: TooltippedComponentProps['ComposedComponent']) {
  return DocumentObjectProvider<TooltipProps>((props) => {
    return (
      <DocumentObjectContext.Consumer>
        {(documentObject) => (
          <TooltippedComponent
            {...props}
            tooltip={props.tooltip}
            documentObject={documentObject as Document}
            ComposedComponent={ComposedComponent}
          >
            {props.children}
          </TooltippedComponent>
        )}
      </DocumentObjectContext.Consumer>
    );
  });
}

export default Tooltip;
