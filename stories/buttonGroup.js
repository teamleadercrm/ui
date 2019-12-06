import React from 'react';
import { boolean } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../src';

const store = new Store({
  value: 'option2',
});

const handleChangeValue = (value, event) => {
  store.set({ value });
};

export default {
  title: 'Button groups',

  parameters: {
    info: {
      propTablesExclude: [Button, State],
    },
  },
};

export const normal = () => (
  <ButtonGroup segmented={boolean('Segmented', false)}>
    <Button label="Button 1" />
    <Button label="Button 2" />
    <Button icon={<IconAddMediumOutline />} />
  </ButtonGroup>
);

export const withActive = () => (
  <State store={store}>
    <ButtonGroup segmented={boolean('Segmented', true)} value="option2" onChange={handleChangeValue} level="secondary">
      <Button label="Option 1" value="option1" />
      <Button label="Option 2" value="option2" />
      <Button label="Option 3" value="option3" />
    </ButtonGroup>
  </State>
);

withActive.story = {
  name: 'With active',
};
