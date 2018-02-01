import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { Input, Label } from '../components';
import { IconCalendarMediumOutline, IconCalendarSmallOutline } from '@teamleader/ui-icons';

const props = {
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  placeholder: 'Placeholder',
};

storiesOf('Inputs', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('text', () => (
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
  .add('password', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input type="password" id="input1" size="small" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input type="password" id="input2" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input type="password" id="input3" size="large" {...props} />
      </Label>
    </div>
  ))
  .add('number', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input type="number" id="input1" size="small" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input type="number" id="input2" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input type="number" id="input3" size="large" {...props} />
      </Label>
    </div>
  ))
  .add('icons', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input icon={IconCalendarSmallOutline} id="input1" size="small" {...props} />
      </Label>
      <Label for="input2">
        Small input
        <Input icon={IconCalendarSmallOutline} iconPlacement="right" id="input2" size="small" {...props} />
      </Label>
      <Label for="input3">
        Medium input
        <Input icon={IconCalendarSmallOutline} id="input3" {...props} />
      </Label>
      <Label for="input4">
        Medium input
        <Input icon={IconCalendarSmallOutline} iconPlacement="right" id="input4" {...props} />
      </Label>
      <Label for="input5">
        Large input
        <Input icon={IconCalendarMediumOutline} id="input5" size="large" {...props} />
      </Label>
      <Label for="input6">
        Large input
        <Input icon={IconCalendarMediumOutline} iconPlacement="right" id="input6" size="large" {...props} />
      </Label>
    </div>
  ))
  .add('counter', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input id="input1" size="small" counter={1} {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input id="input2" counter={9} {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input id="input3" size="large" counter={99} {...props} />
      </Label>
    </div>
  ))
  .add('disabled', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input disabled id="input1" size="small" value="Disabled input" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input disabled id="input2" value="Disabled input" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input disabled id="input3" size="large" value="Disabled input" {...props} />
      </Label>
    </div>
  ))
  .add('read only', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input readOnly id="input1" size="small" value="Read only input" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input readOnly id="input2" value="Read only input" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input readOnly id="input3" size="large" value="Read only input" {...props} />
      </Label>
    </div>
  ))
  .add('bold', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input bold id="input1" size="small" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input bold id="input2" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input bold id="input3" size="large" {...props} />
      </Label>
    </div>
  ))
  .add('errors', () => (
    <div style={{ width: '400px' }}>
      <Label for="input1">
        Small input
        <Input id="input1" size="small" meta={{ error: 'This is an error message' }} value="wrong value" {...props} />
      </Label>
      <Label for="input2">
        Medium input
        <Input id="input2" meta={{ error: 'This is an error message' }} value="wrong value" {...props} />
      </Label>
      <Label for="input3">
        Large input
        <Input id="input3" size="large" meta={{ error: 'This is an error message' }} value="wrong value" {...props} />
      </Label>
    </div>
  ));
