import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    counter: PropTypes.element,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { className, counter, image, imageAlt, size, ...others } = this.props;

    const avatarClassNames = cx(theme['avatar'], theme[size], className);

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar">
        <img alt={imageAlt} src={image} className={theme['image']} />
        {counter && <div className={theme['counter']}>{counter}</div>}
      </Box>
    );
  }
}

export default Avatar;
