import React from 'react';

import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import FilterSelection from './FilterSelection';

export default {
  component: FilterSelection,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'FilterSelection'),
};

export const DefaultState = (args) => <FilterSelection {...args} />;

DefaultState.args = {};

export const Hover = (args) => <FilterSelection {...args} />;

Hover.args = {};

export const Active = (args) => <FilterSelection {...args} />;

Active.args = {};

export const ActiveWithCountableSelection = (args) => <FilterSelection {...args} />;

ActiveWithCountableSelection.args = {};

export const Disabled = (args) => <FilterSelection {...args} />;

Disabled.args = {};

export const Invalid = (args) => <FilterSelection {...args} />;

Invalid.args = {};

export const Broken = (args) => <FilterSelection {...args} />;

Broken.args = {};
