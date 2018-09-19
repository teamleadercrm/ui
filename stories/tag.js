import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Tag, TextBody, Tooltip } from '../components';

const sizes = ['small', 'medium', 'large'];
const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'];

const TooltippedTag = Tooltip(Tag);

storiesOf('Tags', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Tag
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      inverse={boolean('Inverse', false)}
      disabled={boolean('Disabled', false)}
    >
      I am a tag
    </Tag>
  ))
  .add('Clickable', () => (
    <Tag
      color={select('Color', colors, 'neutral')}
      inverse={boolean('Inverse', false)}
      onLabelClick={() => console.log('Tag label clicked')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    >
      I am a clickable tag
    </Tag>
  ))
  .add('Closable', () => (
    <Tag
      color={select('Color', colors, 'neutral')}
      inverse={boolean('Inverse', false)}
      onRemoveClick={() => console.log('Tag removed')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    >
      I am a closable tag
    </Tag>
  ))
  .add('Clickable & closable', () => (
    <Tag
      color={select('Color', colors, 'neutral')}
      inverse={boolean('Inverse', false)}
      onLabelClick={() => console.log('Tag label clicked')}
      onRemoveClick={() => console.log('Tag removed')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    >
      I am a clickable & closable tag
    </Tag>
  ))
  .add('With tooltip', () => (
    <TooltippedTag
      color={select('Color', colors, 'neutral')}
      inverse={boolean('Inverse', false)}
      tooltip={<TextBody>I am the tooltip</TextBody>}
      disabled={boolean('Disabled', false)}
    >
      Tag with tooltip
    </TooltippedTag>
  ));
