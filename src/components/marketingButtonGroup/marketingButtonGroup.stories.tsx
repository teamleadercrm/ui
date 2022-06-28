import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingButtonGroup from './MarketingButtonGroup';

export default {
  component: MarketingButtonGroup,
  title: addStoryInGroup(MARKETING, 'MarketingButtonGroup'),
} as ComponentMeta<typeof MarketingButtonGroup>;

export const Basic: ComponentStory<typeof MarketingButtonGroup> = () => {
  const [value, setValue] = useState('option2');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <MarketingButtonGroup value={value} onChange={handleChange}>
      <MarketingButtonGroup.Button label="Option 1" value="option1" />
      <MarketingButtonGroup.Button label="Option 2" value="option2" />
      <MarketingButtonGroup.Button label="Option 3" value="option3" />
    </MarketingButtonGroup>
  );
};
