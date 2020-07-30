import React from 'react';
import { IconInfoBadgedSmallFilled, IconMarkerSmallOutline } from '@teamleader/ui-icons';
import { Icon, Input, Label, TextSmall, Tooltip } from '../../index';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';

const TooltippedIcon = Tooltip(Icon);

export default {
  component: Label,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Label'),
};

export const DefaultStory = (args) => (
  <Label
    {...args}
    htmlFor="input1"
    connectedLeft={
      <Icon>
        <IconMarkerSmallOutline />
      </Icon>
    }
    connectedRight={
      <TooltippedIcon tooltip={<TextSmall>This is the label tooltip text</TextSmall>} tooltipSize="small">
        <IconInfoBadgedSmallFilled />
      </TooltippedIcon>
    }
  >
    Input label
    <Input id="input1" placeholder="I am the placeholder" />
  </Label>
);

DefaultStory.args = {
  helpText: 'Optional',
};
