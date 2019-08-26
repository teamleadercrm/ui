import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { AvatarImage, AvatarInitials, AvatarStack, Bullet, Counter, TextBody, Tooltip } from '../src';
import avatars from './static/data/avatar';

const directions = ['horizontal', 'vertical'];
const sizes = ['tiny', 'small', 'medium', 'large'];
const shapes = [null, 'circle', 'rounded'];
const colors = ['teal', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'];

const TooltippedAvatarImage = Tooltip(AvatarImage);

storiesOf('Avatars', module)
  .addParameters({
    info: {
      propTablesExclude: [Bullet, Counter],
    },
  })
  .add('AvatarImage', () => (
    <AvatarImage
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
      shape={select('Shape', shapes) || undefined}
    />
  ))
  .add('AvatarInitials', () => (
    <AvatarInitials
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      shape={select('Shape', shapes) || undefined}
      name={text('Name', undefined)}
    />
  ))
  .add('AvatarStack', () => (
    <AvatarStack
      direction={select('Direction', directions, 'horizontal')}
      displayMax={number('Display max', 5)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'medium')}
    >
      {avatars.map(({ image }, index) => (
        <AvatarImage key={index} image={image} />
      ))}
    </AvatarStack>
  ))
  .add('With bullet', () => (
    <AvatarImage image={avatars[0].image} size={select('Size', sizes, 'medium')}>
      <Bullet borderColor="neutral" borderTint="lightest" color="ruby" />
    </AvatarImage>
  ))
  .add('With counter', () => (
    <AvatarImage image={avatars[0].image} size={select('Size', sizes, 'medium')}>
      <Counter
        color="ruby"
        count={avatars[0].count}
        maxCount={avatars[0].maxCount}
        borderColor="neutral"
        borderTint="lightest"
      />
    </AvatarImage>
  ))
  .add('With tooltip', () => (
    <TooltippedAvatarImage
      image={avatars[0].image}
      size={select('Size', sizes, 'medium')}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    />
  ));
