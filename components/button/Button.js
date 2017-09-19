import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FontIcon from '../font_icon';
import omit from 'lodash.omit';
import theme from './theme.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    processing: PropTypes.bool,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    bordered: false,
    primary: false,
    processing: false,
    size: 'medium',
    type: 'button',
  };

  getLevel = () => {
    if (this.props.primary) {
      return 'primary';
    }
    return 'secondary';
  };

  getShape = () => {
    if (this.props.bordered) {
      return 'bordered';
    }
  };

  getState = () => {
    if (this.props.processing) {
      return 'processing';
    }
  };

  handleMouseUp = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render () {
    const {
      children,
      className,
      href,
      icon,
      label,
      size,
      type,
      processing,
      ...others
    } = this.props;

    const rest = omit(others, [ 'primary', 'bordered' ]);

    const element = href ? 'a' : 'button';
    const level = this.getLevel();
    const shape = this.getShape();
    const state = this.getState();

    const classes = cx(
      theme.button,
      {
        [theme[ level ]]: theme[ level ],
        [theme[ shape ]]: theme[ shape ],
        [theme[ state ]]: theme[ state ],
        [theme[ size ]]: theme[ size ],
        [theme.iconOnly]: !label && !children,
      },
      className
    );

    const props = {
      ...rest,
      href,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(element, props,
      icon && !processing ? <FontIcon className={theme.icon} value={icon} /> : null,
      processing ? <FontIcon className={theme.icon} value="spinner" /> : null,
      label,
      children
    );
  }
}

export default Button;
export { Button };
