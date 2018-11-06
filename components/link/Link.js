import React, { createRef, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Link extends PureComponent {
  linkNode = createRef();

  render() {
    const { children, className, icon, iconPlacement, element, inherit, ...others } = this.props;

    const classNames = cx(
      theme['link'],
      {
        [theme['inherit']]: inherit,
      },
      className,
    );

    const ChildrenWrapper = icon ? 'span' : Fragment;
    const Element = element;

    return (
      <Element ref={this.linkNode} className={classNames} data-teamleader-ui="link" {...others}>
        {icon && iconPlacement === 'left' && icon}
        <ChildrenWrapper>{children}</ChildrenWrapper>
        {icon && iconPlacement === 'right' && icon}
      </Element>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  inherit: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
};

Link.defaultProps = {
  className: '',
  element: 'a',
  inherit: true,
};

export default Link;
