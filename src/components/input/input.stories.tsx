import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Input from './Input';
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
  <TextSmall key="suffix1" color="neutral">
    incl. BTW
  </TextSmall>,
  <Counter key="suffix2" count={99} maxCount={100} size="medium" />,
  <LoadingSpinner key="suffix3" />,
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

const inputArgTypes = {
  size: {
    control: 'select',
    options: ['tiny', ...sizes],
  },
};

export default {
  component: Input,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Input'),
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Input>;

export const InputBasic: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLElement>, value: string) => {
    setValue(value);
  };

  return <Input value={value} onChange={handleChange} {...args} />;
};

InputBasic.storyName = 'Input';
InputBasic.args = {
  bold: false,
  disabled: false,
  error: '',
  helpText: '',
  success: '',
  warning: '',
  inverse: false,
  placeholder,
  readOnly: false,
  size: 'medium',
  type: 'text',
  textAlignRight: false,
  width: '',
};
InputBasic.argTypes = {
  ...inputArgTypes,
  type: {
    control: 'select',
    options: types,
  },
};

export const InputConnected: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLElement>, value: string) => {
    setValue(value);
  };

  return <Input value={value} onChange={handleChange} {...args} />;
};

InputConnected.storyName = 'Input with connected';
InputConnected.args = {
  ...InputBasic.args,
  connectedLeft,
  connectedRight,
};
InputConnected.argTypes = {
  ...inputArgTypes,
  type: {
    control: 'select',
    options: types,
  },
};

export const InputPrefixSuffix: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLElement>, value: string) => {
    setValue(value);
  };

  return <Input value={value} onChange={handleChange} {...args} />;
};

InputPrefixSuffix.storyName = 'Input with prefix and suffix';
InputPrefixSuffix.args = {
  ...InputBasic.args,
  prefix,
  suffix,
};
InputPrefixSuffix.argTypes = {
  ...inputArgTypes,
  type: {
    control: 'select',
    options: types,
  },
};

export const NumericInputBasic: ComponentStory<typeof NumericInput> = (args) => {
  const [value, setValue] = useState<string | number>(6);

  const handleChange = (event: ChangeEvent<HTMLElement>, value: string) => {
    setValue(value);
  };

  return <NumericInput value={value} onChange={handleChange} {...args} />;
};

NumericInputBasic.storyName = 'NumericInput';
NumericInputBasic.args = {
  bold: false,
  disabled: false,
  error: '',
  helpText: '',
  success: '',
  warning: '',
  inverse: false,
  max: 10,
  min: 0,
  placeholder,
  readOnly: false,
  size: 'medium',
  stepper: 'suffix',
  step: 1,
  textAlignRight: false,
  width: '',
};
NumericInputBasic.argTypes = { ...inputArgTypes, stepper: { control: 'select', options: stepperOptions } };

export const TimeInputBasic: ComponentStory<typeof TimeInput> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return <TimeInput value={value} onChange={handleChange} {...args} />;
};

TimeInputBasic.storyName = 'TimeInput';
TimeInputBasic.args = {
  bold: false,
  disabled: false,
  error: '',
  helpText: '',
  success: '',
  warning: '',
  inverse: false,
  placeholder,
  readOnly: false,
  size: 'medium',
  textAlighRight: false,
  width: '90px',
};
TimeInputBasic.argTypes = inputArgTypes;

export const DurationInputBasic: ComponentStory<typeof DurationInput> = (args) => {
  const [value, setValue] = useState<{ hours?: number | undefined; minutes?: number | undefined } | undefined>();

  const handleChange = (value?: { hours?: number; minutes?: number }) => {
    setValue(value);
  };

  return <DurationInput value={value} onChange={handleChange} {...args} />;
};

DurationInputBasic.storyName = 'DurationInput';

export const TextareaBasic: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return <Textarea value={value} onChange={handleChange} {...args} />;
};

TextareaBasic.storyName = 'Textarea';
TextareaBasic.args = {
  bold: false,
  disabled: false,
  error: '',
  helpText: '',
  success: '',
  warning: '',
  inverse: false,
  placeholder,
  readOnly: false,
  size: 'medium',
  textAlignRight: false,
};
TextareaBasic.argTypes = inputArgTypes;
