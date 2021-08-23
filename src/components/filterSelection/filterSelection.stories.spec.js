import React from 'react';

import { FilterSelection, Box } from '../..';
import { Status } from './FilterSelection';

export default {
  component: FilterSelection,
  title: 'FilterSelection',
};

const Wrapper = ({ ...props }) => <div style={{ minHeight: '50px', display: 'flex' }} {...props} />;

export const Main = () => (
  <div>
    {Object.keys(Status).map((status) => (
      <Wrapper key={status}>
        <Box marginRight={2}>
          <FilterSelection status={Status[status]} label={Status[status]} onClick={() => {}} />
        </Box>
        <Box marginRight={2}>
          <FilterSelection status={Status[status]} label={Status[status]} onClick={() => {}} applied />
        </Box>
        <Box marginRight={2}>
          <FilterSelection
            status={Status[status]}
            label={Status[status]}
            onClick={() => {}}
            applied
            amountApplied={3}
          />
        </Box>
      </Wrapper>
    ))}
  </div>
);
