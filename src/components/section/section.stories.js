import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Section, TextBody } from '../../index';

export default {
  component: Section,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Section'),
};

export const Basic = (args) => (
  <Section {...args}>
    <TextBody>I am a section</TextBody>
  </Section>
);
