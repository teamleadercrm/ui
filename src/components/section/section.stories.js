import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Section, TextBody } from '../../index';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Section',

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
