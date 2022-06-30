import React, { useState } from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import {
  InputBase,
  Button,
  Checkbox,
  Counter,
  Icon,
  Input,
  LoadingSpinner,
  NumericInput,
  Textarea,
  TextBody,
  TextSmall,
  TimeInput,
  DurationInput,
} from '../../index';

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
const placeholder = 'I am the placeholder';
const prefix = [
  /* eslint-disable-next-line react/jsx-key */
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  /* eslint-disable-next-line react/jsx-key */
  <TextBody color="neutral">€</TextBody>,
];
const stepperOptions = ['none', 'connected', 'suffix'];
/* eslint-disable-next-line react/jsx-key */
const suffix = [<TextSmall color="neutral">incl. BTW</TextSmall>, <Counter count={99} />, <LoadingSpinner />];

export default {
  component: Input,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Input'),

  parameters: {
    info: {
      propTables: [InputBase],
    },
  },
};

export const input = () => (
  <Input
    bold={boolean('Bold', false)}
    disabled={boolean('Disabled', false)}
    error={text('Error', '')}
    helpText={text('Help text', '')}
    success={text('Success', '')}
    warning={text('Warning', '')}
    id="input1"
    inverse={boolean('Inverse', false)}
    placeholder={text('Placeholder', placeholder)}
    readOnly={boolean('Read only', false)}
    size={select('Size', ['tiny', ...sizes], 'medium')}
    type={select('Type', types, 'text')}
    connectedLeft={
      boolean('Toggle connected left', false) ? <Button size={select('Size', sizes, 'medium')} label="€" /> : undefined
    }
    connectedRight={
      boolean('Toggle connected right', false) ? (
        <Button size={select('Size', sizes, 'medium')}>
          <Checkbox size="small">Discount</Checkbox>
        </Button>
      ) : undefined
    }
    prefix={boolean('Toggle prefix', false) ? prefix : undefined}
    suffix={boolean('Toggle suffix', false) ? suffix : undefined}
    textAlignRight={boolean('Text align right', false)}
    width={text('Width', undefined)}
  />
);

export const numericInput = () => {
  const [value, setValue] = useState(6);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <NumericInput
      value={value}
      bold={boolean('Bold', false)}
      disabled={boolean('Disabled', false)}
      error={text('Error', '')}
      helpText={text('Help text', '')}
      success={text('Success', '')}
      warning={text('Warning', '')}
      id="input1"
      inverse={boolean('Inverse', false)}
      max={number('Max', 10)}
      min={number('Min', 0)}
      placeholder={text('Placeholder', placeholder)}
      readOnly={boolean('Read only', false)}
      size={select('Size', sizes, 'medium')}
      stepper={select('Stepper', stepperOptions, 'suffix')}
      step={number('Step', 1)}
      connectedLeft={
        boolean('Toggle connected left', false) ? (
          <Button size={select('Size', sizes, 'medium')} label="€" />
        ) : undefined
      }
      connectedRight={
        boolean('Toggle connected right', false) ? (
          <Button size={select('Size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : undefined
      }
      onChange={handleChange}
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      textAlignRight={boolean('Text align right', false)}
      width={text('Width', undefined)}
    />
  );
};

numericInput.storyName = 'NumericInput';

export const timeInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  return (
    <TimeInput
      value={value}
      bold={boolean('Bold', false)}
      disabled={boolean('Disabled', false)}
      error={text('Error', '')}
      helpText={text('Help text', '')}
      success={text('Success', '')}
      warning={text('Warning', '')}
      id="input1"
      inverse={boolean('Inverse', false)}
      placeholder={text('Placeholder', 'hh:mm')}
      readOnly={boolean('Read only', false)}
      size={select('Size', sizes) || undefined}
      connectedLeft={
        boolean('Toggle connected left', false) ? (
          <Button size={select('Size', sizes, 'medium')} label="€" />
        ) : undefined
      }
      connectedRight={
        boolean('Toggle connected right', false) ? (
          <Button size={select('Size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : undefined
      }
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      textAlignRight={boolean('Text align right', false)}
      width={text('Width', '90px')}
      onChange={handleChange}
    />
  );
};

timeInput.storyName = 'TimeInput';

export const durationInput = () => {
  const [value, setValue] = useState();

  return <DurationInput value={value} onChange={setValue} />;
};

durationInput.storyName = 'DurationInput';

export const textarea = () => (
  <Textarea
    bold={boolean('Bold', false)}
    disabled={boolean('Disabled', false)}
    error={text('Error', '')}
    helpText={text('Help text', '')}
    success={text('Success', '')}
    warning={text('Warning', '')}
    id="input1"
    inverse={boolean('Inverse', false)}
    placeholder={text('Placeholder', placeholder)}
    readOnly={boolean('Read only', false)}
    size={select('Size', sizes) || undefined}
    textAlignRight={boolean('Text align right', false)}
    value={text('Value', undefined)}
  />
);
