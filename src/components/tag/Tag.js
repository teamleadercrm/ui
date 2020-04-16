import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import IconButton from '../iconButton';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseSmallOutline } from '@teamleader/ui-icons';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';

class Tag extends PureComponent {
  render() {
    const { children, className, onClick, onRemoveClick, selected, size, disabled, ...others } = this.props;

    const classNames = cx(
      theme['tag'],
      theme[`is-${size}`],
      {
        [theme['is-clickable']]: onClick,
        [theme['is-removable']]: onRemoveClick,
        [theme['is-disabled']]: disabled,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

    return (
      <Box className={classNames} data-teamleader-ui="tag" {...others}>
        <TextElement marginHorizontal={2}>{children}</TextElement>
        {onRemoveClick && (
          <IconButton
            className={theme['remove-button']}
            color="teal"
            icon={<IconCloseSmallOutline />}
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
  onRemoveClick: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Tag.defaultProps = {
  size: 'medium',
};

export default Tag;
