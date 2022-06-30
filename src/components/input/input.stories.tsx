import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Input from './Input';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import Button from '../button';
import Checkbox from '../checkbox';
import Icon from '../icon';
import { TextBody, TextSmall } from '../typography';
import Counter from '../counter';
import LoadingSpinner from '../loadingSpinner';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import NumericInput from './NumericInput';
import TimeInput from './TimeInput';
import DurationInput from './DurationInput';
import Textarea from './Textarea';

const placeholder = 'I am the placeholder';

const prefix = [
  /* eslint-disable-next-line react/jsx-key */
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  /* eslint-disable-next-line react/jsx-key */
  <TextBody color="neutral">€</TextBody>,
];
/* eslint-disable-next-line react/jsx-key */
const suffix = [
  <TextSmall color="neutral">incl. BTW</TextSmall>,
  <Counter count={99} maxCount={100} size={'medium'} />,
  <LoadingSpinner />,
];

const connectedLeft = <Button size="medium" label="€" />;
const connectedRight = (
  <Button size="medium">
    <Checkbox size="small">Discount</Checkbox>
  </Button>
);

const stepperOptions = ['none', 'connected', 'suffix'];
const sizes = ['small', 'medium', 'large'];
const types = [
  'text',
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'time',
  'url',
  'week',
];

export default {
  component: Input,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Input'),
} as ComponentMeta<typeof Input>;

export const input: ComponentStory<typeof Input> = (args) => <Input {...args} />;

input.storyName = 'Input';
input.args = {
  bold: boolean('Bold', false),
  disabled: boolean('Disabled', false),
  error: text('Error', ''),
  helpText: text('Help text', ''),
  success: text('Success', ''),
  warning: text('Warning', ''),
  inverse: boolean('Inverse', false),
  placeholder: text('Placeholder', placeholder),
  readOnly: boolean('Read only', false),
  size: select('Size', ['tiny', ...sizes], 'medium'),
  type: select('Type', types, 'text'),
  textAlignRight: boolean('Text align right', false),
  width: text('Width', ''),
};

export const inputConnected: ComponentStory<typeof Input> = (args) => <Input {...args} />;

inputConnected.storyName = 'Input with connected';
inputConnected.args = {
  ...input.args,
  connectedLeft,
  connectedRight,
};

export const inputPrefixSuffix: ComponentStory<typeof Input> = (args) => <Input {...args} />;

inputPrefixSuffix.storyName = 'Input with prefix and suffix';
inputPrefixSuffix.args = {
  ...input.args,
  prefix,
  suffix,
};

export const numericInput: ComponentStory<typeof NumericInput> = (args) => {
  const [value, setValue] = useState<string | number>(6);

  const handleChange = (event: ChangeEvent<HTMLElement>, value: string) => {
    setValue(value);
  };

  return <NumericInput value={value} onChange={handleChange} {...args} />;
};

numericInput.storyName = 'NumericInput';
numericInput.args = {
  bold: boolean('Bold', false),
  disabled: boolean('Disabled', false),
  error: text('Error', ''),
  helpText: text('Help text', ''),
  success: text('Success', ''),
  warning: text('Warning', ''),
  inverse: boolean('Inverse', false),
  max: number('Max', 10),
  min: number('Min', 0),
  placeholder: text('Placeholder', placeholder),
  readOnly: boolean('Read only', false),
  size: select('Size', sizes, 'medium') as 'small' | 'medium' | 'large',
  stepper: select('Stepper', stepperOptions, 'suffix') as 'none' | 'suffix' | 'connected',
  step: number('Step', 1),
  textAlignRight: false,
  width: text('Width', ''),
};

export const timeInput: ComponentStory<typeof TimeInput> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return <TimeInput value={value} onChange={handleChange} {...args} />;
};

timeInput.storyName = 'TimeInput';
timeInput.args = {
  bold: boolean('Bold', false),
  disabled: boolean('Disabled', false),
  error: text('Error', ''),
  helpText: text('Help text', ''),
  success: text('Success', ''),
  warning: text('Warning', ''),
  inverse: boolean('Inverse', false),
  placeholder: text('Placeholder', 'hh:mm'),
  readOnly: boolean('Read only', false),
  size: select('Size', sizes, 'medium') as 'small' | 'medium' | 'large',
  textAlignRight: boolean('Text align right', false),
  width: text('Width', '90px'),
};

export const durationInput: ComponentStory<typeof DurationInput> = (args) => {
  const [value, setValue] = useState<{ hours?: number | undefined; minutes?: number | undefined } | undefined>();

  const handleChange = (value?: { hours?: number; minutes?: number }) => {
    setValue(value);
  };

  return <DurationInput value={value} onChange={handleChange} {...args} />;
};

durationInput.storyName = 'DurationInput';

export const textarea: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

textarea.storyName = 'Textarea';
textarea.args = {
  bold: boolean('Bold', false),
  disabled: boolean('Disabled', false),
  error: text('Error', ''),
  helpText: text('Help text', ''),
  success: text('Success', ''),
  warning: text('Warning', ''),
  inverse: boolean('Inverse', false),
  placeholder: text('Placeholder', placeholder),
  readOnly: boolean('Read only', false),
  size: select('Size', sizes, 'medium') as 'small' | 'medium' | 'large',
  textAlignRight: boolean('Text align right', false),
  value: text('Value', ''),
};
