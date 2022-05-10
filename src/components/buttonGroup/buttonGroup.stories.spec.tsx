import React from 'react';

import ButtonGroup from './ButtonGroup';
import Button from '../button';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
};

const Wrapper = ({ children }) => <div style={{ minHeight: '60px' }}>{children}</div>;

export const Main = () => (
  <div>
    {['primary', 'secondary', 'destructive', 'timer'].map((level) =>
      ['small', 'medium', 'large'].map((size) => (
        <React.Fragment key={level + size}>
          <Wrapper>
            <ButtonGroup level={level} size={size}>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Wrapper>
          <Wrapper>
            <ButtonGroup level={level} size={size} segmented>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Wrapper>
          <Wrapper>
            <ButtonGroup level={level} size={size} value="two">
              <Button value="one">One</Button>
              <Button value="two">Two</Button>
              <Button value="three">Three</Button>
            </ButtonGroup>
          </Wrapper>
          <Wrapper>
            <ButtonGroup level={level} size={size} segmented value="two">
              <Button value="one">One</Button>
              <Button value="two">Two</Button>
              <Button value="three">Three</Button>
            </ButtonGroup>
          </Wrapper>
        </React.Fragment>
      )),
    )}
  </div>
);
