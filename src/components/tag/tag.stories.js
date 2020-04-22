import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Tag, TextBody, Tooltip } from '../../index';

const sizes = ['small', 'medium', 'large'];

const TooltippedTag = Tooltip(Tag);

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Tag'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A1784',
    },
  },
};

export const basic = () => (
  <Tag size={select('Size', sizes, 'medium')} disabled={boolean('Disabled', false)}>
    I am a tag
  </Tag>
);

export const clickable = () => (
  <Tag
    element="button"
    onClick={() => console.log('Tag label clicked')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
  >
    I am a clickable tag
  </Tag>
);

export const closable = () => (
  <Tag
    onRemoveClick={() => console.log('Tag removed')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
  >
    I am a closable tag
  </Tag>
);

export const clickableClosable = () => (
  <Tag
    element="button"
    onClick={() => console.log('Tag label clicked')}
    onRemoveClick={() => console.log('Tag removed')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
  >
    I am a clickable & closable tag
  </Tag>
);

clickableClosable.story = {
  name: 'Clickable & closable',
};

export const withTooltip = () => (
  <TooltippedTag
    tooltip={<TextBody>I am the tooltip</TextBody>}
    disabled={boolean('Disabled', false)}
    selected={boolean('Selected', false)}
  >
    Tag with tooltip
  </TooltippedTag>
);

withTooltip.story = {
  name: 'With tooltip',
};
