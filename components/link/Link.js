import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    external: PropTypes.bool,
    onClick: PropTypes.func,
    url: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    external: false,
  };

  render () {
    const {
      children,
      className,
      external,
      onClick,
      url,
      ...rest
    } = this.props;

    const classNames = cx(
      s['link'],
      className,
    );

    const target = external ? '_blank' : undefined;
    const rel = external ? 'noopener noreferrer' : undefined;

    return (
      url
        ? (
          <a target={target} {...rest} href={url} rel={rel} className={classNames}>
            {children}
          </a>
        )
        : (
          <button onClick={onClick} className={classNames}>
            {children}
          </button>
        )
    );
  }
}

export default Link;
