import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs/react';
import { Counter, Tooltip, TextBody } from '../src';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedCounter = Tooltip(Counter);

storiesOf('Counters', module)
  .add('Basic', () => (
    <Counter
      count={number('Count', 99)}
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      maxCount={number('Maximum count', 100)}
    />
  ))
  .add('With tooltip', () => (
    <TooltippedCounter
      count={number('Count', 99)}
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      maxCount={number('Maximum count', 100)}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    >
      tasks
    </TooltippedCounter>
  ));
