import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Banner, TextDisplay } from '../../index';

export default {
  component: Banner,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Banner'),
};

export const DefaultStory = (args) => (
  <Banner {...args} icon={<IconIdeaMediumOutline />}>
    <TextDisplay>
      I am a banner and contain text that appears across multiple lines depending on how wide I am.
    </TextDisplay>
  </Banner>
);

export const ClosableBanner = () => (
  <Banner onClose={() => {}}>
    <TextDisplay>I am a banner that can be closed.</TextDisplay>
  </Banner>
);
