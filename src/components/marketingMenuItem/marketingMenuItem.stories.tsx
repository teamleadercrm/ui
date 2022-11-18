import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';

import MarketingMenuItem from './MarketingMenuItem';
import { IconExternalLinkSmallOutline } from '@teamleader/ui-icons';
import Menu, { MenuItem } from '../menu';

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
