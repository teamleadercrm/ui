import { IconAddSmallOutline } from '@teamleader/ui-icons';
import React from 'react';
import BadgedLink from '../badgedLink';

export default {
  component: BadgedLink,
  title: 'BadgedLink',
};

export const Main = () => <BadgedLink icon={<IconAddSmallOutline />}>I am a badged link</BadgedLink>;
