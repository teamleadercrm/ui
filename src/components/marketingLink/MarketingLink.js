import React, { createRef, PureComponent } from 'react';
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
    const { children, className, element, ...others } = this.props;

    const classNames = cx(uiUtilities['reset-font-smoothing'], theme['link'], className);

    return (
      <Box
        element={element}
        ref={this.linkNode}
        className={classNames}
        data-teamleader-ui="marketing-link"
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        {...others}
      >
        {children}
      </Box>
    );
  }
}

Link.propTypes = {
  /** The content to display inside the link. */
  children: PropTypes.any.isRequired,
  /** A class name for the link to give custom styles. */
  className: PropTypes.string,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
};

Link.defaultProps = {
  className: '',
  element: 'a',
};

export default Link;
