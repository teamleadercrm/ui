import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseSmallOutline } from '@teamleader/ui-icons';

const SIZES = {
  small: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  medium:  {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  large:  {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
};

class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(Object.keys(SIZES)),
  };

  static defaultProps = {
    inverse: false,
    size: 'medium',
  };

  constructor() {
    super(...arguments);
    this.handleClick = ::this.handleClick;
    this.handleClose = ::this.handleClose;
  }

  handleClick() {
    this.props.onClick();
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const { className, inverse, label, onClose, size, ...others } = this.props;

    const classNames = cx(theme.tag, className, {
      [theme['inverse']]: inverse,
    });

    return (
      <Box
        className={classNames}
        data-teamleader-ui="tag"
        element="span"
        onClick={this.handleClick}
        {...SIZES[size]}
        {...others}
      >
        <span className={theme['inner']}>
          <span className={theme['label']}>{label}</span>
          {onClose && (
          <IconButton
            className={theme['close-button']}
            icon={<IconCloseSmallOutline />}
            onClick={this.handleClose}
            size="small"
          />
        )}
        </span>
      </Box>
    );
  }
}

export default Tag;
