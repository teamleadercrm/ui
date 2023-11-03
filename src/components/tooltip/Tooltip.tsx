import * as RadixTooltip from '@radix-ui/react-tooltip';

import { COLORS, SIZES } from '../../constants';
import React, { MouseEventHandler, ReactNode, useEffect, useRef, useState } from 'react';

import Box from '../box';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

type Position = 'bottom' | 'left' | 'right' | 'top';

export const POSITIONS: Record<string, Position> = {
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
};

export type AllowedColor = Exclude<(typeof COLORS)[number], 'teal'> | 'white' | 'inverse';
export type AllowedSize = Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
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
  tooltipShowDelay?: number;
  /** The z-index of the Tooltip */
  zIndex?: number;
  tooltipActive?: boolean;
  ComposedComponent: React.ElementType;
}
export interface TooltipProps extends Omit<TooltippedComponentProps, 'ComposedComponent'> {}

const Arrow = () => {
  return <div className={theme['arrow']} />;
};

const TooltippedComponent: GenericComponent<TooltippedComponentProps> = ({
  children,
  className,
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
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const handleMouseEnter: MouseEventHandler = (event) => {
    setActive(true);

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
      setActive(true);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleOpenChange: RadixTooltip.TooltipProps['onOpenChange'] = (open) => {
    if (open && onTooltipEntered) {
      onTooltipEntered();
    }
  };

  useEffect(() => {
    if (tooltipActive && !active) {
      setActive(true);
    }

    if (!tooltipActive && active) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tooltipActive]);

  const rest = omit(other, [
    'onTooltipEntered',
    'tooltipHideOnClick',
    'tooltipPosition',
    'tooltipShowOnClick',
    'tooltipShowDelay',
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

  // Using the radix tooltip component, but we only use it for rendering the tooltip
  // we still manually implement the trigger with mouseover/leave/click and keep that in state.
  // With a pure radix implementation we couldn't support our `tooltipHideOnClick` prop.
  return (
    <RadixTooltip.Provider delayDuration={tooltipShowDelay}>
      <RadixTooltip.Root onOpenChange={handleOpenChange}>
        <RadixTooltip.Trigger asChild>
          <ComposedComponent {...childProps}>{children}</ComposedComponent>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal forceMount={active || undefined}>
          <RadixTooltip.Content
            className={cx(
              uiUtilities['box-shadow-200'],
              theme['tooltip-content'],
              theme[tooltipColor],
              theme[tooltipSize],
            )}
            sideOffset={8}
            side={tooltipPosition}
            style={{ zIndex }}
            data-teamleader-ui="tooltip"
          >
            <Box className={theme['inner']} {...SIZE_MAP[tooltipSize]}>
              {tooltipIcon && <div className={theme['icon']}>{tooltipIcon}</div>}
              <div className={theme['text']}>{tooltip}</div>
            </Box>
            <RadixTooltip.Arrow asChild>
              <Arrow />
            </RadixTooltip.Arrow>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

function Tooltip<E extends keyof JSX.IntrinsicElements>(
  ComposedComponent: E,
): React.ComponentType<JSX.IntrinsicElements[E] & TooltipProps>;
function Tooltip<P>(ComposedComponent: React.ElementType<P>): React.ComponentType<P & TooltipProps>;
function Tooltip(ComposedComponent: TooltippedComponentProps['ComposedComponent']) {
  const WrappedComponent = (props: TooltipProps) => {
    return (
      <TooltippedComponent {...props} tooltip={props.tooltip} ComposedComponent={ComposedComponent}>
        {props.children}
      </TooltippedComponent>
    );
  };
  return WrappedComponent;
}

export default Tooltip;
