import React from 'react';
import { IconBuildingSmallOutline, IconBuildingMediumOutline } from '@teamleader/ui-icons';

import Badge from './Badge';

export default {
  component: Badge,
  title: 'Badge',
};

const Wrapper = ({ children }) => <div style={{ minHeight: '50px', padding: '6px', display: 'flex' }}>{children}</div>;
const Spacer = () => <div style={{ width: '12px' }} />;

export const Main = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <Wrapper key={size}>
        <Badge size={size}>{size}</Badge>
        <Spacer />
        <Badge size={size} selected>
          {size} selected
        </Badge>
        <Spacer />
        <Badge size={size} disabled>
          {size} disabled
        </Badge>
        <Spacer />
        <Badge
          size={size}
          icon={size === 'large' ? <IconBuildingMediumOutline /> : <IconBuildingSmallOutline />}
          style={{ marginRight: '12px' }}
        >
          {size} icon left
        </Badge>
        <Spacer />
        <Badge
          size={size}
          icon={size === 'large' ? <IconBuildingMediumOutline /> : <IconBuildingSmallOutline />}
          iconPlacement="right"
          style={{ marginRight: '12px' }}
        >
          {size} icon right
        </Badge>
      </Wrapper>
    ))}
  </div>
);
