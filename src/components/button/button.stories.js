import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import Button from './Button';

export default {
  component: Button,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Button'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A2',
    },
  },
};

export const withTextAndIcon = ({ size, ...args }) => (
  <Button
    {...args}
    size={size}
    icon={size === 'tiny' || size === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
  />
);

withTextAndIcon.args = {
  label: 'Button with icon and text',
};

withTextAndIcon.story = {
  name: 'With text and icon',
};

export const WithText = () => <Button label="Button with text" />;

WithText.story = {
  name: 'With text',
};

export const withIcon = () => <Button icon={<IconAddMediumOutline />} />;

withIcon.story = {
  name: 'With icon',
};

export const withCustomElement = () => <Button element="a" label="Button with custom element" />;

withCustomElement.story = {
  name: 'With custom element',
};
