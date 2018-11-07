import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Button, { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';

class Tag extends PureComponent {
  render() {
    const { children, className, inverse, onLabelClick, onRemoveClick, size, color, disabled, ...others } = this.props;

    const classNames = cx(
      theme['tag'],
      theme[`is-${size}`],
      theme[color],
      {
        [theme['is-removable']]: onRemoveClick,
        [theme['is-inverse']]: inverse,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    const closeButtonColor = inverse ? 'white' : 'neutral';
    const closeButtonIcon = <IconCloseSmallOutline />;

    return (
      <Box className={classNames} data-teamleader-ui="tag" {...others}>
        {onLabelClick ? (
          <Button
            className={theme['label-button']}
            onClick={onLabelClick}
            level="outline"
            inverse={inverse}
            disabled={disabled}
          >
            {children}
          </Button>
        ) : (
          <span className={theme['label']}>{children}</span>
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
  inverse: PropTypes.bool,
  onLabelClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['neutral', 'mint', 'gold', 'ruby', 'violet', 'aqua']),
};

Tag.defaultProps = {
  inverse: false,
  size: 'medium',
  color: 'neutral',
};

export default Tag;
