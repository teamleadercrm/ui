import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Button from '../button';
import IconButton from '../iconButton';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseSmallOutline } from '@teamleader/ui-icons';
import uiUtilities from '@teamleader/ui-utilities';

class Tag extends PureComponent {
  render() {
    const { children, className, onLabelClick, onRemoveClick, size, disabled, ...others } = this.props;

    const classNames = cx(
      theme['tag'],
      theme[`is-${size}`],
      {
        [theme['is-removable']]: onRemoveClick,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    const closeButtonColor = 'neutral';
    const closeButtonIcon = <IconCloseSmallOutline />;

    return (
      <Box className={classNames} data-teamleader-ui="tag" {...others}>
        {onLabelClick ? (
          <Button className={theme['label-button']} onClick={onLabelClick} level="outline" disabled={disabled}>
            {children}
          </Button>
        ) : (
          <span className={cx(uiUtilities['reset-font-smoothing'], theme['label'])}>{children}</span>
        )}

        {onRemoveClick && (
          <IconButton
            className={theme['remove-button']}
            color={closeButtonColor}
            icon={closeButtonIcon}
            onClick={onRemoveClick}
            size="small"
            disabled={disabled}
          />
        )}
      </Box>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onLabelClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Tag.defaultProps = {
  size: 'medium',
};

export default Tag;
