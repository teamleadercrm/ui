import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import {
  Link,
  TextDisplay,
} from '../components';

const colors = ['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua'];

storiesOf('Links', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <TextDisplay color={select('Color', colors, 'teal')}>
      Display text with a <Link href="https://www.teamleader.be" target="_blank" inherit={boolean('Inherit', false)}>link</Link> inside
    </TextDisplay>
  ));
