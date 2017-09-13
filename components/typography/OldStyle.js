import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

const factory = (defaultElement) => {
  class OldStyle extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      element: PropTypes.node,
    };

    static defaultProps = {
      className: '',
      element: null,
    };

    render () {
      const {
        children,
        className,
        element,
      } = this.props;

      const classNames = cx(
        s['old-style'],
        className,
      );

      const Element = element || defaultElement;

      return (
        <Element className={classNames}>{children}</Element>
      );
    }
  }

  return OldStyle;
};

export { factory as oldStyleFactory };
