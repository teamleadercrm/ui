import { IconCloseSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import React, { forwardRef } from 'react';
import cx from 'classnames';

import { KEY } from '../../constants';
import { Heading4, Monospaced, TextBodyCompact } from '../typography';
import Icon from '../icon';
import Box from '../box';
import Tooltip from '../tooltip';
import theme from './theme.css';

const TooltippedBox = Tooltip(Box);

export const Status = {
  ACTIVE: 'active',
  DEFAULT: 'default',
  DISABLED: 'disabled',
  FOCUSED: 'focused',
  INVALID: 'invalid',
  BROKEN: 'broken',
};

const ColorByStatus = {
  [Status.DEFAULT]: 'neutral',
  [Status.ACTIVE]: 'aqua',
  [Status.FOCUSED]: 'aqua',
  [Status.DISABLED]: 'neutral',
  [Status.INVALID]: 'gold',
  [Status.BROKEN]: 'ruby',
};

const BackgroundTintByStatus = {
  [Status.DEFAULT]: undefined,
  [Status.ACTIVE]: 'light',
  [Status.FOCUSED]: 'light',
  [Status.DISABLED]: undefined,
  [Status.INVALID]: 'lightest',
  [Status.BROKEN]: 'lightest',
};

interface FilterSelectionProps {
  label?: string;
  modificationText?: string | null;
  applied?: boolean;
  status?: 'active' | 'default' | 'disabled' | 'focused' | 'invalid' | 'broken';
  amountApplied?: number | null;
  onClick?: () => void;
  onClearClick?: () => void;
}

const FilterSelection = forwardRef(
  (
    {
      label = '',
      modificationText = null,
      applied = false,
      status = 'default',
      amountApplied = null,
      onClick = () => {},
      onClearClick = () => {},
    }: FilterSelectionProps,
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEY.Enter && status !== Status.DISABLED) {
        onClick();
      }
    };

    const handleClearClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      if (status !== Status.DISABLED) {
        onClearClick();
      }
    };

    return (
      <Box
        ref={ref}
        className={cx(theme['select-control'], status === Status.DEFAULT && theme['select-control--hovered'])}
        role="button"
        tabIndex={0}
        display="flex"
        boxSizing="border-box"
        paddingHorizontal={3}
        backgroundColor={ColorByStatus[status] || 'neutral'}
        backgroundTint={BackgroundTintByStatus[status] || undefined}
        borderWidth={applied ? 2 : 0}
        borderColor={ColorByStatus[status] || 'neutral'}
        borderTint="dark"
        borderRadius="rounded"
        onClick={status !== Status.DISABLED && onClick}
        onKeyDown={handleKeyDown}
      >
        <Container
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
          marginRight={2}
          {...tooltipProps}
        >
          <TextBodyCompact
            color={status === Status.DEFAULT ? 'teal' : ColorByStatus[status] || 'neutral'}
            tint={status === Status.DISABLED ? 'dark' : 'darkest'}
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
                  color={ColorByStatus[status] || 'neutral'}
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
                <Icon color={ColorByStatus[status] || 'neutral'} tint="dark" opacity={1}>
                  <IconCloseSmallOutline />
                </Icon>
              </Box>
            </Box>
          )}
        </Container>
        <Icon
          color={status === Status.DEFAULT ? 'teal' : ColorByStatus[status] || 'neutral'}
          tint={status === Status.DISABLED ? 'dark' : 'darkest'}
          className={cx(
            theme['select-dropdown-indicator'],
            status === Status.FOCUSED && theme['select-dropdown-indicator--focused'],
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
