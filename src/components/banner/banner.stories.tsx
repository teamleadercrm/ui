import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Banner, TextDisplay } from '../../index';

export default {
  component: Banner,
  title: 'Low level blocks / Banner',
} as ComponentMeta<typeof Banner>;

export const DefaultStory: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} icon={<IconIdeaMediumOutline />}>
    <TextDisplay>
      I am a banner and contain text that appears across multiple lines depending on how wide I am.
    </TextDisplay>
  </Banner>
);

export const ClosableBanner: ComponentStory<typeof Banner> = () => (
  <Banner onClose={() => {}}>
    <TextDisplay>I am a banner that can be closed.</TextDisplay>
  </Banner>
);
