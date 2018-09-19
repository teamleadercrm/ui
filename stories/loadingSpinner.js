import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { LoadingSpinner } from '../components';

const colors = ['teal', 'white'];
const sizes = ['small', 'medium'];

storiesOf('Loading spinners', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <LoadingSpinner color={select('Color', colors, 'teal')} size={select('Size', sizes, 'medium')} />
  ));
