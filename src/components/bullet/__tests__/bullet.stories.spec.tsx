import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Bullet from '../Bullet';

export default {
  component: Bullet,
  title: 'Bullet',
} as ComponentMeta<typeof Bullet>;

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div style={{ padding: '6px', display: 'flex' }}>{children}</div>
);

export const Main: ComponentStory<typeof Bullet> = () => (
  <div>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <Wrapper key={size}>
        {(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'] as const).map((color) => (
          <React.Fragment key={color}>
            <Bullet color={color} size={size} marginRight={1} />
          </React.Fragment>
        ))}
      </Wrapper>
    ))}
  </div>
);
