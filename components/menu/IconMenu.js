import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconMoreMediumOutline } from '@teamleader/ui-icons';
import IconButton from '../button/IconButton.js';
import Menu from './Menu.js';
import theme from './theme.css';

class IconMenu extends PureComponent {
  state = {
    active: false,
  };

  handleButtonClick = event => {
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

  render() {
    const {
      children,
      className,
      icon,
      onHide, // eslint-disable-line
      onSelect,
      onShow,
      position,
      selectable,
      selected,
      ...other
    } = this.props;

    const buttonIcon = icon || <IconMoreMediumOutline />;

    return (
      <div data-teamleader-ui="icon-menu" {...other} className={cx(theme['icon-menu'], className)}>
        <IconButton className={theme['icon']} icon={buttonIcon} onClick={this.handleButtonClick} />
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

IconMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  onHide: PropTypes.func,
  onSelect: PropTypes.func,
  onShow: PropTypes.func,
  position: PropTypes.string,
  selectable: PropTypes.bool,
  selected: PropTypes.any,
};

IconMenu.defaultProps = {
  className: '',
  position: 'auto',
  selectable: false,
};

export default IconMenu;
