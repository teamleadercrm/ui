import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Checkbox, Link, TextBody } from '../src';

const sizes = ['small', 'medium', 'large'];

storiesOf('Form elements/Checkbox', module)
  .addParameters({
    info: {
      propTablesExclude: [Link, TextBody],
    },
  })
  .add('Default', () => (
    <Checkbox
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      label={text('Label', 'I am the label')}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With link in label', () => (
    <Checkbox
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      size={select('Size', sizes, 'medium')}
    >
      <TextBody>
        I'm a medium label with a{' '}
        <Link href="#" inherit={false}>
          link
        </Link>{' '}
        inside
      </TextBody>
    </Checkbox>
  ))
  .add('With indeterminate state', () => (
    <Checkbox
      indeterminate={boolean('indeterminate', false)}
      label={text('Label', 'I am the label')}
      size={select('Size', sizes, 'medium')}
    />
  ));
