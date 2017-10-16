import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    borderColor: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby', 'tealdark']),
    className: PropTypes.string,
    counter: PropTypes.element,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    borderColor: 'white',
    size: 'medium',
  };

  render() {
    const { borderColor, className, counter, image, imageAlt, size, ...others } = this.props;

    const avatarClasses = cx(theme.avatar, theme[size], className);

    const imageClasses = cx(theme.image, theme[`border-${borderColor}`]);

    return (
      <div className={avatarClasses} {...others} data-teamleader-ui="avatar">
        <div className={imageClasses}>
          <img alt={imageAlt} src={image} />
        </div>
        {counter && <div className={theme.counter}>{counter}</div>}
      </div>
    );
  }
}

export default Avatar;
