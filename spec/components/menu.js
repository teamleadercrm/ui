import React from 'react';
import { Menu, MenuItem, MenuDivider, IconMenu } from '../../components/menu';

class MenuTest extends React.Component {
  state = {
    value: undefined,
  };

  handleSelect = (item) => {
    console.log('Menu selection changed!!, now its', item);
    this.setState({ value: item });
  };

  handleItemClick = () => {
    console.log('This item is so special that has a special handler');
  };

  render () {
    return (
      <article>
        <header>
          <h1>Menus</h1>
        </header>

        <h2>Menu</h2>
        <div className="component-spec">
          <div className="preview">
            <h3>Preview</h3>
            <Menu onSelect={this.handleSelect} selectable={false} selected={this.state.value}>
              <MenuItem value="foo" caption="Caption" />
              <MenuItem onClick={this.handleItemClick} value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
              <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
              <MenuDivider />
              <MenuItem caption="Caption & Icon" icon="check" />
              <MenuItem caption="Caption, Icon & Shortcut" icon="list_bulleted" shortcut="Ctrl + P" />
              <MenuItem caption="Disabled ..." icon="flag" shortcut="Ctrl + P" disabled />
            </Menu>
          </div>
        </div>

        <h2>IconMenu</h2>
        <div className="component-spec">
          <div className="preview">
            <h3>Preview</h3>
            <IconMenu icon="dots_vert" position="topLeft">
              <MenuItem value="download" icon="user_two" caption="Download" />
              <MenuDivider />
              <MenuItem caption="Disabled ..." icon="close" shortcut="Ctrl + P" disabled />
            </IconMenu>
          </div>
        </div>
      </article>
    );
  }
}

export default MenuTest;
