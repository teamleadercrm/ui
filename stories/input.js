import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import {
  InputBase,
  Button,
  Checkbox,
  Counter,
  Icon,
  Input,
  Label,
  LoadingSpinner,
  NumericInput,
  TextBody,
  TextSmall,
  Tooltip,
  SingleLineInputBase,
} from '../components';
import { IconCalendarSmallOutline, IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';

const colors = ['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet'];
const elements = [null, 'input', 'textarea'];
const sizes = [null, 'small', 'medium', 'large'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const types = [
  null,
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

const prefix = [
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  <TextBody color="neutral">€</TextBody>,
];

const suffix = [<TextSmall color="neutral">incl. BTW</TextSmall>, <Counter count={99} />, <LoadingSpinner />];

const connectedLeft = <Button label="€" />;
const connectedRight = (
  <Button>
    <Checkbox size="small">Discount</Checkbox>
  </Button>
);

const props = {
  helpText: 'This is the fields help text',
  placeholder: 'Placeholder',
  onChange: (event, value) => console.log('Changing to ', value),
};

const TooltippedIcon = Tooltip(Icon);

storiesOf('Inputs', module)
  .add('Input base', () => (
    <InputBase
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
      element={select('element', elements) || undefined}
      inverse={boolean('inverse', false)}
      readOnly={boolean('readOnly', false)}
      size={select('size', sizes) || undefined}
      type={select('type', types) || undefined}
      value={text('value', undefined)}
    />
  ))
  .add('Single line input base', () => {
    const hasPrefix = boolean('render a prefix', false);
    const hasSuffix = boolean('render a suffix', false);
    const hasConnectedLeft = boolean('render a connectedLeft', false);
    const hasConnectedRight = boolean('render a connectedRight', false);

    return (
      <SingleLineInputBase
        bold={boolean('bold', false)}
        disabled={boolean('disabled', false)}
        element={select('element', elements) || undefined}
        error={text('error', undefined)}
        helpText={text('helpText', undefined)}
        inverse={boolean('inverse', false)}
        readOnly={boolean('readOnly', false)}
        size={select('size', sizes) || undefined}
        type={select('type', types) || undefined}
        value={text('value', undefined)}
        prefix={hasPrefix ? prefix : undefined}
        suffix={hasSuffix ? suffix : undefined}
        connectedLeft={hasConnectedLeft ? connectedLeft : undefined}
        connectedRight={hasConnectedRight ? connectedRight : undefined}
      />
    );
  })
  .add('Input only', () => (
    <Input
      id="input1"
      bold={boolean('Bold', false)}
      disabled={boolean('Disabled', false)}
      readOnly={boolean('Read only', false)}
      {...props}
    />
  ))
  .add('text', () => (
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
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
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
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
  .add('Numeric', () => (
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
      Input label
      <NumericInput
        id="input1"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        min={number('Minimum', 0)}
        max={number('Maximum', 10)}
        spinner={boolean('Render spinner', true)}
        step={number('Step', 1)}
        {...props}
      />
    </Label>
  ))
  .add('with error', () => (
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
      Input label
      <Input
        error="This is an error message"
        id="input1"
        size="small"
        value="wrong value"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ))
  .add('with label tooltip', () => (
    <Label
      connectedRight={
        <TooltippedIcon
          color={select('Icon color', colors, 'teal')}
          tint={select('Icon tint', tints, 'dark')}
          tooltip={<TextSmall>This is the label tooltip text</TextSmall>}
          tooltipSize="small"
        >
          <IconInfoBadgedSmallFilled />
        </TooltippedIcon>
      }
      htmlFor="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        size="small"
        value="wrong value"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ))
  .add('with prefix or suffix', () => (
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
      Input label
      <Input
        id="input1"
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Read only', false)}
        prefix={prefix}
        suffix={suffix}
        {...props}
      />
    </Label>
  ))
  .add('with connected elements', () => (
    <Label htmlFor="input1" inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
      Input label
      <Input
        id="input1"
        bold={boolean('Bold', false)}
        connectedLeft={<Button size={select('Size', sizes, 'medium')} label="€" />}
        connectedRight={
          <Button size={select('Size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        }
        disabled={boolean('Disabled', false)}
        type="number"
        min={number('Minimum', 0)}
        max={number('Maximum', 10)}
        step={number('Step', 1)}
        readOnly={boolean('Read only', false)}
        {...props}
      />
    </Label>
  ));
