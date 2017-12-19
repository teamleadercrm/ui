import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import { ButtonGroup, LinkButton, Island, Box } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('LinkButtons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('with text', () => (
    <Box>
      <LinkButton label="link text"/>
    </Box>
  ))
  .add('with icon', () => (
    <Island>
      <ButtonGroup>
        <LinkButton icon={<IconChevronLeftMediumOutline />}/>
        <LinkButton icon={<IconChevronRightMediumOutline />}/>
      </ButtonGroup>
    </Island>
  ))
  .add('with text and icon', () => (
    <Island>
      <ButtonGroup>
        <LinkButton icon={<IconChevronLeftMediumOutline />} label="Previous"/>
        <LinkButton icon={<IconChevronRightMediumOutline />} iconPlacement="right" label="Next"/>
      </ButtonGroup>
    </Island>
  ))
  .add('disabled', () => (
    <Box>
      <LinkButton label="link text" disabled />
    </Box>
  ))
  .add('size', () => (
    <Island>
      <ButtonGroup>
        <LinkButton size="small">13</LinkButton>
        <LinkButton>14</LinkButton>
        <LinkButton size="large">15</LinkButton>
      </ButtonGroup>
    </Island>
  ))
  .add('inverse', () => (
    <Island style={{backgroundColor: '#2a3b4d'}}>
      <LinkButton label="link text" inverse />
    </Island>
  ));
