import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Counter from '../Counter';

export default {
  component: Counter,
  title: 'Counter',
} as ComponentMeta<typeof Counter>;

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ minHeight: '50px' }}>{children}</div>;

export const Main: ComponentStory<typeof Counter> = () => (
  <div>
    {(['small', 'medium'] as const).map((size) => (
      <React.Fragment key={size}>
        <Wrapper>
          {(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'] as const).map((color) => (
            <Counter key={color} count={12} maxCount={20} color={color} size={size} marginRight={1} />
          ))}
        </Wrapper>
        <Wrapper>
          {(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'] as const).map((color) => (
            <Counter key={color} count={12} maxCount={10} color={color} size={size} marginRight={1} />
          ))}
        </Wrapper>
      </React.Fragment>
    ))}
  </div>
);
