import React, { ChangeEvent, useState } from 'react';
import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import Toggle, { ToggleProps } from './Toggle';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { ComponentMeta } from '@storybook/react';
import Box from '../box';
import Tooltip from '../tooltip';
import Icon from '../icon';
import { TextSmall } from '../typography';

export default {
  component: Toggle,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Toggle'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A23548',
    },
  },
} as ComponentMeta<typeof Toggle>;

export const DefaultStory = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

DefaultStory.args = {
  checked: true,
  label: 'I am a label',
};

const TooltippedIcon = Tooltip(Icon);
export const withTooltip = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return (
    <Toggle
      checked={checked}
      onChange={handleChange}
      label={
        <Box display="flex">
          Label
          <TooltippedIcon tooltip={<TextSmall>Tooltip</TextSmall>} marginLeft={2}>
            <IconInfoBadgedSmallFilled />
          </TooltippedIcon>
        </Box>
      }
    />
  );
};
