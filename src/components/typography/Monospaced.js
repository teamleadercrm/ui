import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
class Monospaced extends PureComponent {
  render() {
    const { children, className, element } = this.props;

    const classNames = cx(theme['monospaced'], className);

    const Element = element;

    return (
      <Element data-teamleader-ui="monospaced" className={classNames}>
        {children}
      </Element>
    );
  }
}

Monospaced.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node,
};

Monospaced.defaultProps = {
  element: 'span',
};

export default Monospaced;
