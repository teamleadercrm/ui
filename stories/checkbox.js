import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/react';
import { Checkbox, Link, TextBody } from '../components';

const sizes = ['small', 'medium', 'large'];

storiesOf('Checkboxes', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Link, TextBody],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
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
  ));
