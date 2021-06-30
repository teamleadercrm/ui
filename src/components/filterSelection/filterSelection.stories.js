import React from 'react';

import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import FilterSelection, { Status } from './FilterSelection';

export default {
  component: FilterSelection,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'FilterSelection'),
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
};

export const Active = (args) => <FilterSelection label="active" {...args} />;

Active.args = {
  label: 'active',
  status: Status.ACTIVE,
};

export const ActiveWithCountableSelection = (args) => (
  <FilterSelection label="active with countable selection" {...args} />
);

ActiveWithCountableSelection.args = {
  label: 'active with amount',
  status: Status.ACTIVE,
  amount: 3,
};

export const Disabled = (args) => <FilterSelection label="disabled" {...args} />;

Disabled.args = {
  label: 'disabled',
  status: Status.DISABLED,
};

export const Invalid = (args) => <FilterSelection label="invalid" {...args} />;

Invalid.args = {
  label: 'invalid',
  status: Status.INVALID,
};

export const Broken = (args) => <FilterSelection label="broken" {...args} />;

Broken.args = {
  label: 'broken',
  status: Status.BROKEN,
};
