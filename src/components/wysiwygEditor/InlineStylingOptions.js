import React from 'react';

import Box from '../box';
import IconButton from '../iconButton';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';
import getOS, { OS_TYPES } from '../../utils/getOS';

const TooltippedIconButton = Tooltip(IconButton);

const OPERATING_SYSTEM = getOS();

const TooltipMessage = ({ optionType }) => {
  const isMacOS = OPERATING_SYSTEM === OS_TYPES.MAC_OS;
  const shortcutsByOptionType = {
    bold: {
      name: 'Bold',
      shortcut: isMacOS ? '⌘ Cmd + B' : 'Ctrl + B',
    },
    italic: {
      name: 'Italic',
      shortcut: isMacOS ? '⌘ Cmd + I' : 'Ctrl + I',
    },
  };

  return (
    <>
      <TextSmall>
        <strong>{shortcutsByOptionType[optionType].name}</strong>
      </TextSmall>
      <TextSmall color="neutral">{shortcutsByOptionType[optionType].shortcut}</TextSmall>
    </>
  );
};

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
        <TooltippedIconButton
          tooltip={<TooltipMessage optionType={optionType} />}
          tooltipSize="small"
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
