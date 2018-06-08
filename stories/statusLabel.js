import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { StatusLabel } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Labels', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <StatusLabel color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
      label
    </StatusLabel>
  ));
