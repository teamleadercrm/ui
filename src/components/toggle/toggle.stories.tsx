import { ComponentMeta } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Toggle, { ToggleProps } from './Toggle';

const LABEL = 'I am a label';
const LABEL_TOOLTIP = 'I am label tooltip';

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
  label: LABEL,
};

DefaultStory.argTypes = {
  label: { control: 'text' },
  labelTooltip: { control: 'text' },
};

export const withTooltip = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return <Toggle label={LABEL} labelTooltip={LABEL_TOOLTIP} checked={checked} onChange={handleChange} />;
};

export const withTooltipRight = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return (
    <Toggle
      label={LABEL}
      labelTooltip={LABEL_TOOLTIP}
      labelTooltipPosition="right"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const disabled = () => {
  return <Toggle label={LABEL} disabled checked={false} />;
};

export const small = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="small" />;
};

export const medium = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="medium" />;
};

export const large = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="large" />;
};
