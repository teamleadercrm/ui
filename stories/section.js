import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Section } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];

storiesOf('Section', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(
    styles({
      fontFamily: 'ProximaNova-Semibold, trebuchet ms, Verdana, Arial, sans-serif',
    }),
  )
  .add('colors', () => (
    <div>
      {colors.map((color, key) => (
        <Section color={color} key={key}>
          I am a {color} island
        </Section>
      ))}
      <Section dark>I am a dark white island</Section>
      <Section color="neutral" dark>
        I am a dark neutral island
      </Section>
    </div>
  ));
