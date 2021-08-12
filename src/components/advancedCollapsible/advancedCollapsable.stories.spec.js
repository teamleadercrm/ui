import React from 'react';

import AdvancedCollapsible from './AdvancedCollapsible';

export default {
  component: AdvancedCollapsible,
  title: 'AdvancedCollapsible',
};

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) =>
      ['neutral', 'teal'].map((color) => (
        <div key={size + color} style={{ marginBottom: '12px' }}>
          <AdvancedCollapsible size={size} color={color} title={`Title - ${size} - ${color}`}>
            This is the content - {size} - ${color}
          </AdvancedCollapsible>
        </div>
      )),
    )}
  </div>
);
