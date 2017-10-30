import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconMagicMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup, IconButton, Island, Box } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Buttons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('with text', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button 1')}>Button 1</Button>
      <Button onClick={action('clicked button 2')}>Button 2</Button>
    </ButtonGroup>
  ))
  .add('with icon', () => (
    <ButtonGroup>
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked button 1')} />
      <Button icon={<IconMagicMediumOutline />} onClick={action('clicked button 2')} />
    </ButtonGroup>
  ))
  .add('with text and icon', () => (
    <ButtonGroup>
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked button 1')}>
        Button
      </Button>
      <Button icon={<IconAddMediumOutline />} iconPlacement="right" onClick={action('clicked button 2')}>
        Button
      </Button>
    </ButtonGroup>
  ))
  .add('segmented', () => (
    <ButtonGroup segmented>
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked')} />
      <Button onClick={action('clicked button 1')}>Button 1</Button>
      <Button onClick={action('clicked button 2')}>Button 2</Button>
    </ButtonGroup>
  ))
  .add('disabled', () => (
    <ButtonGroup>
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked button 1')} disabled/>
      <Button onClick={action('clicked button 2')} disabled>
        Button
      </Button>
    </ButtonGroup>
  ))
  .add('processing', () => (
    <ButtonGroup>
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked button 1')} processing />
      <Button onClick={action('clicked button 2')} processing>
        Button
      </Button>
    </ButtonGroup>
  ))
  .add('size', () => (
    <ButtonGroup>
      <Button onClick={action('clicked button small')} size="small">
        Button small
      </Button>
      <Button onClick={action('clicked button medium')} size="medium">
        Button medium
      </Button>
      <Button onClick={action('clicked button large')} size="large">
        Button large
      </Button>
    </ButtonGroup>
  ))
  .add('level', () => (
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
    <Button inverse level="outline" onClick={action('clicked button outline')}>
      Button outline inverse
    </Button>
  ))
  .add('icon button', () => (
    <Box>
      <Island color="white" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="neutral" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="mint" marginBottom={2}>
        <IconButton color="mint" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="violet" marginBottom={2}>
        <IconButton color="violet" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="ruby" marginBottom={2}>
        <IconButton color="ruby" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="gold" marginBottom={2}>
        <IconButton color="gold" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="aqua" marginBottom={2}>
        <IconButton color="aqua" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="neutral" marginBottom={2} style={{backgroundColor: '#2a3b4d'}}> {/* There is no teal island, so just changing the background with inline style */}
        <IconButton color="white" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
    </Box>
  ));
