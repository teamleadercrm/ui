import React, { useState } from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import Button from '../button';
import ButtonGroup from './ButtonGroup';

export default {
  component: ButtonGroup,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Button group'),
};

export const Normal = (args) => (
  <ButtonGroup {...args}>
    <Button label="Button 1" />
    <Button label="Button 2" />
    <Button icon={<IconAddMediumOutline />} />
  </ButtonGroup>
);

export const withActive = () => {
  const [value, setValue] = useState('option2');

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <ButtonGroup segmented value={value} onChange={handleChange} level="secondary">
      <Button label="Option 1" value="option1" />
      <Button label="Option 2" value="option2" />
      <Button label="Option 3" value="option3" />
    </ButtonGroup>
  );
};

withActive.story = {
  name: 'With active',
};
