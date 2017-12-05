import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    bullet: PropTypes.element,
    className: PropTypes.string,
    counter: PropTypes.element,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    imageClassName: PropTypes.string,
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { bullet, className, counter, image, imageAlt, imageClassName, size, ...others } = this.props;

    const avatarClassNames = cx(theme['avatar'], theme[size], className);

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar">
        <img alt={imageAlt} src={image} className={cx(theme['image'], imageClassName)} />
        {bullet ? (
          <div className={theme['bullet']}>{bullet}</div>
        ) : counter ? (
          <div className={theme['counter']}>{counter}</div>
        ) : null}
      </Box>
    );
  }
}

export default Avatar;
