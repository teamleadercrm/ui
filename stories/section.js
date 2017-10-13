import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Section } from '../components';
import { baseStyles } from '../.storybook/styles';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];

storiesOf('Section', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles(baseStyles))
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
