import React from 'react';

import { EmptyState } from '../..';

export default {
  component: EmptyState,
  title: 'EmptyState',
};

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <EmptyState
        key={size}
        size={size}
        title="This is the title"
        metaText="I am the meta information and I basically explain that you can start adding content via the add button above."
      />
    ))}
  </div>
);
