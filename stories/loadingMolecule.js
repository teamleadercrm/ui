import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { LoadingMolecule } from '../components';
import styles from '@sambego/storybook-styles';
import { baseStyles } from '../.storybook/styles';

storiesOf('Loading molecules', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles(baseStyles))
  .add('color', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" />
    </div>
  ))
  .add('grayscale', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#BABABA" stopColor="#DADADA" />
    </div>
  ))
  .add('small', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type="small" />
    </div>
  ))
  .add('large', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type="large" />
    </div>
  ));
