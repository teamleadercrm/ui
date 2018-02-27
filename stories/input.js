import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { Button, Icon, Input, Label, TextSmall, Tooltip } from '../components';
import { IconCalendarMediumOutline, IconCalendarSmallOutline, IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import Checkbox from "../components/checkbox/Checkbox";

const iconPlacement = ['left', 'right'];
const colors = ['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet'];
const sizes = ['small', 'medium', 'large'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

const props = {
  helpText: 'This is the fields help text',
  placeholder: 'Placeholder',
  meta: { error: 'This is an error message' },
};

const TooltippedIcon = Tooltip(Icon);

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
        min={number('Minimum', 0)}
        max={number('Maximum', 10)}
        step={number('Step', 1)}
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
      connectedRight={<TooltippedIcon
        color={select('Icon color', colors, 'teal')}
        tint={select('Icon tint', tints, 'dark')}
        tooltip={<TextSmall>This is the label tooltip text</TextSmall>}
        tooltipSize="small"
        >
          <IconInfoBadgedSmallFilled />
        </TooltippedIcon>}
      for="input1"
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
  .add('with connected elements', () => (
    <Label
      for="input1"
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      Input label
      <Input
        id="input1"
        bold={boolean('Bold', false)}
        connectedLeft={<Button size={select('Size', sizes, 'medium')} label="€" />}
        connectedRight={<Button size={select('Size', sizes, 'medium')}><Checkbox size="small">Discount</Checkbox></Button>}
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
