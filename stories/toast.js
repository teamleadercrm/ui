import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Toast } from '../components';

storiesOf('Toast', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('Accept', () => (
    <Toast
      action=""
      active
      label="Toast label"
      timeout={3000}
      onClick={action('toast click')}
      onTimeout={action('toast timeout')}
      type="accept"
    />
  ))
  .add('Cancel', () => (
    <Toast
      action=""
      active
      label="Toast label"
      timeout={3000}
      onClick={action('toast click')}
      onTimeout={action('toast timeout')}
      type="cancel"
    />
  ))
  .add('Warning', () => (
    <Toast
      action=""
      active
      label="Toast label"
      timeout={3000}
      onClick={action('toast click')}
      onTimeout={action('toast timeout')}
      type="warning"
    />
  ));
