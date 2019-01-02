import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem.js';
import Popover from '../popover';

class Menu extends PureComponent {
  handleSelect = (item, event) => {
    const { onSelect } = this.props;
    const { value, onClick } = item.props;

    if (onSelect) {
      onSelect(value);
    }

    if (onClick) {
      event.persist();
      onClick(event);
    }
  };

  getItems = (children, selectedValue) => {
    // Because React Hot Loader creates proxied versions of your components,
    // comparing reference types of elements won't work
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Known%20Limitations.md#checking-element-types
    const MenuItemType = <MenuItem />.type;

    return React.Children.map(children, item => {
      if (!item) {
        return item;
      }

      if (item.type === MenuItemType) {
        return React.cloneElement(item, {
          selected: typeof item.props.value !== 'undefined' && item.props.value === selectedValue,
          onClick: this.handleSelect.bind(this, item),
        });
      } else {
        return React.cloneElement(item);
      }
    });
  };

  render() {
    const { children, onSelect, selectedValue, ...others } = this.props;
    return (
      <Popover backdrop="transperant" {...others}>
        {this.getItems(children, selectedValue)}
      </Popover>
    );
  }
}

Menu.propTypes = {
  /** The state of the Menu, when true the Menu is rendered otherwise it is not. */
  active: PropTypes.bool,
  /** The items wrapped by the Menu. */
  children: PropTypes.node,
  /** The function executed, when a MenuItem (that was passed as a child) has been clicked. */
  onSelect: PropTypes.func,
  /** When set, the MenuItem (that was passed as a child) whose value property equals this property, will be rendered in its selected state. */
  selectedValue: PropTypes.any,
};

export default Menu;
