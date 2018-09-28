import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Link extends PureComponent {
  render() {
    const { children, className, element, inherit, ...others } = this.props;

    const classNames = cx(
      theme['link'],
      {
        [theme['inherit']]: inherit,
      },
      className,
    );

    const Element = element || 'a';

    return (
      <Element className={classNames} data-teamleader-ui="link" {...others}>
        {children}
      </Element>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  inherit: PropTypes.bool,
  element: PropTypes.element,
};

Link.defaultProps = {
  className: '',
  inherit: true,
};

export default Link;
