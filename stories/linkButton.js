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
  .add('normal', () => (
    <Island>
      <ButtonGroup>
        <LinkButton icon={<IconChevronLeftMediumOutline />}>Previous</LinkButton>
        <LinkButton>1</LinkButton>
        ...
        <LinkButton>13</LinkButton>
        <LinkButton active>14</LinkButton>
        <LinkButton>15</LinkButton>
        ...
        <LinkButton>19</LinkButton>
        <LinkButton icon={<IconChevronRightMediumOutline />} iconPlacement="right">Next</LinkButton>
      </ButtonGroup>
    </Island>
  ))
  .add('size', () => (
    <Island>
      <ButtonGroup>
        <LinkButton active size="small">13</LinkButton>
        <LinkButton active>14</LinkButton>
        <LinkButton active size="large">15</LinkButton>
      </ButtonGroup>
    </Island>
  ))
  .add('inverse', () => (
    <Island style={{backgroundColor: '#2a3b4d'}}>
      <ButtonGroup>
        <LinkButton icon={<IconChevronLeftMediumOutline />} inverse>Previous</LinkButton>
        <LinkButton inverse>1</LinkButton>
        ...
        <LinkButton inverse>13</LinkButton>
        <LinkButton active inverse>14</LinkButton>
        <LinkButton inverse>15</LinkButton>
        ...
        <LinkButton inverse>19</LinkButton>
        <LinkButton icon={<IconChevronRightMediumOutline />} iconPlacement="right" inverse>Next</LinkButton>
      </ButtonGroup>
    </Island>
  ));
