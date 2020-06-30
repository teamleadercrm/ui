import React from 'react';

import Box from '../box';
import IconButton from '../iconButton';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';

const TooltippedIconButton = Tooltip(IconButton);

const ListStylingOptions = ({
  config: {
    options,
    unordered: { icon: unorderedIcon },
    ordered: { icon: orderedIcon },
  },
  currentState,
  onChange,
  translations,
}) => {
  const iconsByOptionType = {
    unordered: unorderedIcon,
    ordered: orderedIcon,
  };

  return (
    <Box display="flex" borderRightWidth={1} marginRight={2}>
      {options.map((optionType) => (
        <TooltippedIconButton
          data-wysiwyg
          tooltip={<TextSmall>{translations[`components.controls.list.${optionType}`]}</TextSmall>}
          tooltipSize="small"
          tooltipShowDelay={1000}
          icon={iconsByOptionType[optionType]}
          color="black"
          key={optionType}
          onClick={() => onChange(optionType)}
          selected={currentState.listType === optionType}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

export default ListStylingOptions;
