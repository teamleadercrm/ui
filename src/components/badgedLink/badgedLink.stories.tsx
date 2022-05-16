import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import BadgedLink from './BadgedLink';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: BadgedLink,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'BadgedLink'),
} as ComponentMeta<typeof BadgedLink>;

export const DefaultStory: ComponentStory<typeof BadgedLink> = (args) => (
  <BadgedLink {...args} icon={<IconAddSmallOutline />}>
    I am a badged link
  </BadgedLink>
);

DefaultStory.args = {
  href: 'https://www.teamleader.be',
  inherit: false,
  target: '_blank',
};
