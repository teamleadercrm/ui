import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Button, { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';

class Tag extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    inverse: PropTypes.bool,
    onLabelClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    inverse: false,
    size: 'medium',
  };

  render() {
    const { children, className, inverse, onLabelClick, onRemoveClick, size, ...others } = this.props;

    const classNames = cx(
      theme['tag'],
      theme[`is-${size}`],
      {
        [theme['is-removable']]: onRemoveClick,
        [theme['is-inverse']]: inverse,
      },
      className,
    );

    const closeButtonColor = inverse ? 'white' : 'neutral';
    const closeButtonIcon = size === 'large' ? <IconCloseMediumOutline /> : <IconCloseSmallOutline />;

    return (
      <Box className={classNames} data-teamleader-ui="tag" {...others}>
        {onLabelClick ? (
          <Button className={theme['label-button']} onClick={onLabelClick} level="outline" inverse={inverse}>
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
          />
        )}
      </Box>
    );
  }
}

export default Tag;
