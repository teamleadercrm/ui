import { ComponentMeta } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import Toggle, { ToggleProps } from './Toggle';

const LABEL = 'I am a label';
const LABEL_TOOLTIP = 'I am label tooltip';

export default {
  component: Toggle,
  title: 'Low level blocks / Form elements/Toggle',

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

export const WithTooltip = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return <Toggle label={LABEL} tooltip={LABEL_TOOLTIP} checked={checked} onChange={handleChange} />;
};

export const WithTooltipRight = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return (
    <Toggle label={LABEL} tooltip={LABEL_TOOLTIP} tooltipPosition="right" checked={checked} onChange={handleChange} />
  );
};

export const disabled = () => {
  return <Toggle label={LABEL} disabled checked={false} />;
};

export const Small = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="small" />;
};

export const Medium = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="medium" />;
};

export const Large = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };
  return <Toggle label={LABEL} maxLines={1} checked={checked} onChange={handleChange} size="large" />;
};
