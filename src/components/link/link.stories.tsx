import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Link from './Link';

export default {
  component: Link,
  title: 'Low level blocks / Link',
} as ComponentMeta<typeof Link>;

export const DefaultStory: ComponentStory<typeof Link> = (args) => <Link {...args}>I am a link</Link>;

DefaultStory.args = {
  href: 'https://www.teamleader.be',
  inherit: false,
  target: '_blank',
};
