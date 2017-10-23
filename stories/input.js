import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { Input, Label } from '../components';
import { IconCalendarMediumOutline } from '@teamleader/ui-icons';

const props = {
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  placeholder: 'Teamleader UI',
};

storiesOf('Inputs', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('types', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Text input
        <Input id="input1" {...props} />
      </Label>
      <Label for="input2">
        Password input
        <Input id="input2" type="password" {...props} />
      </Label>
      <Label for="input3">
        Number input
        <Input id="input3" type="number" {...props} meta={{ error: 'This is an error' }} />
      </Label>
    </div>
  ))
  .add('sizes', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input id="input1" size="small" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input id="input2" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input id="input3" size="large" {...props} />
      </Label>
    </div>
  ))
  .add('icons', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Icon left
        <Input id="input1" icon={IconCalendarMediumOutline} {...props} />
      </Label>
      <Label for="input2">
        Icon right
        <Input id="input2" icon={IconCalendarMediumOutline} iconPlacement="right" {...props} />
      </Label>
    </div>
  ))
  .add('counter', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Counter
        <Input id="input1" counter={99} {...props} />
      </Label>
    </div>
  ))
  .add('disabled', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Disabled
        <Input id="input1" disabled value="Disabled" {...props} />
      </Label>
    </div>
  ))
  .add('read only', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Read only
        <Input id="input1" readOnly value="Read only" {...props} />
      </Label>
    </div>
  ))
  .add('bold', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Normal text
        <Input id="input1" {...props} />
      </Label>
      <Label for="input2">
        Bold text
        <Input id="input2" bold {...props} />
      </Label>
    </div>
  ));
