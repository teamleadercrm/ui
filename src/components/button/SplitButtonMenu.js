import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import { Button, ButtonGroup } from '.';
import { Menu } from '../menu';
import Popover from '../popover';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import pick from 'lodash.pick';

class SplitButtonMenu extends PureComponent {
  firstChild = pick(this.props.children[0].props, ['caption', 'level', 'value']);

  state = {
    buttonLabel: this.firstChild.caption,
    popoverActive: false,
    popoverAnchorEl: null,
  };

  handleMainButtonClick = event => {
    this.props.onButtonClick(event.currentTarget);
  };

  handleSecondaryButtonClick = event => {
    this.setState({ popoverActive: true, popoverAnchorEl: event.currentTarget });
  };

  handleMenuItemClick = child => {
    const childProps = child.props;
    this.setState({
      buttonLabel: childProps.caption,
      popoverActive: false,
    });

    if (this.props.triggerListAction) {
      childProps.onMenuItemClick(childProps.caption);
    }
  };

  handleCloseClick = () => {
    this.setState({ popoverActive: false });
  };

  render() {
    const { children, level, size, ...others } = this.props;
    const { buttonLabel, popoverActive, popoverAnchorEl } = this.state;
    const boxProps = pickBoxProps(others);
    return (
      <Box display="flex" justifyContent="center" {...boxProps} data-teamleader-ui="split-menu">
        <ButtonGroup segmented>
          <Button label={buttonLabel} level={level} size={size} onClick={this.handleMainButtonClick} />
          <Button
            icon={<IconChevronDownSmallOutline />}
            level={level}
            size={size}
            onClick={this.handleSecondaryButtonClick}
          />
        </ButtonGroup>
        <Popover
          active={popoverActive}
          anchorEl={popoverAnchorEl}
          backdrop="transparent"
          onEscKeyDown={this.handleCloseClick}
          onOverlayClick={this.handleCloseClick}
          position="start"
        >
          <Menu>
            {React.Children.map(children, child => {
              if (child.props.caption !== buttonLabel) {
                return React.cloneElement(child, {
                  onClick: () => this.handleMenuItemClick(child),
                });
              }
            })}
          </Menu>
        </Popover>
      </Box>
    );
  }
}

SplitButtonMenu.defaultProps = {
  level: 'primary',
  size: 'medium',
  triggerListAction: true,
};

SplitButtonMenu.propTypes = {
  /** The MenuItems we pass to our component. */
  children: PropTypes.node.isRequired,
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Boolean to decide if we want to fire directly after clicking on a list item. */
  triggerListAction: PropTypes.bool,
  /** The function executed, when we click on the main button. */
  onButtonClick: PropTypes.func.isRequired,
};

export default SplitButtonMenu;
