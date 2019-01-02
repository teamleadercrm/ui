import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconMoreMediumOutline } from '@teamleader/ui-icons';
import IconButton from '../button/IconButton.js';
import Menu from './Menu.js';
import Box, { omitBoxProps, pickBoxProps } from '../box';
class IconMenu extends PureComponent {
  state = {
    active: false,
    anchorEl: null,
    selectedValue: null,
  };

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ anchorEl: this.buttonRef.current.buttonNode });
  }

  handleOnSelect = value => {
    if (this.props.onSelect) {
      this.props.onSelect();
    }

    this.setState({ selectedValue: value });
    this.toggleActive();
  };

  toggleActive = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active, anchorEl, selectedValue } = this.state;
    const { children, icon, ...others } = this.props;

    const buttonIcon = icon || <IconMoreMediumOutline />;

    return (
      <Box data-teamleader-ui="icon-menu" {...pickBoxProps(others)}>
        <IconButton ref={this.buttonRef} icon={buttonIcon} onClick={this.toggleActive} />
        <Menu
          active={active}
          anchorEl={anchorEl}
          selectedValue={selectedValue}
          onSelect={this.handleOnSelect}
          {...omitBoxProps(others)}
        >
          {children}
        </Menu>
      </Box>
    );
  }
}

IconMenu.propTypes = {
  /** The items wrapped by the Menu. */
  children: PropTypes.node,
  /** The icon rendered by the IconButton */
  icon: PropTypes.element,
  /** The function executed, when a MenuItem (that was passed as a child) has been clicked. */
  onSelect: PropTypes.func,
};

export default IconMenu;
