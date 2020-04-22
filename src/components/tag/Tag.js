import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Badge from '../badge';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseSmallOutline } from '@teamleader/ui-icons';

class Tag extends PureComponent {
  render() {
    const { children, className, onClick, onRemoveClick, selected, size, disabled, ...others } = this.props;

    const classNames = cx(
      theme['wrapper'],
      {
        [theme['is-removable']]: onRemoveClick,
      },
      className,
    );

    return (
      <Box {...others} className={classNames} data-teamleader-ui="tag" display="inline-flex">
        <Badge
          className={theme['label']}
          disabled={disabled}
          onClick={onClick}
          overflow="hidden"
          selected={selected}
          size={size}
        >
          {children}
        </Badge>
        {onRemoveClick && (
          <Badge
            className={theme['remove-button']}
            disabled={disabled}
            icon={<IconCloseSmallOutline />}
            onClick={onRemoveClick}
            selected={selected}
            size={size}
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
  onRemoveClick: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Tag.defaultProps = {
  size: 'medium',
};

export default Tag;
