import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import EmptyState from './EmptyState';
import { Marker } from '../typography';

const sizes = ['small', 'medium', 'large'];
const title = (
  <>
    I am the empty state title that <Marker>highlights</Marker> a keyword
  </>
);

export default {
  component: EmptyState,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'EmptyState'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1898%3A0',
    },
  },
};

export const basic = () => <EmptyState metaText="I am the meta information of the EmptyState" />;

export const withTitle = () => (
  <EmptyState
    hidePointer={boolean('Hide pointer', false)}
    metaText="I am the meta information and I basically explain that you can start adding content via the add button above."
    size={select('Size', sizes, 'medium')}
    title={title}
  />
);
