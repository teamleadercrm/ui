import React, { MouseEvent, ReactElement, ReactNode, useRef, useState } from 'react';
import Box, { pickBoxProps } from '../box';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import { Menu } from '../menu';
import Popover from '../popover';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import isReactElement from '../utils/isReactElement';
import { SIZES } from '../../constants';

interface SplitButtonProps extends Omit<BoxProps, 'children' | 'size'> {
  /** The MenuItems we pass to our component. */
  children: ReactNode;
  /** Determines which kind of button to be rendered. */
  level?: 'primary' | 'secondary' | 'destructive';
  /** Size of the button. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen'>;
  /** The function executed, when we click on the main button. */
  onButtonClick: (event: MouseEvent<HTMLElement>) => void;
  /** The function executed, when we click on the secondary button. */
  onSecondaryButtonClick?: (event: MouseEvent<HTMLElement>) => void;
  /** If true, component will be disabled. */
  disabled?: boolean;
}

const SplitButton: GenericComponent<SplitButtonProps> = ({
  children,
  level = 'primary',
  size = 'medium',
  onButtonClick,
  onSecondaryButtonClick,
  disabled,
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

  const handleMenuItemClick = (child: ReactElement, event: MouseEvent<HTMLElement>) => {
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

  let buttonLabel: string | undefined;
  if (Array.isArray(children)) {
    const childrenArray: Array<any> = children;

    if (childrenArray.length && isReactElement(childrenArray[0])) {
      buttonLabel = childrenArray[0].props.label;
    }
  }

  return (
    <Box display="flex" justifyContent="center" {...boxProps} data-teamleader-ui="split-menu">
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
      <Popover
        active={popoverActive}
        anchorEl={popoverAnchorEl?.current}
        backdrop="transparent"
        lockScroll={false}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        position="start"
      >
        <Menu>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.props.label !== buttonLabel) {
              return React.cloneElement(child, {
                onClick: (event: MouseEvent<HTMLElement>) => handleMenuItemClick(child, event),
              });
            }
          })}
        </Menu>
      </Popover>
    </Box>
  );
};

SplitButton.displayName = 'SplitButton';

export default SplitButton;
