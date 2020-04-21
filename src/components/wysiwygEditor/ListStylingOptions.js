import React from 'react';

import Box from '../box';
import IconButton from '../iconButton';

const ListStylingOptions = ({
  config: {
    options,
    unordered: { icon: unorderedIcon },
    ordered: { icon: orderedIcon },
  },
  currentState,
  onChange,
}) => {
  const iconsByOptionType = {
    unordered: unorderedIcon,
    ordered: orderedIcon,
  };

  return (
    <Box display="flex" borderRightWidth={1} marginRight={2}>
      {options.map((optionType) => (
        <IconButton
          icon={iconsByOptionType[optionType]}
          color="black"
          key={optionType}
          title={optionType}
          onClick={() => onChange(optionType)}
          selected={currentState.listType === optionType}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

export default ListStylingOptions;
