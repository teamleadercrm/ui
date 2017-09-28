import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    borderColor: PropTypes.oneOf([ 'neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby', 'tealdark' ]),
    className: PropTypes.string,
    counter: PropTypes.element,
    image: PropTypes.string,
    size: PropTypes.oneOf([ 'tiny', 'small', 'medium' ]),
  };

  static defaultProps = {
    borderColor: 'white',
    size: 'medium',
  };

  render () {
    const {
      borderColor,
      className,
      counter,
      image,
      size,
      ...others
    } = this.props;

    const avatarClasses = cx(
      theme.avatar,
      theme[size],
      className,
    );

    const imageClasses = cx(
      theme.image,
      theme[`border-${borderColor}`],
    );

    return (
      <span className={avatarClasses} {...others} data-teamleader-ui="avatar">
        <span className={imageClasses}>
          <img src={image} />
        </span>
        { counter && (
          <span className={theme.counter}>
            {counter}
          </span>)
        }
      </span>
    );
  }
}

export default Avatar;
