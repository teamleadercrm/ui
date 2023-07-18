import { ComponentStory } from '@storybook/react';
import React from 'react';

import FilterSelection, { STATUS } from './FilterSelection';

export default {
  component: FilterSelection,
  title: 'Compositions / FilterSelection',
};

export const DefaultState: ComponentStory<typeof FilterSelection> = (args) => <FilterSelection {...args} />;

DefaultState.args = {
  label: 'default',
  status: STATUS.DEFAULT,
};

export const DefaultStateWithModifications: ComponentStory<typeof FilterSelection> = (args) => (
  <FilterSelection {...args} />
);

DefaultStateWithModifications.args = {
  label: 'default with modifications',
  status: STATUS.DEFAULT,
  modificationText: 'This filter was cleared',
};

export const Focused: ComponentStory<typeof FilterSelection> = (args) => <FilterSelection label="focused" {...args} />;

Focused.args = {
  label: 'focused',
  status: STATUS.FOCUSED,
  applied: true,
};

export const Active: ComponentStory<typeof FilterSelection> = (args) => <FilterSelection label="active" {...args} />;

Active.args = {
  label: 'active',
  status: STATUS.ACTIVE,
  applied: true,
};

export const ActiveWithClearableSelection: ComponentStory<typeof FilterSelection> = (args) => (
  <FilterSelection label="active with clearable selection" {...args} />
);

ActiveWithClearableSelection.args = {
  label: 'active with clearable selection',
  status: STATUS.ACTIVE,
  applied: true,
};

export const ActiveWithCountableSelection: ComponentStory<typeof FilterSelection> = (args) => (
  <FilterSelection label="active with countable selection" {...args} />
);

ActiveWithCountableSelection.args = {
  label: 'active with countable selection',
  status: STATUS.ACTIVE,
  applied: true,
  amountApplied: 3,
};

export const Disabled: ComponentStory<typeof FilterSelection> = (args) => (
  <FilterSelection label="disabled" {...args} />
);

Disabled.args = {
  label: 'disabled',
  status: STATUS.DISABLED,
  applied: true,
};

export const Invalid: ComponentStory<typeof FilterSelection> = (args) => <FilterSelection label="invalid" {...args} />;

Invalid.args = {
  label: 'invalid',
  status: STATUS.INVALID,
  applied: true,
};

export const Broken: ComponentStory<typeof FilterSelection> = (args) => <FilterSelection label="broken" {...args} />;

Broken.args = {
  label: 'broken',
  status: STATUS.BROKEN,
  applied: true,
};
