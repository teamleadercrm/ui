import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Tag, TextBody, Tooltip } from '../components';

const sizes = ['small', 'medium', 'large'];

const TooltippedTag = Tooltip(Tag);

storiesOf('Tags', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Tag size={select('Size', sizes, 'medium')} inverse={boolean('Inverse', false)}>
      I am a tag
    </Tag>
  ))
  .add('Clickable', () => (
    <Tag
      inverse={boolean('Inverse', false)}
      onLabelClick={() => console.log('Tag label clicked')}
      size={select('Size', sizes, 'medium')}
    >
      I am a clickable tag
    </Tag>
  ))
  .add('Closable', () => (
    <Tag
      inverse={boolean('Inverse', false)}
      onRemoveClick={() => console.log('Tag removed')}
      size={select('Size', sizes, 'medium')}
    >
      I am a closable tag
    </Tag>
  ))
  .add('Clickable & closable', () => (
    <Tag
      inverse={boolean('Inverse', false)}
      onLabelClick={() => console.log('Tag label clicked')}
      onRemoveClick={() => console.log('Tag removed')}
      size={select('Size', sizes, 'medium')}
    >
      I am a clickable & closable tag
    </Tag>
  ))
  .add('With tooltip', () => (
    <TooltippedTag inverse={boolean('Inverse', false)} tooltip={<TextBody>I am the tooltip</TextBody>}>
      Tag with tooltip
    </TooltippedTag>
  ));
