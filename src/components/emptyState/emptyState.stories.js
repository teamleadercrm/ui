import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import EmptyState from './EmptyState';

const sizes = ['small', 'medium', 'large'];

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'EmptyState'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1898%3A0',
    },
  },
};

export const basic = () => <EmptyState metaText={text('Meta text', 'I am the meta information of the EmptyState')} />;

export const withTitle = () => (
  <EmptyState
    metaText={text(
      'Meta text',
      'I am the meta information and I basically explain that you can start adding content via the add button above.',
    )}
    size={select('Size', sizes, 'medium')}
    title={text('Title', 'I am the empty state title that highlights a keyword')}
  />
);
