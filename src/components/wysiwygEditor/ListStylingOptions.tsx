import React, { ReactNode } from 'react';

import { GenericComponent } from '../../@types/types';
import Box from '../box';
import IconButton from '../iconButton';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';

const TooltippedIconButton = Tooltip(IconButton);
interface ListStylingOptionsProps {
  config: {
    options: string[];
    unordered: {
      icon: ReactNode;
    };
    ordered: {
      icon: ReactNode;
    };
    defaultTargetOption: string;
  };
  currentState: {
    listType: string;
  };
  onChange: (value: string) => void;
  translations: Record<string, string>;
}
const ListStylingOptions: GenericComponent<ListStylingOptionsProps> = ({
  config: {
    options,
    unordered: { icon: unorderedIcon },
    ordered: { icon: orderedIcon },
  },
  currentState,
  onChange,
  translations,
}) => {
  const iconsByOptionType: Record<string, ReactNode> = {
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
          color="teal"
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
