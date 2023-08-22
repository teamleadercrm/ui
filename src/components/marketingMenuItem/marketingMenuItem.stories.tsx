import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { CSSProperties } from 'react';

import MarketingMenuItem from './MarketingMenuItem';
import { IconExternalLinkSmallOutline } from '@teamleader/ui-icons';
import Menu, { MenuDivider, MenuItem } from '../menu';
import Box, { BoxProps } from '../box';
import Select, { Option, SelectComponentsProps } from '../select';
import { useCallback } from '@storybook/addons';

export default {
  component: MarketingMenuItem,
  title: 'Marketing / MarketingMenuItem',

  parameters: {},
} as ComponentMeta<typeof MarketingMenuItem>;

export const MenuWithMenuUpsell: ComponentStory<typeof MarketingMenuItem> = (args) => (
  <Menu>
    <MenuItem label="Foo label" caption="This is foo's caption" />
    <MenuItem label="Bar label" caption="Caption of bar" />
    <MarketingMenuItem {...args} onClick={() => console.log('onClick: upsell')} />
  </Menu>
);

MenuWithMenuUpsell.args = {
  label: 'Unlock baz',
};

const options = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
];

export const DropdownWithUpsell: ComponentStory<typeof MarketingMenuItem> = (args) => {
  const MenuList = useCallback(
    (props: SelectComponentsProps['MenuList']) => {
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
  const handleChange = (option: Option) => console.log(option);

  return <Select options={options} onChange={handleChange} components={{ MenuList }} />;
};

DropdownWithUpsell.args = {
  label: 'Unlock baz',
  icon: <IconExternalLinkSmallOutline />,
  element: 'a',
  href: 'https://www.teamleader.be',
  target: '_blank',
};
