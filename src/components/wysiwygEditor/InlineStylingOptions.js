import React from 'react';

import Box from '../box';
import IconButton from '../iconButton';

const InlineStylingOptions = ({
  config: {
    options,
    bold: { icon: boldIcon },
    italic: { icon: italicIcon },
  },
  currentState,
  onChange,
}) => {
  const iconsByOptionType = {
    bold: boldIcon,
    italic: italicIcon,
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
          selected={currentState[optionType]}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

export default InlineStylingOptions;
