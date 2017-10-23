import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import Input from '../components/input';
import { IconCalendarMediumOutline } from '@teamleader/ui-icons';

const props = {
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  value: 'Lorem ipsum',
  placeholder: 'placeholder',
};

storiesOf('Inputs', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('sizes', () => (
    <div style={{ width: '400px' }}>
      <Input size="small" />

      <Input />

      <Input size="large" />
    </div>
  ));
