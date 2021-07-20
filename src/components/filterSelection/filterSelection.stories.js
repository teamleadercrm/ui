import React from 'react';

import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import FilterSelection, { Status } from './FilterSelection';

export default {
  component: FilterSelection,
  title: addStoryInGroup(COMPOSITIONS, 'FilterSelection'),
};

export const DefaultState = (args) => <FilterSelection {...args} />;

DefaultState.args = {
  label: 'default',
  status: Status.DEFAULT,
};

export const DefaultStateWithModifications = (args) => <FilterSelection {...args} />;

DefaultStateWithModifications.args = {
  label: 'default with modifications',
  status: Status.DEFAULT,
  modificationText: 'This filter was cleared',
};

export const Focused = (args) => <FilterSelection label="focused" {...args} />;

Focused.args = {
  label: 'focused',
  status: Status.FOCUSED,
  applied: true,
};

export const Active = (args) => <FilterSelection label="active" {...args} />;

Active.args = {
  label: 'active',
  status: Status.ACTIVE,
  applied: true,
};

export const ActiveWithClearableSelection = (args) => (
  <FilterSelection label="active with clearable selection" {...args} />
);

ActiveWithClearableSelection.args = {
  label: 'active with clearable selection',
  status: Status.ACTIVE,
  applied: true,
};

export const ActiveWithCountableSelection = (args) => (
  <FilterSelection label="active with countable selection" {...args} />
);

ActiveWithCountableSelection.args = {
  label: 'active with countable selection',
  status: Status.ACTIVE,
  applied: true,
  amountApplied: 3,
};

export const Disabled = (args) => <FilterSelection label="disabled" {...args} />;

Disabled.args = {
  label: 'disabled',
  status: Status.DISABLED,
  applied: true,
};

export const Invalid = (args) => <FilterSelection label="invalid" {...args} />;

Invalid.args = {
  label: 'invalid',
  status: Status.INVALID,
  applied: true,
};

export const Broken = (args) => <FilterSelection label="broken" {...args} />;

Broken.args = {
  label: 'broken',
  status: Status.BROKEN,
  applied: true,
};
