import React, { ReactNode } from 'react';

import Checkbox, { AllowedCheckboxSize } from '../Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div style={{ minHeight: '60px', display: 'flex' }}>{children}</div>
);

const sizeList: AllowedCheckboxSize[] = ['small', 'medium', 'large'];
export const Main = () => (
  <div>
    {sizeList.map((size) => (
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
