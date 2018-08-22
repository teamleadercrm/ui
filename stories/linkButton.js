import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import {
  IconChevronLeftSmallOutline,
  IconChevronLeftMediumOutline,
  IconChevronRightSmallOutline,
  IconChevronRightMediumOutline,
} from '@teamleader/ui-icons';
import { LinkButton } from '../components';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];
const sizes = ['small', 'medium', 'large'];

storiesOf('LinkButtons', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('With text', () => (
    <LinkButton
      disabled={boolean('Disabled', false)}
      inverse={boolean('Inverse', false)}
      label="link text"
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With icon', () => (
    <LinkButton
      disabled={boolean('Disabled', false)}
      // icon={<IconChevronRightMediumOutline />}
      icon={
        select('Size', sizes, 'medium') === 'small' ? (
          <IconChevronRightSmallOutline />
        ) : (
          <IconChevronRightMediumOutline />
        )
      }
      iconPlacement={select('Icon placement', iconPositions, 'left')}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With text and icon', () => (
    <LinkButton
      disabled={boolean('Disabled', false)}
      // icon={<IconChevronLeftMediumOutline />}
      icon={
        select('Size', sizes, 'medium') === 'small' ? <IconChevronLeftSmallOutline /> : <IconChevronLeftMediumOutline />
      }
      iconPlacement={select('Icon placement', iconPositions, 'left')}
      inverse={boolean('Inverse', false)}
      label="Previous"
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With custom element', () => (
    <LinkButton
      disabled={boolean('Disabled', false)}
      element={select('Element', elements, 'a')}
      inverse={boolean('Inverse', false)}
      label="link text"
      size={select('Size', sizes, 'medium')}
    />
  ));
