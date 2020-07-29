import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { Section, TextBody } from '../../index';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

export default {
  component: Section,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Section'),

  parameters: {
    info: {
      propTablesExclude: [TextBody],
    },
  },
};

export const basic = () => (
  <Section
    color={select('Color', colors, 'white')}
    dark={boolean('Dark', false)}
    size={select('Size', sizes, 'medium')}
  >
    <TextBody>I am a section</TextBody>
  </Section>
);
