import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../components';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];
const levels = ['primary', 'secondary', 'outline', 'destructive', 'link'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Buttons', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button
      active={boolean('Active', false)}
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with icon', () => (
    <Button
      active={boolean('Active', false)}
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with text and icon', () => (
    <Button
      active={boolean('Active', false)}
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      iconPlacement={select('Icon placement', iconPositions, 'left')}
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with custom element', () => (
    <Button
      active={boolean('Active', false)}
      element={select('Element', elements, 'a')}
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    />
  ));
