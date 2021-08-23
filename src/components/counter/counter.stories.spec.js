import React from 'react';

import Counter from './Counter';

export default {
  component: Counter,
  title: 'Counter',
};

const Wrapper = ({ children }) => <div style={{ minHeight: '50px' }}>{children}</div>;

export const Main = () => (
  <div>
    {['small', 'medium'].map((size) => (
      <React.Fragment key={size}>
        <Wrapper>
          {['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'].map((color) => (
            <Counter key={color} count={12} color={color} size={size} marginRight={1} />
          ))}
        </Wrapper>
        <Wrapper>
          {['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'].map((color) => (
            <Counter key={color} count={12} maxCount={10} color={color} size={size} marginRight={1} />
          ))}
        </Wrapper>
      </React.Fragment>
    ))}
  </div>
);
