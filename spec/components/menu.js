import React from 'react';
import { Menu, MenuItem, MenuDivider, IconMenu } from '../../components/menu';
import { Heading1, Heading2, Heading3, Section } from '../../components';
import { IconHamburgerMediumOutline } from '@teamleader/ui-icons';

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
        <Section neutral dark>
          <Heading1>Menus</Heading1>
        </Section>

        <Heading2>Menu</Heading2>
        <div className="component-spec">
          <div className="preview">
            <Heading3>Preview</Heading3>
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

        <Heading2>IconMenu</Heading2>
        <div className="component-spec">
          <div className="preview">
            <Heading3>Preview</Heading3>
            <IconMenu icon={<IconHamburgerMediumOutline />} position="topLeft">
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
