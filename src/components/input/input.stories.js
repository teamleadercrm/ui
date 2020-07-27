import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Store, State } from '@sambego/storybook-state';
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

const timeInputStore = new Store({
  value: '',
});

const numericInputStore = new Store({
  value: 6,
});

const handleTimeInputChange = (event) => {
  timeInputStore.set({ value: event.currentTarget.value });
};

const handleNumericInputChange = (event, value) => {
  numericInputStore.set({ value });
};

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
    size={select('Size', sizes) || undefined}
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
  return (
    <State store={numericInputStore}>
      <NumericInput
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
        size={select('Size', sizes) || undefined}
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
        onChange={handleNumericInputChange}
        prefix={boolean('Toggle prefix', false) ? prefix : undefined}
        suffix={boolean('Toggle suffix', false) ? suffix : undefined}
        textAlignRight={boolean('Text align right', false)}
        width={text('Width', undefined)}
      />
    </State>
  );
};

numericInput.story = {
  name: 'NumericInput',
};

export const timeInput = () => (
  <State store={timeInputStore}>
    <TimeInput
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
      onChange={handleTimeInputChange}
    />
  </State>
);

timeInput.story = {
  name: 'TimeInput',
};

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
