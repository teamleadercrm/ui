import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Button groups', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('normal', () => (
    <ButtonGroup>
      <Button label="Button 1"/>
      <Button label="Button 2"/>
    </ButtonGroup>
  ))
  .add('segmented', () => (
    <ButtonGroup segmented>
      <Button icon={<IconAddMediumOutline />} />
      <Button label="Button 1"/>
      <Button label="Button 2"/>
    </ButtonGroup>
  ));
