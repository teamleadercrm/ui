import React, { Component, PropTypes } from 'react';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import { CARD } from '../identifiers.js';

class Card extends Component {
  static defaultProps = {
    disabled: false,
    dragging: false,
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    theme: PropTypes.shape({
      card: PropTypes.string,
    }),
  };

  render () {
    const {
      children,
      className,
      theme,
      disabled,
      dragging,
      ...others
    } = this.props;

    const cardClassName = cx(
      theme['card'],
      className,
      disabled || dragging ? theme['disabled'] : null,
      dragging ? theme['dragging'] : null
    );

    return (
      <div className={cardClassName} {...others}>
        <div className={theme['inner']}>
          {children}
        </div>
      </div>
    );
  }
}

export default themr(CARD)(Card);
export { Card };
