import React from 'react';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const Wrapper = ({ children }) => <div style={{ minHeight: '60px', display: 'flex' }}>{children}</div>;

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <Wrapper key={size}>
        <Checkbox size={size} marginRight={2} />
        <Checkbox size={size} marginRight={2} checked />
        <Checkbox size={size} marginRight={2} disabled />
        <Checkbox size={size} marginRight={2} disabled checked />
        <Checkbox size={size} marginRight={2} indeterminate />
        <Checkbox size={size} marginRight={2} indeterminate disabled />
        <Checkbox size={size} marginRight={2} label="This is the label" />
      </Wrapper>
    ))}
  </div>
);
