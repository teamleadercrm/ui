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
      <section>
        <h2>Menus</h2>
        <Menu onSelect={this.handleSelect} selectable={false} selected={this.state.value}>
          <MenuItem value='foo' caption='Caption' />
          <MenuItem onClick={this.handleItemClick} value='bar' caption='Caption & Shortcut' shortcut='Ctrl + P' />
          <MenuItem caption='Disabled ...' disabled shortcut='Ctrl + P' />
          <MenuDivider />
          <MenuItem caption='Caption & Icon' icon='close' />
          <MenuItem caption='Caption, Icon & Shortcut' icon='user_two' shortcut='Ctrl + P' />
          <MenuItem caption='Disabled ...' icon='search' shortcut='Ctrl + P' disabled />
        </Menu>

        <hr />

        <IconMenu icon='dots_vert' position='topLeft'>
          <MenuItem value='download' icon='user_two' caption='Download' />
          <MenuDivider />
          <MenuItem caption='Disabled ...' icon='search' shortcut='Ctrl + P' disabled />
        </IconMenu>
      </section>
    );
  }
}

export default MenuTest;
