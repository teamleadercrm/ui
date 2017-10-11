import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

const factory = (type, defaultElement) => {
  class Text extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
      element: PropTypes.node,
      soft: PropTypes.bool,
    };

    static defaultProps = {
      element: null,
      soft: false,
    };

    isSoft(color) {
      if (color !== 'white') {
        return false;
      }

      return this.props.soft;
    }

    render() {
      const { children, className, color, element } = this.props;

      const isSoft = this.isSoft(color);

      const classNames = cx(
        s['text'],
        s[type],
        s[color],
        {
          [s['soft']]: isSoft,
        },
        className,
      );

      const Element = element || defaultElement;

      return (
        <Element data-teamleader-ui="text" className={classNames}>
          {children}
        </Element>
      );
    }
  }

  return Text;
};

export { factory as textFactory };
