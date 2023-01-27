import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingStatusLabel from './MarketingStatusLabel';
import { IconLockSmallFilled } from '@teamleader/ui-icons';

export default {
  component: MarketingStatusLabel,
  title: addStoryInGroup(MARKETING, 'MarketingStatusLabel'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=150%3A0',
    },
  },
} as ComponentMeta<typeof MarketingStatusLabel>;

export const Basic: ComponentStory<typeof MarketingStatusLabel> = (args) => <MarketingStatusLabel {...args} />;

Basic.args = {
  children: (
    <>
      <strong>&lt;PACKAGE&gt;</strong> feature
    </>
  ),
};

export const withIcon: ComponentStory<typeof MarketingStatusLabel> = () => {
  return (
    <MarketingStatusLabel icon={<IconLockSmallFilled />}>
      <strong>&lt;PACKAGE&gt;</strong> feature
    </MarketingStatusLabel>
  );
};
