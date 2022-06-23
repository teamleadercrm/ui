import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Pagination, Button } from '../../index';

export default {
  component: Pagination,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Pagination'),
};

export const DefaultStory = (args) => {
  const [page, setPage] = useState(1);
  return (
    <Pagination {...args} currentPage={page}>
      {({ number, text, isActive, ...others }) => {
        return (
          <Button
            level="link"
            label={text}
            disabled={isActive}
            size="small"
            {...others}
            onClick={() => setPage(number)}
          />
        );
      }}
    </Pagination>
  );
};

DefaultStory.args = {
  currentPage: 3,
  numPages: 21,
};
