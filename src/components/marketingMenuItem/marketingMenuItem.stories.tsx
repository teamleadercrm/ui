import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { CSSProperties } from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';

import MarketingMenuItem from './MarketingMenuItem';
import { IconExternalLinkSmallOutline } from '@teamleader/ui-icons';
import Menu, { MenuDivider, MenuItem } from '../menu';
import Box, { BoxProps } from '../box';
import { MenuListProps } from 'react-select';
import Select from '../select';
import { useCallback } from '@storybook/addons';

export default {
  component: MarketingMenuItem,
  title: addStoryInGroup(MARKETING, 'MarketingMenuItem'),

  parameters: {},
} as ComponentMeta<typeof MarketingMenuItem>;

export const MenuWithMenuUpsell: ComponentStory<typeof MarketingMenuItem> = (args) => (
  <Menu>
    <MenuItem label="Foo label" caption="This is foo's caption" />
    <MenuItem label="Bar label" caption="Caption of bar" />
    <MarketingMenuItem {...args} />
  </Menu>
);

MenuWithMenuUpsell.args = {
  label: 'Unlock baz',
  icon: <IconExternalLinkSmallOutline />,
  element: 'a',
  href: 'https://www.teamleader.be',
  target: '_blank',
};

const options = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
];

export const DropdownWithUpsell: ComponentStory<typeof MarketingMenuItem> = (args) => {
  const MenuList = useCallback(
    (props: MenuListProps) => {
      const { children, getStyles, innerRef, innerProps } = props;

      return (
        <Box
          {...(innerProps as BoxProps)}
          borderRadius="rounded"
          display="flex"
          flexDirection="column"
          flex={1}
          overflow="hidden"
          style={getStyles('menuList', props) as CSSProperties}
        >
          <Box ref={innerRef}>{children}</Box>
          <MenuDivider />
          <MarketingMenuItem {...args} />
        </Box>
      );
    },
    [args],
  );

  return <Select options={options} components={{ MenuList }} />;
};

DropdownWithUpsell.args = {
  label: 'Unlock baz',
  icon: <IconExternalLinkSmallOutline />,
  element: 'a',
  href: 'https://www.teamleader.be',
  target: '_blank',
};
