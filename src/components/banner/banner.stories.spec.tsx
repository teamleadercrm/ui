import React from 'react';
import { IconBellMediumOutline } from '@teamleader/ui-icons';

import Banner from './Banner';
import { TextBody } from '../typography';

export default {
  component: Banner,
  title: 'Banner',
};

const Wrapper = ({ children }) => <div style={{ padding: '6px' }}>{children}</div>;

export const Main = () => (
  <div>
    {['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'].map((color) =>
      ['small', 'medium', 'large'].map((size) => (
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
