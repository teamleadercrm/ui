import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { LoadingMolecule } from '../components';

const sizes = ['small', 'large'];

storiesOf('Loading molecules', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Color', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type={select('Type', sizes, 'large')} />
    </div>
  ))
  .add('Grayscale', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#BABABA" stopColor="#DADADA" type={select('Type', sizes, 'large')} />
    </div>
  ));
