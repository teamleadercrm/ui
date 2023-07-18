import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import Button from './Button';

export default {
  component: Button,
  title: 'Low level blocks / Button',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A2',
    },
  },
} as ComponentMeta<typeof Button>;

export const withTextAndIcon: ComponentStory<typeof Button> = ({ size, ...args }) => (
  <Button
    {...args}
    size={size}
    icon={size === 'tiny' || size === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
  />
);

withTextAndIcon.args = {
  label: 'Button with icon and text',
};

withTextAndIcon.storyName = 'With text and icon';

export const WithText: ComponentStory<typeof Button> = () => <Button label="Button with text" />;

WithText.storyName = 'With text';

export const withIcon: ComponentStory<typeof Button> = () => <Button icon={<IconAddMediumOutline />} />;

withIcon.storyName = 'With icon';

export const withCustomElement: ComponentStory<typeof Button> = () => (
  <Button element="a" label="Button with custom element" />
);

withCustomElement.storyName = 'With custom element';
