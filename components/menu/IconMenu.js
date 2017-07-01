import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import { MENU } from '../identifiers.js';
import InjectIconButton from '../button/IconButton.js';
import InjectMenu from './Menu.js';

const factory = (IconButton, Menu) => {
  class IconMenu extends Component {
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
      theme: PropTypes.shape({
        icon: PropTypes.string,
        iconMenu: PropTypes.string,
      }),
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
        onSelect, onShow, position, selectable, selected, theme, ...other
      } = this.props;

      return (
        <div {...other} className={cx(theme.iconMenu, className)}>
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
            theme={theme}
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
export default themr(MENU)(IconMenu);
export { factory as iconMenuFactory };
export { IconMenu };
