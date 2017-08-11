import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import InjectFontIcon from '../font_icon/FontIcon';
import omit from 'lodash.omit';

const factory = (FontIcon) => {
  class IconButton extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      href: PropTypes.string,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      inverse: PropTypes.bool,
      neutral: PropTypes.bool,
      onMouseLeave: PropTypes.func,
      onMouseUp: PropTypes.func,
      primary: PropTypes.bool,
      theme: PropTypes.shape({
        button: PropTypes.string,
        flat: PropTypes.string,
        icon: PropTypes.string,
        iconOnly: PropTypes.string,
        inverse: PropTypes.string,
        neutral: PropTypes.string,
        primary: PropTypes.string,
        toggle: PropTypes.string,
      }),
      type: PropTypes.string,
    };

    static defaultProps = {
      className: '',
      neutral: true,
      primary: false,
      type: 'button',
    };

    getLevel = () => {
      if (this.props.primary) {
        return 'primary';
      }
      return 'neutral';
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
        inverse,
        neutral,
        primary,   // eslint-disable-line
        theme,
        type,
        ...others
      } = this.props;

      const rest = omit(others, [ 'small', 'medium', 'large' ]);

      const element = href ? 'a' : 'button';
      const level = this.getLevel();

      const classes = cx(
        [ theme.iconOnly ],
        [ theme.toggle ],
        {
          [theme[ level ]]: neutral,
          [theme.inverse]: inverse,
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

      const iconElement = typeof icon === 'string'
        ? <FontIcon className={theme.icon} value={icon} />
        : icon;

      return React.createElement(element, props,
        icon && iconElement,
        children,
      );
    }
  }

  return IconButton;
};

const IconButton = factory(InjectFontIcon);
export default themr(BUTTON)(IconButton);
export { factory as iconButtonFactory };
export { IconButton };
