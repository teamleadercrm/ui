import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Pagination, Button } from '../../index';

export default {
  component: Pagination,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Pagination'),
};

export const Full = ({ inverse, ...args }) => (
  <Pagination inverse={inverse} {...args}>
    {({ number, text, isActive, ...others }) => {
      return <Button level="link" label={text} disabled={isActive} inverse={inverse} size="small" {...others} />;
    }}
  </Pagination>
);

Full.args = {
  currentPage: 3,
  nextPageText: 'next',
  numPages: 21,
  prevPageText: 'previous',
};

export const Compact = (args) => (
  <Pagination {...args}>
    {({ number, text, isActive, ...others }) => {
      return <Button level="link" label={text} disabled={isActive} size="small" {...others} />;
    }}
  </Pagination>
);

Compact.args = {
  currentPage: 3,
  numPages: 21,
};
