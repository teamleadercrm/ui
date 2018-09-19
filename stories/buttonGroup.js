import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../components';

const store = new Store({
  value: 'option2',
});

const handleChangeValue = (value, event) => {
  store.set({ value });
};

storiesOf('Button groups', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Button, State],
    })(story)(context),
  )
  .addDecorator(withKnobs)
  .add('normal', () => (
    <ButtonGroup segmented={boolean('Segmented', false)}>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button icon={<IconAddMediumOutline />} />
    </ButtonGroup>
  ))
  .add('with active', () => (
    <State store={store}>
      <ButtonGroup
        segmented={boolean('Segmented', true)}
        value="option2"
        onChange={handleChangeValue}
        level="secondary"
      >
        <Button label="Option 1" value="option1" />
        <Button label="Option 2" value="option2" />
        <Button label="Option 3" value="option3" />
      </ButtonGroup>
    </State>
  ));
