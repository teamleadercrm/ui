import { IconAddSmallOutline } from '@teamleader/ui-icons';
import React from 'react';
import BadgedLink from '../BadgedLink';

export default {
  component: BadgedLink,
  title: 'BadgedLink',
};

export const Main = () => (
  <BadgedLink inherit={false} icon={<IconAddSmallOutline />} href="https://www.teamleader.be" target="_blank">
    I am a badged link
  </BadgedLink>
);
