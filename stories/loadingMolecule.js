import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, LoadingMolecule } from '../components';

storiesOf('Loading molecules', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('color', () => (
    <Box style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" />
    </Box>
  ))
  .add('grayscale', () => (
    <Box style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#BABABA" stopColor="#DADADA" />
    </Box>
  ))
  .add('small', () => (
    <Box style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type="small" />
    </Box>
  ))
  .add('large', () => (
    <Box style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type="large" />
    </Box>
  ));
