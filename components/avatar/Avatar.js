import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    size: PropTypes.oneOf([ 'small', 'medium' ]),
  };

  static defaultProps = {
    size: 'medium',
  };

  render () {
    const {
      className,
      image,
      size,
      ...others
    } = this.props;

    const classes = cx(
      theme.avatar,
      theme[size],
      className,
    );

    return (
      <span className={classes} {...others} data-teamleader-ui="avatar">
        <span className={theme.image}>
          <img src={image} />
        </span>
      </span>
    );
  }
}

export default Avatar;
