import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconAddSmallOutline,IconMagicMediumOutline } from '@teamleader/ui-icons';
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
      <Button icon={<IconAddSmallOutline />} onClick={action('clicked button 1')} size="small" />
      <Button icon={<IconAddMediumOutline />} onClick={action('clicked button 2')} size="medium" />
      <Button icon={<IconMagicMediumOutline />} onClick={action('clicked button 3')} size="large" />
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
  .add('disabled', () => (
    <div>
      <Box margin={2}>
        <ButtonGroup>
          <Button level="primary" icon={<IconAddMediumOutline />} disabled/>
          <Button level="primary" disabled>
            Disabled primary
          </Button>
        </ButtonGroup>
      </Box>
      <Box margin={2}>
        <ButtonGroup>
          <Button icon={<IconAddMediumOutline />} disabled/>
          <Button disabled>
            Disabled secondary
          </Button>
        </ButtonGroup>
      </Box>
      <Box margin={2}>
        <ButtonGroup>
          <Button level="destructive" icon={<IconAddMediumOutline />} disabled/>
          <Button level="destructive" disabled>
            Disabled destructive
          </Button>
        </ButtonGroup>
      </Box>
      <Box margin={2}>
        <ButtonGroup>
          <Button level="outline" icon={<IconAddMediumOutline />} disabled/>
          <Button level="outline" disabled>
            Disabled outline
          </Button>
        </ButtonGroup>
      </Box>
      <Box margin={2}>
        <ButtonGroup>
          <Button level="outline" inverse icon={<IconAddMediumOutline />} disabled/>
          <Button level="outline" inverse disabled>
            Disabled inverse outline
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  ))
  .add('processing', () => (
    <Box>
      <ButtonGroup>
        <Button icon={<IconAddSmallOutline />} processing size="small" />
        <Button processing label="Button" size="small"/>
        <Button level="primary" processing label="Button" size="small"/>
        <Button level="destructive" processing label="Button" size="small"/>
        <Button level="outline" processing label="Button" size="small"/>
        <Button level="outline" processing inverse label="Button" size="small"/>
      </ButtonGroup>
      <ButtonGroup marginTop={3}>
        <Button icon={<IconAddMediumOutline />} processing />
        <Button processing label="Button"/>
        <Button level="primary" processing label="Button"/>
        <Button level="destructive" processing label="Button"/>
        <Button level="outline" processing label="Button"/>
        <Button level="outline" processing inverse label="Button"/>
      </ButtonGroup>
      <ButtonGroup marginTop={3}>
        <Button icon={<IconAddMediumOutline />} processing size="large" />
        <Button processing label="Button" size="large"/>
        <Button level="primary" processing label="Button" size="large"/>
        <Button level="destructive" processing label="Button" size="large"/>
        <Button level="outline" processing label="Button" size="large"/>
        <Button level="outline" processing inverse label="Button" size="large"/>
      </ButtonGroup>
    </Box>
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
  ));
