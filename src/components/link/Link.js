import React, { createRef, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class Link extends PureComponent {
  linkNode = createRef();

  blur() {
    if (this.linkNode.current.blur) {
      this.linkNode.current.blur();
    }
  }

  handleMouseUp = (event) => {
    const { onMouseUp } = this.props;

    this.blur();
    onMouseUp && onMouseUp(event);
  };

  handleMouseLeave = (event) => {
    const { onMouseLeave } = this.props;

    this.blur();
    onMouseLeave && onMouseLeave(event);
  };

  render() {
    const {
      badged,
      children,
      className,
      disabled,
      icon,
      iconPlacement,
      element,
      inherit,
      inverse,
      selected,
      ...others
    } = this.props;

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['link'],
      {
        [theme['is-badged']]: badged,
        [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-inverse']]: inverse,
        [theme['is-selected']]: selected,
        [theme['has-icon']]: icon,
      },
      className,
    );

    const ChildrenWrapper = icon ? 'span' : Fragment;

    return (
      <Box
        element={element}
        ref={this.linkNode}
        className={classNames}
        data-teamleader-ui="link"
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        {...others}
      >
        {icon && iconPlacement === 'left' && icon}
        <ChildrenWrapper>{children}</ChildrenWrapper>
        {icon && iconPlacement === 'right' && icon}
      </Box>
    );
  }
}

Link.propTypes = {
  /** If true, component will be rendered with badged hover effect. */
  badged: PropTypes.bool,
  /** The content to display inside the link. */
  children: PropTypes.any.isRequired,
  /** A class name for the link to give custom styles. */
  className: PropTypes.string,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, the link style inherits the parent element style. */
  inherit: PropTypes.bool,
  /** If true, the underline behavior will be inverted. */
  inverse: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
};

Link.defaultProps = {
  badged: false,
  className: '',
  disabled: false,
  element: 'a',
  iconPlacement: 'left',
  inherit: true,
  inverse: false,
};

export default Link;
