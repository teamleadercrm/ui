import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import MarketingButton from './MarketingButton';

export default {
  component: MarketingButton,
  title: addStoryInGroup(MARKETING, 'MarketingButton'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=1%3A809',
    },
  },
};

export const Basic = ({ size, ...args }) => (
  <MarketingButton
    {...args}
    size={size}
    icon={size === 'tiny' || size === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
  />
);

Basic.args = {
  children: 'I am a button for marketing purposes',
  level: 'primary',
};

export const Bold = () => (
  <MarketingButton>
    I am a button for <strong>marketing</strong> purposes
  </MarketingButton>
);

export const IconOnly = () => <MarketingButton icon={<IconAddMediumOutline />} />;
