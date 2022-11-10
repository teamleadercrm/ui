import React from 'react';

import AdvancedCollapsible, {
  AllowedAdvancedCollapsibleColor,
  AllowedAdvancedCollapsibleSize,
} from './AdvancedCollapsible';

export default {
  component: AdvancedCollapsible,
  title: 'AdvancedCollapsible',
};

const sizeList: AllowedAdvancedCollapsibleSize[] = ['small', 'medium', 'large'];
const colorList: AllowedAdvancedCollapsibleColor[] = ['neutral', 'teal'];
export const Main = () => (
  <div>
    {sizeList.map((size) =>
      colorList.map((color) => (
        <div key={size + color} style={{ marginBottom: '12px' }}>
          <AdvancedCollapsible size={size} color={color} title={`Title - ${size} - ${color}`}>
            This is the content - {size} - ${color}
          </AdvancedCollapsible>
        </div>
      )),
    )}
  </div>
);
