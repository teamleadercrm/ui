import React from 'react';
import { IconGiftMediumOutline } from '@teamleader/ui-icons';

import { Icon } from '../..';

export default {
  component: Icon,
  title: 'Icon',
};

const Wrapper = ({ children }) => <div style={{ minHeight: '50px', display: 'flex' }}>{children}</div>;

export const Main = () => (
  <div>
    {['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'].map((color) => (
      <Wrapper key={color}>
        {['lightest', 'light', 'normal', 'dark', 'darkest'].map((tint) => (
          <Icon key={tint} color={color} tint={tint}>
            <IconGiftMediumOutline />
          </Icon>
        ))}
      </Wrapper>
    ))}
  </div>
);
