import React from 'react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import IconButton, { IconButtonProps } from './IconButton';

export default {
  component: IconButton,
  title: 'Low level blocks / IconButton',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A2406',
    },
  },
};

export const basic = ({ size, ...args }: IconButtonProps) => (
  <IconButton {...args} icon={size === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />} size={size} />
);

export const withCustomElement = () => <IconButton icon={<IconAddMediumOutline />} element="a" />;

withCustomElement.storyName = 'With custom element';
