import React, { useState } from 'react';
import Toggle from './Toggle';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';

export default {
  component: Toggle,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Toggle'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A23548',
    },
  },
};

export const DefaultStory = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event) => {
    setChecked(event.currentTarget.checked);
  };

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

DefaultStory.args = {
  checked: true,
  label: 'I am a label',
};
