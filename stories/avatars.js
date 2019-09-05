import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Avatar, AvatarStack, Bullet, Counter, TextBody, Tooltip } from '../src';
import avatars from './static/data/avatar';

const directions = ['horizontal', 'vertical'];
const sizes = ['tiny', 'small', 'medium', 'large', 'hero'];
const shapes = ['circle', 'rounded'];

const TooltippedAvatar = Tooltip(Avatar);

storiesOf('Avatars', module)
  .addParameters({
    info: {
      propTablesExclude: [Bullet, Counter],
    },
  })
  .add('Avatar', () => (
    <Avatar
      editable={boolean('Editable', false)}
      fullName={text('Full name', 'John Doe')}
      id="63227a3c-c80b-11e9-a32f-2a2ae2dbcce4"
      imageUrl={boolean('Image available', false) ? avatars[0].image : null}
      onImageChange={() => console.log('Change image')}
      size={select('Size', sizes, 'large')}
      shape={select('Shape', shapes, 'circle')}
    />
  ))
  .add('AvatarStack', () => (
    <AvatarStack
      direction={select('Direction', directions, 'horizontal')}
      displayMax={number('Display max', 5)}
      inverse={boolean('Inverse', false)}
      size={select('Size', sizes, 'large')}
    >
      {avatars.map(({ image }, index) => (
        <Avatar key={index} imageUrl={image} />
      ))}
    </AvatarStack>
  ))
  .add('With bullet', () => (
    <Avatar
      editable={boolean('Editable', false)}
      fullName={text('Full name', 'John Doe')}
      id="63227a3c-c80b-11e9-a32f-2a2ae2dbcce4"
      imageUrl={boolean('Image available', false) ? avatars[0].image : null}
      onImageChange={() => console.log('Change image')}
      size={select('Size', sizes, 'large')}
      shape={select('Shape', shapes, 'circle')}
    >
      <Bullet borderColor="neutral" borderTint="lightest" color="ruby" />
    </Avatar>
  ))
  .add('With counter', () => (
    <Avatar
      editable={boolean('Editable', false)}
      fullName={text('Full name', 'John Doe')}
      id="63227a3c-c80b-11e9-a32f-2a2ae2dbcce4"
      imageUrl={boolean('Image available', false) ? avatars[0].image : null}
      onImageChange={() => console.log('Change image')}
      size={select('Size', sizes, 'large')}
      shape={select('Shape', shapes, 'circle')}
    >
      <Counter color="ruby" count={15} maxCount={6} borderColor="neutral" borderTint="lightest" />
    </Avatar>
  ))
  .add('With tooltip', () => (
    <TooltippedAvatar
      editable={boolean('Editable', false)}
      fullName={text('Full name', 'John Doe')}
      id="63227a3c-c80b-11e9-a32f-2a2ae2dbcce4"
      imageUrl={boolean('Image available', false) ? avatars[0].image : null}
      onImageChange={() => console.log('Change image')}
      size={select('Size', sizes, 'large')}
      shape={select('Shape', shapes, 'circle')}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    />
  ));
