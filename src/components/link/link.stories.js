import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Link from './Link';

export default {
  component: Link,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Link'),
};

export const DefaultStory = (args) => <Link {...args}>I am a link</Link>;

DefaultStory.args = {
  href: 'https://www.teamleader.be',
  inherit: false,
  target: '_blank',
};
