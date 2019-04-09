import React from 'react';
import { storiesOf } from '@storybook/react';
import { SplitButtonMenu, MenuItem } from '../src';
import { IconTrashSmallOutline } from '@teamleader/ui-icons';

const handleButtonClick = parameter => {
  console.log(parameter);
};

storiesOf('Split button menu', module).add('Basic', () => (
  <SplitButtonMenu onButtonClick={handleButtonClick}>
    <MenuItem caption="Primary action" level="primary" value="primary" />
    <MenuItem caption="Secondary action" level="secondary" value="secondary" />
    <MenuItem caption="Timer action" level="timer" value="timer" />
    <MenuItem
      caption="Destructive action"
      destructive
      icon={<IconTrashSmallOutline />}
      level="destructive"
      value="destructive"
    />
  </SplitButtonMenu>
));
