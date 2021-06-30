import { IconCloseSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import React, { forwardRef, useCallback } from 'react';
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

const FilterSelection = ({ label, modificationText, status, amount, onClick, onClearClick }, ref) => {
  const showAmount = typeof amount === 'number';
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

  const handleClearClick = useCallback(
    (event) => {
      event.stopPropagation();
      onClearClick();
    },
    [onClearClick],
  );

  return (
    <Box
      ref={ref}
      className={cx(
        theme['select-control'],
        status === Status.ACTIVE && theme['select-control--active'],
        status === Status.FOCUSED && theme['select-control--focused'],
      )}
      onClick={onClick}
    >
      <Container className={theme['select-value-container']} {...tooltipProps}>
        {status === Status.ACTIVE && (
          <Box display="flex">
            {showAmount && (
              <Heading4
                paddingHorizontal={2}
                backgroundColor="aqua"
                backgroundTint="dark"
                color="neutral"
                tint="lightest"
                className={theme['select-active-options-counter']}
              >
                <Monospaced>{amount}</Monospaced>
              </Heading4>
            )}
            <Box
              alignItems="center"
              backgroundTint="dark"
              backgroundColor="aqua"
              className={cx(
                theme['select-clear-options-button'],
                !showAmount && theme['select-clear-options-button--amount-hidden'],
              )}
              display="flex"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={handleClearClick}
              paddingHorizontal={1}
            >
              <Icon color="aqua" tint="lightest" opacity={1}>
                <IconCloseSmallOutline />
              </Icon>
            </Box>
          </Box>
        )}
        <TextBodyCompact marginLeft={status === Status.ACTIVE && 2}>{`${label}${
          modified ? ' •' : ''
        }`}</TextBodyCompact>
      </Container>
      <Icon
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
  status: PropTypes.oneOf(Object.values(Status)),
  amount: PropTypes.number,
  onClick: PropTypes.func,
  onClearClick: PropTypes.func,
};

FilterSelection.defaultProps = {
  label: '',
  modificationText: null,
  status: Status.DEFAULT,
  amount: null,
  onClick: null,
  onClearClick: null,
};

export default forwardRef(FilterSelection);
