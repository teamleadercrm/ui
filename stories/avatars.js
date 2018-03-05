import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs/react';
import { Avatar, AvatarStack, Bullet, Counter, TextBody, Tooltip } from '../components';

import Image1 from '../static/avatars/1.png';
import Image2 from '../static/avatars/2.png';
import Image3 from '../static/avatars/3.png';
import Image4 from '../static/avatars/4.png';
import Image5 from '../static/avatars/5.png';
import Image6 from '../static/avatars/6.png';
import Image7 from '../static/avatars/7.png';
import Image8 from '../static/avatars/8.png';

const avatars = [
  { image: Image1, count: 21, color: 'ruby', maxCount: 20 },
  { image: Image2, count: 15, color: 'neutral', inactive: true },
  { image: Image3, count: 5, color: 'neutral' },
  { image: Image4, count: 3, color: 'ruby' },
  { image: Image5, count: 0, color: 'ruby' },
  { image: Image6, count: 4, color: 'ruby' },
  { image: Image7, count: 5, color: 'neutral', inactive: true },
  { image: Image8, count: 2, color: 'neutral', inactive: true },
];

const directions = ['horizontal', 'vertical'];
const sizes = ['tiny', 'small', 'medium'];

const TooltippedAvatar = Tooltip(Avatar);

storiesOf('Avatars', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('sizes', () => (
    <Avatar
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('stacked', () => (
    <AvatarStack
      direction={select('Direction', directions, 'horizontal')}
      displayMax={number('Display max', 5)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      {avatars.map(({ image }, index) => (
        <Avatar
          key={index}
          image={image}
          size={select('Size', sizes, 'medium')}
        />
      ))}
    </AvatarStack>
  ))
  .add('with bullet', () => (
    <Avatar
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
    >
      <Bullet color="ruby" />
    </Avatar>
  ))
  .add('with counter', () => (
    <Avatar
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
    >
      <Counter color="ruby" count={avatars[0].count} maxCount={avatars[0].maxCount}/>
    </Avatar>
  ))
  .add('with tooltip', () => (
    <TooltippedAvatar
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    />
  ));
