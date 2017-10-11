import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconMagicMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../components/button';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Buttons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('with text', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')}>button 1</Button>
      <Button onClick={action('clicked button 2')}>button 2</Button>
    </ButtonGroup>
  ))
  .add('with icon', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')}>
        <IconAddMediumOutline />
      </Button>
      <Button onClick={action('clicked button 1')}>
        <IconMagicMediumOutline />
      </Button>
    </ButtonGroup>
  ))
  .add('with text and icon', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')}>
        <IconAddMediumOutline />
        button
      </Button>
      <Button onClick={action('clicked button 2')}>
        button
        <IconAddMediumOutline />
      </Button>
    </ButtonGroup>
  ))
  .add('segmented', () => (
    <ButtonGroup segmented>
      <Button onClick={action('clicked')}>
        <IconAddMediumOutline />
      </Button>
      <Button onClick={action('clicked button 1')}>button 1</Button>
      <Button onClick={action('clicked button 2')}>button 2</Button>
    </ButtonGroup>
  ))
  .add('disabled', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')} disabled>
        <IconAddMediumOutline />
      </Button>
      <Button onClick={action('clicked button 2')} disabled>
        button
      </Button>
    </ButtonGroup>
  ))
  .add('processing', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')} processing>
        <IconAddMediumOutline />
      </Button>
      <Button onClick={action('clicked button 2')} processing>
        button
      </Button>
    </ButtonGroup>
  ))
  .add('themes', () => (
    <ButtonGroup>
      <Button onClick={action('clicked primary button')} level="primary">
        Primary button
      </Button>
      <Button onClick={action('clicked secondary button')} level="secondary">
        Secondary button
      </Button>
      <Button onClick={action('clicked ouline button')} level="outline">
        Outline button
      </Button>
      <Button onClick={action('clicked destructive button')} level="destructive">
        Destructive button
      </Button>
    </ButtonGroup>
  ))
  .add('inverse', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')} inverse>
        button 1
      </Button>
      <Button onClick={action('clicked button 2')} inverse>
        button 2
      </Button>
    </ButtonGroup>
  ))
  .add('size', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button small')} size="small">
        button small
      </Button>
      <Button onClick={action('clicked button medium')} size="medium">
        button medium
      </Button>
      <Button onClick={action('clicked button large')} size="large">
        button large
      </Button>
    </ButtonGroup>
  ));
