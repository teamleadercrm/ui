import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

const factory = (defaultElement) => {
  class OldStyleNumber extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      element: PropTypes.node,
    };

    static defaultProps = {
      element: null,
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

      const Element = element || defaultElement;

      return (
        <Element className={classNames}>{children}</Element>
      );
    }
  }

  return OldStyleNumber;
};

export { factory as oldStyleNumberFactory };
