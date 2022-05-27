import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Section, TextBody } from '../../index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Section,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Section'),
} as ComponentMeta<typeof Section>;

export const Basic: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <TextBody>I am a section</TextBody>
  </Section>
);
