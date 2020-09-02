import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import Link from './Link';

export default {
  component: Link,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Link'),
};

export const DefaultStory = (args) => (
  <Link {...args} icon={<IconAddSmallOutline />}>
    I am a link with an icon
  </Link>
);

DefaultStory.args = {
  href: 'https://www.teamleader.be',
  inherit: false,
  target: '_blank',
};
