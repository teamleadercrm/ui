import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconBellMediumOutline } from '@teamleader/ui-icons';

import Banner from './Banner';
import { TextBody } from '../typography';

export default {
  component: Banner,
  title: 'Banner',
} as ComponentMeta<typeof Banner>;

const Wrapper: ComponentStory<typeof Banner> = ({ children }) => <div style={{ padding: '6px' }}>{children}</div>;

export const Main: ComponentStory<typeof Banner> = () => (
  <div>
    {(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'] as const).map((color) =>
      (['small', 'medium', 'large'] as const).map((size) => (
        <React.Fragment key={color + size}>
          <Wrapper>
            <Banner color={color} size={size}>
              <TextBody>
                {color} - {size}
              </TextBody>
            </Banner>
          </Wrapper>
          <Wrapper>
            <Banner color={color} size={size} fullWidth>
              <TextBody>
                {color} - {size} - full width
              </TextBody>
            </Banner>
          </Wrapper>
          <Wrapper>
            <Banner color={color} size={size} onClose={() => {}}>
              <TextBody>
                {color} - {size} - with onClose
              </TextBody>
            </Banner>
          </Wrapper>
          <Wrapper>
            <Banner color={color} size={size} onClose={() => {}} fullWidth>
              <TextBody>
                {color} - {size} - full width - with onClose
              </TextBody>
            </Banner>
          </Wrapper>
          <Wrapper>
            <Banner color={color} size={size} icon={<IconBellMediumOutline />}>
              <TextBody>
                {color} - {size} - with onClose
              </TextBody>
            </Banner>
          </Wrapper>
          <Wrapper>
            <Banner color={color} size={size} icon={<IconBellMediumOutline />} fullWidth>
              <TextBody>
                {color} - {size} - full width - with onClose
              </TextBody>
            </Banner>
          </Wrapper>
        </React.Fragment>
      )),
    )}
  </div>
);
