import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import { Menu } from '../menu';
import Popover from '../popover';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import pick from 'lodash.pick';

/** @type {React.ComponentType<any>} */
class SplitButton extends PureComponent {
  firstChild = pick(this.props.children[0].props, ['label']);

  state = {
    buttonLabel: this.firstChild.label,
    popoverActive: false,
    popoverAnchorEl: null,
  };

  handleMainButtonClick = (event) => {
    this.props.onButtonClick(event);
  };

  handleSecondaryButtonClick = (event) => {
    const { onSecondaryButtonClick } = this.props;
    this.setState({ popoverActive: true, popoverAnchorEl: event.currentTarget });
    if (onSecondaryButtonClick) {
      onSecondaryButtonClick(event);
    }
  };

  handleMenuItemClick = (child, event) => {
    const childProps = child.props;
    this.setState({
      popoverActive: false,
    });
    childProps.onClick(event);
  };

  handleCloseClick = () => {
    this.setState({ popoverActive: false });
  };

  render() {
    const { children, level, size, disabled, ...others } = this.props;
    const { buttonLabel, popoverActive, popoverAnchorEl } = this.state;
    const boxProps = pickBoxProps(others);
    return (
      <Box display="flex" justifyContent="center" {...boxProps} data-teamleader-ui="split-menu">
        <ButtonGroup segmented>
          <Button
            label={buttonLabel}
            level={level}
            size={size}
            disabled={disabled}
            onClick={this.handleMainButtonClick}
          />
          <Button
            icon={<IconChevronDownSmallOutline />}
            level={level}
            size={size}
            disabled={disabled}
            onClick={this.handleSecondaryButtonClick}
          />
        </ButtonGroup>
        <Popover
          active={popoverActive}
          anchorEl={popoverAnchorEl}
          backdrop="transparent"
          lockScroll={false}
          onEscKeyDown={this.handleCloseClick}
          onOverlayClick={this.handleCloseClick}
          position="start"
        >
          <Menu>
            {React.Children.map(children, (child) => {
              if (child.props.label !== buttonLabel) {
                return React.cloneElement(child, {
                  onClick: (event) => this.handleMenuItemClick(child, event),
                });
              }
            })}
          </Menu>
        </Popover>
      </Box>
    );
  }
}

SplitButton.defaultProps = {
  level: 'primary',
  size: 'medium',
};

SplitButton.propTypes = {
  /** The MenuItems we pass to our component. */
  children: PropTypes.node.isRequired,
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** The function executed, when we click on the main button. */
  onButtonClick: PropTypes.func.isRequired,
  /** The function executed, when we click on the secondary button. */
  onSecondaryButtonClick: PropTypes.func,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
};

export default SplitButton;
