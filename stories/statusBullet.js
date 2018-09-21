import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { StatusBullet, TextBody } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Bullets', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody],
    },
  })
  .add('Basic', () => (
    <StatusBullet color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
      <TextBody>label</TextBody>
    </StatusBullet>
  ));
