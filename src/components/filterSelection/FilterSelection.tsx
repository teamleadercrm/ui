import { IconChevronDownSmallOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { forwardRef, KeyboardEventHandler, MouseEventHandler } from 'react';

import { GenericComponent } from '../../@types/types';
import { COLORS, KEY, TINTS } from '../../constants';
import Box from '../box';
import Icon from '../icon';
import Tooltip, { TooltipProps } from '../tooltip';
import { Heading4, Monospaced, TextBodyCompact } from '../typography';
import theme from './theme.css';

const TooltippedBox = Tooltip(Box);

type StatusValues = 'active' | 'default' | 'disabled' | 'focused' | 'invalid' | 'broken';

export const STATUS: Record<string, StatusValues> = {
  ACTIVE: 'active',
  DEFAULT: 'default',
  DISABLED: 'disabled',
  FOCUSED: 'focused',
  INVALID: 'invalid',
  BROKEN: 'broken',
};

const COLOR_BY_STATUS: Record<string, typeof COLORS[number]> = {
  [STATUS.DEFAULT]: 'neutral',
  [STATUS.ACTIVE]: 'aqua',
  [STATUS.FOCUSED]: 'aqua',
  [STATUS.DISABLED]: 'neutral',
  [STATUS.INVALID]: 'gold',
  [STATUS.BROKEN]: 'ruby',
};

const BACKGROUND_TINT_BY_STATUS: Record<string, typeof TINTS[number] | undefined> = {
  [STATUS.DEFAULT]: undefined,
  [STATUS.ACTIVE]: 'light',
  [STATUS.FOCUSED]: 'light',
  [STATUS.DISABLED]: undefined,
  [STATUS.INVALID]: 'lightest',
  [STATUS.BROKEN]: 'lightest',
};

export interface FilterSelectionProps {
  /** The title shown on the Selection */
  label?: string;
  /** The tooltop shown on top of the Selection */
  modificationText?: string | null;
  /** Boolean for showing the number of amountApplied in Selection and a border around */
  applied?: boolean;
  /** Status of the Selection */
  status?: StatusValues;
  /** Amount of the applied shown on Selection */
  amountApplied?: number | null;
  /** A function being called when clicking or pressing key down */
  onClick?: () => void;
  /** A function being called when clicking X on the Selection */
  onClearClick?: () => void;
}

const FilterSelection: GenericComponent<FilterSelectionProps> = forwardRef<HTMLElement, FilterSelectionProps>(
  (
    {
      label = '',
      modificationText = null,
      applied = false,
      status = 'default',
      amountApplied = null,
      onClick = () => {},
      onClearClick = () => {},
    },
    ref,
  ) => {
    const showAmount = typeof amountApplied === 'number';
    const modified = typeof modificationText === 'string';

    const Container = modified ? TooltippedBox : Box;
    const tooltipProps = modified
      ? {
          tooltip: modificationText,
          tooltipColor: 'white',
          tooltipPosition: 'top',
          tooltipSize: 'small',
        }
      : {};

    const handleKeyDown: KeyboardEventHandler = (event) => {
      if (event.key === KEY.Enter && status !== STATUS.DISABLED) {
        onClick();
      }
    };

    const handleClearClick: MouseEventHandler = (event) => {
      event.stopPropagation();
      if (status !== STATUS.DISABLED) {
        onClearClick();
      }
    };

    return (
      <Box
        ref={ref}
        className={cx(theme['select-control'], status === STATUS.DEFAULT && theme['select-control--hovered'])}
        role="button"
        tabIndex={0}
        display="flex"
        boxSizing="border-box"
        paddingHorizontal={3}
        backgroundColor={COLOR_BY_STATUS[status] || 'neutral'}
        backgroundTint={BACKGROUND_TINT_BY_STATUS[status] || undefined}
        borderWidth={applied ? 2 : 0}
        borderColor={COLOR_BY_STATUS[status] || 'neutral'}
        borderTint="dark"
        borderRadius="rounded"
        onClick={status !== STATUS.DISABLED ? onClick : undefined}
        onKeyDown={handleKeyDown}
      >
        <Container
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
          marginRight={2}
          {...(tooltipProps as TooltipProps)}
        >
          <TextBodyCompact
            color={status === STATUS.DEFAULT ? 'teal' : COLOR_BY_STATUS[status] || 'neutral'}
            tint={status === STATUS.DISABLED ? 'dark' : 'darkest'}
            marginRight={applied ? 2 : 0}
            className={theme['select-value-container']}
          >{`${label}${modified ? ' •' : ''}`}</TextBodyCompact>
          {applied && (
            <Box
              display="flex"
              alignItems="center"
              borderRadius="rounded"
              className={cx(theme['select-clear'], theme[`select-clear--${status}`])}
            >
              {showAmount && (
                <Heading4
                  paddingLeft={2}
                  paddingRight={1}
                  color={COLOR_BY_STATUS[status] || 'neutral'}
                  tint="dark"
                  borderTopLeftRadius="rounded"
                  borderBottomLeftRadius="rounded"
                  borderTopRightRadius={showAmount ? 'square' : 'rounded'}
                  borderBottomRightRadius={showAmount ? 'square' : 'rounded'}
                >
                  <Monospaced>{amountApplied}</Monospaced>
                </Heading4>
              )}
              <Box
                alignItems="center"
                display="flex"
                onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
                onClick={handleClearClick}
                paddingHorizontal={1}
                borderTopLeftRadius={showAmount ? 'square' : 'rounded'}
                borderBottomLeftRadius={showAmount ? 'square' : 'rounded'}
                borderTopRightRadius="rounded"
                borderBottomRightRadius="rounded"
                className={theme['select-clear-icon']}
              >
                <Icon color={COLOR_BY_STATUS[status] || 'neutral'} tint="dark" opacity={1}>
                  <IconCloseSmallOutline />
                </Icon>
              </Box>
            </Box>
          )}
        </Container>
        <Icon
          color={status === STATUS.DEFAULT ? 'teal' : COLOR_BY_STATUS[status] || 'neutral'}
          tint={status === STATUS.DISABLED ? 'dark' : 'darkest'}
          className={cx(
            theme['select-dropdown-indicator'],
            status === STATUS.FOCUSED && theme['select-dropdown-indicator--focused'],
          )}
        >
          <IconChevronDownSmallOutline />
        </Icon>
      </Box>
    );
  },
);

FilterSelection.displayName = 'FilterSelection';

export default FilterSelection;
