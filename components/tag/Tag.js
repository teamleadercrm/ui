import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Button, { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';

class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onLabelClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    inverse: false,
    size: 'medium',
  };

  getCloseButtonColor() {
    return this.props.inverse ? 'white' : 'neutral';
  }

  getCloseIcon() {
    return this.props.size === 'large' ? <IconCloseMediumOutline /> : <IconCloseSmallOutline />;
  }

  render() {
    const { className, inverse, label, onLabelClick, onRemoveClick, size, ...others } = this.props;

    const classNames = cx(
      theme.tag,
      {
        [theme['removable']]: onRemoveClick,
        [theme['inverse']]: inverse,
        [theme[size]]: theme[size],
      },
      className,
    );

    return (
      <Box className={classNames} data-teamleader-ui="tag" {...others}>
        {onLabelClick ? (
          <Button className={theme['label-button']} onClick={onLabelClick} level="outline" inverse={inverse}>
            {label}
          </Button>
        ) : (
          <span className={theme['label']}>{label}</span>
        )}

        {onRemoveClick && (
          <IconButton
            className={theme['remove-button']}
            color={this.getCloseButtonColor()}
            icon={this.getCloseIcon()}
            onClick={onRemoveClick}
            size="small"
          />
        )}
      </Box>
    );
  }
}

export default Tag;
