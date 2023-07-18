import React, { useState } from 'react';
import { Pagination, Button } from '../../index';
import { ComponentStory } from '@storybook/react';

export default {
  component: Pagination,
  title: 'Mid level blocks / Pagination',
};

export const DefaultStory = (args: ComponentStory<typeof Pagination>) => {
  const [page, setPage] = useState<number>(1);

  return (
    <Pagination {...args} numPages={21} currentPage={page}>
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
