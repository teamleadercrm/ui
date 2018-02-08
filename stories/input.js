import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from "@storybook/addon-knobs/react";
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { Input, Label } from '../components';
import { IconCalendarMediumOutline, IconCalendarSmallOutline } from '@teamleader/ui-icons';

const iconPlacement = ['left', 'right'];
const sizes = ['small', 'medium', 'large'];

const props = {
  helpText: 'This is the fields help text',
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  placeholder: 'Placeholder',
};

storiesOf('Inputs', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('input only', () => (
    <Input
      id="input1"
      bold={boolean('Bold', false)}
      disabled={boolean('Disabled', false)}
      readOnly={boolean('Read only', false)}
      {...props}
    />
  )).add('text', () => (
  <Label
    for="input1"
    inverse={boolean('Inverse', false)}
    size={select('Size', sizes, 'medium')}
  >
    Input label
    <Input
      id="input1"
      bold={boolean('Bold', false)}
      disabled={boolean('Disabled', false)}
      readOnly={boolean('Read only', false)}
      {...props}
    />
  </Label>
))
  .add('password', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        type="password"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ))
  .add('number', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        type="number"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        meta={{ error: 'This is an error message' }}
        {...props}
      />
    </Label>
  ))
  .add('with icon', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        icon={select('Size', sizes, 'medium') === 'large' ? IconCalendarMediumOutline : IconCalendarSmallOutline}
        iconPlacement={select('Icon placement', iconPlacement, 'left')}
        id="input1"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props} />
    </Label>
  ))
  .add('with counter', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        size="small"
        counter={99}
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ))
  .add('with error', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        size="small"
        meta={{ error: 'This is an error message' }}
        value="wrong value"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ));
