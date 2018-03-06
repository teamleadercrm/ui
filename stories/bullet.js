import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from "@storybook/addon-knobs/react";
import { Bullet, TextBody, Tooltip } from '../components';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedBullet = Tooltip(Bullet);

storiesOf('Bullets', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Bullet
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With tooltip', () => (
    <TooltippedBullet
      color={select('Color', colors, 'ruby')}
      size={select('Size', sizes, 'medium')}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    />
  ));
