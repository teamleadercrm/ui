import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InjectIconButton from '../button/IconButton.js';
import InjectMenu from './Menu.js';
import theme from './theme.css';

const factory = (IconButton, Menu) => {
  class IconMenu extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      onClick: PropTypes.func,
      onHide: PropTypes.func,
      onSelect: PropTypes.func,
      onShow: PropTypes.func,
      position: PropTypes.string,
      selectable: PropTypes.bool,
      selected: PropTypes.any,
    };

    static defaultProps = {
      className: '',
      icon: 'more_vert',
      position: 'auto',
      selectable: false,
    };

    state = {
      active: false,
    };

    handleButtonClick = (event) => {
      this.setState({ active: !this.state.active });
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    };

    handleMenuHide = () => {
      this.setState({ active: false });
      if (this.props.onHide) {
        this.props.onHide();
      }
    };

    render () {
      const {
        children, className, icon, onHide, // eslint-disable-line
        onSelect, onShow, position, selectable, selected, ...other
      } = this.props;

      return (
        <div data-teamleader-ui="icon-menu" {...other} className={cx(theme.iconMenu, className)}>
          <IconButton
            className={theme.icon}
            icon={icon}
            onClick={this.handleButtonClick}
          />
          <Menu
            active={this.state.active}
            onHide={this.handleMenuHide}
            onSelect={onSelect}
            onShow={onShow}
            position={position}
            selectable={selectable}
            selected={selected}
          >
            {children}
          </Menu>
        </div>
      );
    }
  }

  return IconMenu;
};

const IconMenu = factory(InjectIconButton, InjectMenu);

export default IconMenu;
export {
  factory as iconMenuFactory,
  IconMenu,
};
