import React from 'react';
import { IconGiftMediumOutline } from '@teamleader/ui-icons';

import { IconButton } from '../..';

export default {
  component: IconButton,
  title: 'IconButton',
};

const Wrapper = ({ children, inverse = false }) => (
  <div style={{ minHeight: '50px', display: 'flex', backgroundColor: inverse ? 'grey' : 'transparent' }}>
    {children}
  </div>
);

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) =>
      ['neutral', 'white', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'].map((color) => (
        <Wrapper key={color} inverse={color === 'white'}>
          {['lightest', 'light', 'normal', 'dark', 'darkest'].map((tint) => (
            <React.Fragment key={tint}>
              <IconButton size={size} color={color} tint={tint} icon={<IconGiftMediumOutline />} marginRight={2} />
              <IconButton
                size={size}
                color={color}
                tint={tint}
                icon={<IconGiftMediumOutline />}
                marginRight={2}
                disabled
              />
              <IconButton
                size={size}
                color={color}
                tint={tint}
                icon={<IconGiftMediumOutline />}
                marginRight={2}
                selected
              />
            </React.Fragment>
          ))}
        </Wrapper>
      )),
    )}
  </div>
);
