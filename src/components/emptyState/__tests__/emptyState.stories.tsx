import React from 'react';

import { EmptyState } from '../../..';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: EmptyState,
  title: 'EmptyState',
} as ComponentMeta<typeof EmptyState>;

export const Main: ComponentStory<typeof EmptyState> = () => (
  <div>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <EmptyState
        key={size}
        size={size}
        title="This is the title"
        metaText="I am the meta information and I basically explain that you can start adding content via the add button above."
      />
    ))}
  </div>
);
