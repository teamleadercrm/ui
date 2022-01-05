import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Pagination, Button } from '../../index';

export default {
  component: Pagination,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Pagination'),
};

export const DefaultStory = (args) => (
  <Pagination {...args}>
    {({ number, text, isActive, ...others }) => {
      return <Button level="link" label={text} disabled={isActive} size="small" {...others} />;
    }}
  </Pagination>
);

DefaultStory.args = {
  currentPage: 3,
  numPages: 21,
};
