import { IconCloseSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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

const FilterSelection = ({ label, modificationText, applied, status, amountApplied, onClick, onClearClick }, ref) => {
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

  const handleClearClick = (event) => {
    event.stopPropagation();
    if (status !== Status.DISABLED) {
      onClearClick();
    }
  };

  return (
    <Box
      ref={ref}
      className={cx(theme['select-control'])}
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
              onMouseDown={(event) => event.stopPropagation()}
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
};

FilterSelection.propTypes = {
  label: PropTypes.string,
  modificationText: PropTypes.string,
  applied: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(Status)),
  amountApplied: PropTypes.number,
  onClick: PropTypes.func,
  onClearClick: PropTypes.func,
};

FilterSelection.defaultProps = {
  label: '',
  modificationText: null,
  applied: false,
  status: Status.DEFAULT,
  amountApplied: null,
  onClick: null,
  onClearClick: null,
};

export default forwardRef(FilterSelection);
