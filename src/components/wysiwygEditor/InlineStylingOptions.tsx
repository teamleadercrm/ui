import React, { ReactNode } from 'react';

import { GenericComponent } from '../../@types/types';
import getOS, { OS_TYPES } from '../../utils/getOS';
import Box from '../box';
import IconButton from '../iconButton';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';

const TooltippedIconButton = Tooltip(IconButton);

const OPERATING_SYSTEM = getOS();

const TooltipMessage = ({ optionType, name }: { optionType: string; name: string }) => {
  const isMacOS = OPERATING_SYSTEM === OS_TYPES.MAC_OS;
  const shortcutsByOptionType: Record<string, any> = {
    bold: {
      shortcut: isMacOS ? '⌘ Cmd + B' : 'Ctrl + B',
    },
    italic: {
      shortcut: isMacOS ? '⌘ Cmd + I' : 'Ctrl + I',
    },
  };

  return (
    <>
      <TextSmall>{name}</TextSmall>
      <TextSmall color="neutral">{shortcutsByOptionType[optionType].shortcut}</TextSmall>
    </>
  );
};

interface InlineStylingOptionsProps {
  config: {
    options: string[];
    bold: {
      icon: ReactNode;
    };
    italic: {
      icon: ReactNode;
    };
  };
  currentState: Record<string, boolean>;
  onChange: (value: string) => void;
  translations: Record<string, string>;
}

const InlineStylingOptions: GenericComponent<InlineStylingOptionsProps> = ({
  config: {
    options,
    bold: { icon: boldIcon },
    italic: { icon: italicIcon },
  },
  currentState,
  onChange,
  translations,
}) => {
  const iconsByOptionType: Record<string, ReactNode> = {
    bold: boldIcon,
    italic: italicIcon,
  };

  return (
    <Box display="flex" borderRightWidth={1} marginRight={2}>
      {options.map((optionType) => (
        <TooltippedIconButton
          data-wysiwyg
          tooltip={
            <TooltipMessage optionType={optionType} name={translations[`components.controls.inline.${optionType}`]} />
          }
          tooltipSize="small"
          tooltipShowDelay={1000}
          icon={iconsByOptionType[optionType]}
          color="teal"
          key={optionType}
          onClick={() => onChange(optionType)}
          selected={currentState[optionType]}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

export default InlineStylingOptions;
