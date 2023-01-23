import React, { MouseEvent, ReactElement, ReactNode, useRef, useState } from 'react';
import Box, { pickBoxProps } from '../box';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import { Menu, MenuItem } from '../menu';
import Popover from '../popover';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import isReactElement from '../utils/is-react-element';
import { SIZES } from '../../constants';
import theme from './theme.css';
import isComponentOfType from '../utils/is-component-of-type';

export interface SplitButtonProps extends Omit<BoxProps, 'children' | 'size'> {
  /** The MenuItems we pass to our component. */
  children: ReactNode;
  /** Determines which kind of button to be rendered. */
  level?: 'primary' | 'secondary' | 'destructive';
  /** Size of the button. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  /** The function executed, when we click on the main button. */
  onButtonClick: (event: MouseEvent<HTMLElement>) => void;
  /** The function executed, when we click on the secondary button. */
  onSecondaryButtonClick?: (event: MouseEvent<HTMLElement>) => void;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** If true, component will show a loading spinner instead of label. */
  processing?: boolean;
  /** Overwrites for the popover */
  popoverProps?: {
    /** The preferred direction in which the Popover is rendered, is overridden with the opposite or adjacent direction if the Popover cannot be entirely displayed in the current direction. */
    direction?: 'north' | 'south';
    /** If true, the Popover stretches to fit its content vertically */
    fullHeight?: boolean;
    /** The z-index of the Popover */
    zIndex?: number;
  };
}

const SplitButton: GenericComponent<SplitButtonProps> = ({
  children,
  level = 'primary',
  size = 'medium',
  onButtonClick,
  onSecondaryButtonClick,
  disabled,
  processing,
  popoverProps,
  ...others
}) => {
  const [popoverActive, setPopoverActive] = useState<boolean>(false);
  const popoverAnchorEl = useRef<HTMLElement | null>(null);

  const handleMainButtonClick = (event: MouseEvent<HTMLElement>) => {
    onButtonClick(event);
  };

  const handleSecondaryButtonClick = (event: MouseEvent<HTMLElement>) => {
    setPopoverActive(true);
    popoverAnchorEl.current = event.currentTarget;
    onSecondaryButtonClick && onSecondaryButtonClick(event);
  };

  const handleMenuItemClick = (child: ReactElement, event: MouseEvent) => {
    const childProps = child.props;
    setPopoverActive(false);
    childProps.onClick(event);
  };

  const handleCloseClick = () => {
    setPopoverActive(false);
  };

  const boxProps = {
    ...pickBoxProps(others),
  };

  const childrenArray = React.Children.toArray(children);
  const firstItem = childrenArray.find((item) => React.isValidElement(item) && isComponentOfType(MenuItem, item)) as
    | ReactElement
    | undefined;
  const buttonLabel = firstItem?.props.label;

  return (
    <Box display="flex" justifyContent="center" {...boxProps} data-teamleader-ui="split-menu">
      {processing ? (
        <Button
          label={buttonLabel}
          level={level}
          size={size}
          processing
          className={theme[`split-button-${size}--processing`]}
        />
      ) : (
        <ButtonGroup segmented>
          <Button label={buttonLabel} level={level} size={size} disabled={disabled} onClick={handleMainButtonClick} />
          <Button
            icon={<IconChevronDownSmallOutline />}
            level={level}
            size={size}
            disabled={disabled}
            onClick={handleSecondaryButtonClick}
          />
        </ButtonGroup>
      )}
      <Popover
        active={popoverActive}
        anchorEl={popoverAnchorEl?.current}
        backdrop="transparent"
        lockScroll={false}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        position="start"
        {...popoverProps}
      >
        <Menu>
          {React.Children.map(children, (child) => {
            if (
              !React.isValidElement(child) ||
              !isComponentOfType(MenuItem, child) ||
              child.props.label === buttonLabel
            ) {
              return null;
            }

            return React.cloneElement(child, {
              onClick: (event: MouseEvent) => handleMenuItemClick(child, event),
            });
          })}
        </Menu>
      </Popover>
    </Box>
  );
};

SplitButton.displayName = 'SplitButton';

export default SplitButton;
