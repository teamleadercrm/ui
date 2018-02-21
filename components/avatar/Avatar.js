import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    imageClassName: PropTypes.string,
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { children, className, image, imageAlt, imageClassName, size, ...others } = this.props;

    const avatarClassNames = cx(theme['avatar'], theme[size], className);

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar">
        <img alt={imageAlt} src={image} className={cx(theme['image'], imageClassName)} />
        {children && <div className={theme['connected']}>{children}</div>}
      </Box>
    );
  }
}

export default Avatar;
