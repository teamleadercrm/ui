import React from 'react';

import Bullet from './Bullet';

export default {
  component: Bullet,
  title: 'Bullet',
};

const Wrapper = ({ children }) => <div style={{ padding: '6px', display: 'flex' }}>{children}</div>;

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <Wrapper key={size}>
        {['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'].map((color) => (
          <React.Fragment key={color}>
            <Bullet color={color} size={size} marginRight={1} />
          </React.Fragment>
        ))}
      </Wrapper>
    ))}
  </div>
);
