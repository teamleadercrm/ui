import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Section, TextBody } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Section', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody],
    },
  })
  .add('Basic', () => (
    <Section
      color={select('Color', colors, 'white')}
      dark={boolean('Dark', false)}
      size={select('Size', sizes, 'medium')}
    >
      <TextBody>I am a section</TextBody>
    </Section>
  ));
