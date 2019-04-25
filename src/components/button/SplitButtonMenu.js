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
    buttonLevel: this.firstChild.level,
    value: this.firstChild.value,
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
      buttonLevel: childProps.level,
      popoverActive: false,
      value: childProps.value,
    });

    if (this.props.listItemAction) {
      childProps.onMenuItemClick();
    }
  };

  handleCloseClick = () => {
    this.setState({ popoverActive: false });
  };

  render() {
    const { children, listItemAction, ...others } = this.props;
    const { buttonLabel, buttonLevel, popoverActive, popoverAnchorEl, value } = this.state;
    const boxProps = pickBoxProps(others);

    return (
      <Box display="flex" justifyContent="center" {...boxProps} data-teamleader-ui="split-menu">
        <ButtonGroup segmented>
          <Button label={buttonLabel} level={buttonLevel} onClick={this.handleMainButtonClick} />
          <Button
            icon={<IconChevronDownSmallOutline />}
            level={buttonLevel}
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
          <Menu selected={value}>
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                onClick: () => this.handleMenuItemClick(child),
              });
            })}
          </Menu>
        </Popover>
      </Box>
    );
  }
}

SplitButtonMenu.defaultProps = {
  listItemAction: true,
};

SplitButtonMenu.propTypes = {
  /** The MenuItems we pass to our component. */
  children: PropTypes.node.isRequired,
  /** Boolean to decide if we want to fire directly after clicking on a list item. */
  listItemAction: PropTypes.bool,
  /** The function executed, when we click on the main button. */
  onButtonClick: PropTypes.func.isRequired,
};

export default SplitButtonMenu;
