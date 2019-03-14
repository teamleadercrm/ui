import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';

class MenuItem extends PureComponent {
  handleClick = event => {
    const { disabled, onClick } = this.props;

    if (onClick && !disabled) {
      onClick(event, this);
    }
  };

  render() {
    const { icon, caption, children, className, shortcut, selected, disabled, ...others } = this.props;

    const classNames = cx(
      theme['menu-item'],
      theme['text-small'],
      {
        [theme['selected']]: selected,
        [theme['disabled']]: disabled,
      },
      className,
    );

    return (
      <li {...others} data-teamleader-ui="menu-item" className={classNames} onClick={this.handleClick}>
        {icon && <Icon marginRight={3}>{icon}</Icon>}
        <span className={theme['caption']}>{caption}</span>
        {shortcut && <small className={theme['shortcut']}>{shortcut}</small>}
        {children}
      </li>
    );
  }
}

MenuItem.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  shortcut: PropTypes.string,
};

MenuItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
};

export default MenuItem;
