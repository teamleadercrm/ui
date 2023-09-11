import React, { ReactNode } from 'react';
import { IconGiftMediumOutline } from '@teamleader/ui-icons';

import { IconButton } from '../../..';

import { TINTS, COLORS } from '../../../constants';

export default {
  component: IconButton,
  title: 'IconButton',
};

const Wrapper = ({ children, inverse = false }: { children: ReactNode; inverse: boolean }) => (
  <div style={{ minHeight: '50px', display: 'flex', backgroundColor: inverse ? 'grey' : 'transparent' }}>
    {children}
  </div>
);
type Sizes = 'small' | 'medium' | 'large';
const sizes: Sizes[] = ['small', 'medium', 'large'];
const colors: ((typeof COLORS)[number] | 'white')[] = [
  'neutral',
  'white',
  'mint',
  'violet',
  'ruby',
  'gold',
  'aqua',
  'teal',
];
const tints: (typeof TINTS)[number][] = ['lightest', 'light', 'normal', 'dark', 'darkest'];
export const Main = () => (
  <div>
    {sizes.map((size) =>
      colors.map((color) => (
        <Wrapper key={color} inverse={color === 'white'}>
          {tints.map((tint) => (
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
