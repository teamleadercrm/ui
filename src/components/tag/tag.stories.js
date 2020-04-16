import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Tag, TextBody, Tooltip } from '../../index';

const sizes = ['small', 'medium', 'large'];

const TooltippedTag = Tooltip(Tag);

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Tag'),
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
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
  >
    I am a clickable tag
  </Tag>
);

export const closable = () => (
  <Tag
    onRemoveClick={() => console.log('Tag removed')}
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
  <TooltippedTag tooltip={<TextBody>I am the tooltip</TextBody>} disabled={boolean('Disabled', false)}>
    Tag with tooltip
  </TooltippedTag>
);

withTooltip.story = {
  name: 'With tooltip',
};
