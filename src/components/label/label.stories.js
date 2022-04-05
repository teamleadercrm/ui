import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Input, Label } from '../../index';

export default {
  component: Label,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Label'),
};

export const DefaultStory = (args) => (
  <Label {...args} htmlFor="input1">
    Input label
    <Input id="input1" placeholder="I am the placeholder" />
  </Label>
);

DefaultStory.args = {
  tooltip: 'This is the label tooltip text',
};
DefaultStory.storyName = 'Label + Input';

export const SoloLabelStory = (args) => <Label {...args}>Label</Label>;
