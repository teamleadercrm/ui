import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Section, TextBody } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Section', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Section
      color={select('Color', colors, 'white')}
      dark={boolean('Dark', false)}
      size={select('Size', sizes, 'medium')}
    >
      <TextBody>I am a section</TextBody>
    </Section>
  ));
