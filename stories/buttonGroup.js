import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Button groups', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('normal', () => (
    <ButtonGroup segmented={boolean('Semented', false)}>
      <Button label="Button 1"/>
      <Button label="Button 2"/>
      <Button icon={<IconAddMediumOutline />} />
    </ButtonGroup>
  ));
