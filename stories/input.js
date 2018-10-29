import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';
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
  TextArea,
  TextBody,
  TextSmall,
  Tooltip,
  SingleLineInputBase,
} from '../components';
import { IconCalendarSmallOutline, IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';

const colors = ['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet'];
const sizes = ['small', 'medium', 'large'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

const prefix = [
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  <TextBody color="neutral">€</TextBody>,
];

const suffix = [<TextSmall color="neutral">incl. BTW</TextSmall>, <Counter count={99} />, <LoadingSpinner />];

const props = {
  helpText: 'This is the fields help text',
  error: 'I am an error',
  placeholder: 'Placeholder',
  onChange: (event, value) => console.log('Changing to ', value),
};

const TooltippedIcon = Tooltip(Icon);

storiesOf('Inputs', module)
  .add('Input base', () => <InputBase />)
  .add('Single line input base', () => <SingleLineInputBase />)
  .add('Text area', () => <TextArea {...props} />)
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
