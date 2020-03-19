import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Avatar, AvatarStack, Bullet, Counter, TextBody, Tooltip } from '../../index';
import avatars from '../../static/data/avatar';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

const directions = ['horizontal', 'vertical'];
const sizes = ['tiny', 'small', 'medium', 'large', 'hero'];
const shapes = ['circle', 'rounded'];

const TooltippedAvatar = Tooltip(Avatar);

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Avatar'),

  parameters: {
    info: {
      propTablesExclude: [Bullet, Counter],
    },
  },
};

export const avatar = () => (
  <Avatar
    creatable={boolean('Creatable', false)}
    editable={boolean('Editable', false)}
    fullName={text('Full name', 'John Doe')}
    id={text('Id', '63227a3c-c80b-11e9-a32f-2a2ae2dbcce4')}
    imageUrl={boolean('Image available', false) ? avatars[0].image : null}
    onClick={() => console.log('Clicked on the avatar')}
    onImageChange={() => console.log('Change image')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'large')}
    shape={select('Shape', shapes, 'circle')}
  />
);

export const avatarStack = () => (
  <AvatarStack
    direction={select('Direction', directions, 'horizontal')}
    displayMax={number('Display max', 5)}
    inverse={boolean('Inverse', false)}
    selectable={boolean('Selectable', false)}
    size={select('Size', sizes, 'large')}
  >
    {avatars.map(({ image }, index) => (
      <Avatar
        key={index}
        imageUrl={image}
        onClick={() => console.log('Clicked on the avatar')}
        selected={boolean('Selected', false)}
      />
    ))}
  </AvatarStack>
);

avatarStack.story = {
  name: 'AvatarStack',
};

export const withBullet = () => (
  <Avatar
    creatable={boolean('Creatable', false)}
    editable={boolean('Editable', false)}
    fullName={text('Full name', 'John Doe')}
    id={text('Id', '63227a3c-c80b-11e9-a32f-2a2ae2dbcce4')}
    imageUrl={boolean('Image available', false) ? avatars[0].image : null}
    onImageChange={() => console.log('Change image')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'large')}
    shape={select('Shape', shapes, 'circle')}
  >
    <Bullet borderColor="neutral" borderTint="lightest" color="ruby" />
  </Avatar>
);

withBullet.story = {
  name: 'With bullet',
};

export const withCounter = () => (
  <Avatar
    creatable={boolean('Creatable', false)}
    editable={boolean('Editable', false)}
    fullName={text('Full name', 'John Doe')}
    id={text('Id', '63227a3c-c80b-11e9-a32f-2a2ae2dbcce4')}
    imageUrl={boolean('Image available', false) ? avatars[0].image : null}
    onImageChange={() => console.log('Change image')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'large')}
    shape={select('Shape', shapes, 'circle')}
  >
    <Counter color="ruby" count={15} maxCount={6} borderColor="neutral" borderTint="lightest" />
  </Avatar>
);

withCounter.story = {
  name: 'With counter',
};

export const withTooltip = () => (
  <TooltippedAvatar
    creatable={boolean('Creatable', false)}
    editable={boolean('Editable', false)}
    fullName={text('Full name', 'John Doe')}
    id={text('Id', '63227a3c-c80b-11e9-a32f-2a2ae2dbcce4')}
    imageUrl={boolean('Image available', false) ? avatars[0].image : null}
    onImageChange={() => console.log('Change image')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'large')}
    shape={select('Shape', shapes, 'circle')}
    tooltip={<TextBody>I am the tooltip</TextBody>}
  />
);

withTooltip.story = {
  name: 'With tooltip',
};
