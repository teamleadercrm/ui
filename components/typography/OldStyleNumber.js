import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

class OldStyleNumber extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
  };

  static defaultProps = {
    element: 'span',
  };

  render () {
    const {
      children,
      className,
      element,
    } = this.props;

    const classNames = cx(
      s['old-styled-number'],
      className,
    );

    const Element = element;

    return (
      <Element data-teamleader-ui="old-styled-number" className={classNames}>{children}</Element>
    );
  }
}

export default OldStyleNumber;
