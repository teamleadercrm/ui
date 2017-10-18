import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Box extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
    marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
  };

  static defaultProps = {
    element: 'div',
    marginTop: 0,
  };

  render() {
    const { children, className, element, marginTop, ...others } = this.props;

    const classNames = cx(
      theme['box'],
      {
        [theme[`margin-top-${marginTop}`]]: marginTop > 0,
      },
      className,
    );

    const Element = element;

    return (
      <Element className={classNames} {...others}>
        {children}
      </Element>
    );
  }
}

export default Box;
