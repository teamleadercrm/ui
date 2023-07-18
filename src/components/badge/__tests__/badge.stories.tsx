import { IconBuildingMediumOutline, IconBuildingSmallOutline } from '@teamleader/ui-icons';
import React, { ReactNode } from 'react';

import Badge, { AllowedBadgeSize } from '../Badge';

export default {
  component: Badge,
  title: 'Badge',
};

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div style={{ minHeight: '50px', padding: '6px', display: 'flex' }}>{children}</div>
);
const Spacer = () => <div style={{ width: '12px' }} />;

const sizeList: AllowedBadgeSize[] = ['small', 'medium', 'large'];

export const Main = () => (
  <div>
    {sizeList.map((size) => (
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
