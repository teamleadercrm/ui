import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../iconButton';
import Box from '../box';
import { UITextBody, UITextSmall, UITextDisplay } from '../typography';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseSmallOutline } from '@teamleader/ui-icons';

class Tag extends PureComponent {
  render() {
    const { children, className, onRemoveClick, size, ...others } = this.props;

    const classNames = cx(theme[`is-${size}`], theme['wrapper'], className);

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

    return (
      <Box {...others} className={classNames} data-teamleader-ui="tag" display="inline-flex">
        <TextElement
          color="teal"
          marginLeft={size === 'small' ? 2 : 3}
          marginRight={onRemoveClick ? 1 : size === 'small' ? 2 : 3}
          marginVertical={size === 'small' ? 0 : 1}
          overflow="hidden"
          tint="darkest"
        >
          {children}
        </TextElement>
        {onRemoveClick && (
          <IconButton className={theme['remove-button']} icon={<IconCloseSmallOutline />} onClick={onRemoveClick} />
        )}
      </Box>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onRemoveClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Tag.defaultProps = {
  size: 'medium',
};

export default Tag;
