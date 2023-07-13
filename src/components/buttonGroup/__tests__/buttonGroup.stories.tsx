import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonGroup from '../ButtonGroup';
import Button from '../../button';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
} as ComponentMeta<typeof ButtonGroup>;

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ minHeight: '60px' }}>{children}</div>;

export const Main: ComponentStory<typeof ButtonGroup> = () => (
  <div>
    {(['primary', 'secondary', 'destructive', 'timer'] as const).map((level) =>
      (['small', 'medium', 'large'] as const).map((size) => (
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
