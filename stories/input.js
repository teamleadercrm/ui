import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
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
} from '../src';

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
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  <TextBody color="neutral">€</TextBody>,
];
const suffix = [<TextSmall color="neutral">incl. BTW</TextSmall>, <Counter count={99} />, <LoadingSpinner />];

const timeInputStore = new Store({
  value: '',
});

const handleTimeInputChange = event => {
  timeInputStore.set({ value: event.currentTarget.value });
};

storiesOf('Form elements/Input', module)
  .addParameters({
    info: {
      propTables: [InputBase],
    },
  })
  .add('Input', () => (
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
        boolean('Toggle connected left', false) ? (
          <Button size={select('Size', sizes, 'medium')} label="€" />
        ) : (
          undefined
        )
      }
      connectedRight={
        boolean('Toggle connected right', false) ? (
          <Button size={select('Size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : (
          undefined
        )
      }
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      width={text('Width', undefined)}
    />
  ))
  .add('NumericInput', () => (
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
      spinner={boolean('Spinner', true)}
      step={number('Step', 1)}
      connectedLeft={
        boolean('Toggle connected left', false) ? (
          <Button size={select('Size', sizes, 'medium')} label="€" />
        ) : (
          undefined
        )
      }
      connectedRight={
        boolean('Toggle connected right', false) ? (
          <Button size={select('Size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : (
          undefined
        )
      }
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      width={text('Width', undefined)}
    />
  ))
  .add('TimeInput', () => (
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
          ) : (
            undefined
          )
        }
        connectedRight={
          boolean('Toggle connected right', false) ? (
            <Button size={select('Size', sizes, 'medium')}>
              <Checkbox size="small">Discount</Checkbox>
            </Button>
          ) : (
            undefined
          )
        }
        prefix={boolean('Toggle prefix', false) ? prefix : undefined}
        suffix={boolean('Toggle suffix', false) ? suffix : undefined}
        width={text('Width', '90px')}
        onChange={handleTimeInputChange}
      />
    </State>
  ))
  .add('Textarea', () => (
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
      value={text('Value', undefined)}
    />
  ));
