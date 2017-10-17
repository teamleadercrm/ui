import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const factory = () => {
  class MenuItem extends PureComponent {
    static propTypes = {
      caption: PropTypes.string,
      children: PropTypes.any,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      onClick: PropTypes.func,
      selected: PropTypes.bool,
      shortcut: PropTypes.string,
    };

    static defaultProps = {
      className: '',
      disabled: false,
      selected: false,
    };

    handleClick = event => {
      const { disabled, onClick } = this.props;

      if (onClick && !disabled) {
        onClick(event, this);
      }
    };

    render() {
      const { icon, caption, children, className, shortcut, selected, disabled, ...others } = this.props;

      const classNames = cx(
        theme['menuItem'],
        {
          [theme['selected']]: selected,
          [theme['disabled']]: disabled,
        },
        className,
      );

      return (
        <li {...others} data-teamleader-ui="menu-item" className={classNames} onClick={this.handleClick}>
          {icon && <span className={theme['icon']}>{icon}</span>}
          <span className={theme['caption']}>{caption}</span>
          {shortcut && <small className={theme['shortcut']}>{shortcut}</small>}
          {children}
        </li>
      );
    }
  }

  return MenuItem;
};

const MenuItem = factory();

export default MenuItem;
export { factory as menuItemFactory, MenuItem };
