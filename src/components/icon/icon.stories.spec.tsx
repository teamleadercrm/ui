import React from 'react';
import { IconGiftMediumOutline } from '@teamleader/ui-icons';

import { Icon } from '../..';
import { COLOURS, TINTS } from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minHeight: '50px', display: 'flex' }}>{children}</div>
);

export const Main = () => (
  <div>
    {(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'] as COLOURS[]).map((color) => (
      <Wrapper key={color}>
        {(['lightest', 'light', 'normal', 'dark', 'darkest'] as TINTS[]).map((tint) => (
          <Icon key={tint} color={color} tint={tint}>
            <IconGiftMediumOutline />
          </Icon>
        ))}
      </Wrapper>
    ))}
  </div>
);
