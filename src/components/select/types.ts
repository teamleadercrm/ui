import {
  ClearIndicatorProps,
  ContainerProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  GroupHeadingProps,
  GroupProps,
  IndicatorsContainerProps,
  IndicatorSeparatorProps,
  InputProps,
  LoadingIndicatorProps,
  MenuListProps,
  MenuProps,
  MultiValueGenericProps,
  MultiValueProps,
  MultiValueRemoveProps,
  NoticeProps,
  OptionProps,
  PlaceholderProps,
  SingleValueProps,
  ValueContainerProps,
} from 'react-select';
import { CrossIconProps, DownChevronProps } from 'react-select/dist/declarations/src/components/indicators';
import { MenuPortalProps } from 'react-select/dist/declarations/src/components/Menu';

export type Value = any;

export interface Option<V = Value> {
  label: string;
  value: V;
  [key: string]: any;
}

export interface GroupOption<O = Option> extends GroupBase<O> {}
export interface SelectComponentsProps<
  OptionType extends Option = Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<OptionType> = GroupBase<OptionType>,
> {
  ClearIndicator: ClearIndicatorProps<OptionType, IsMulti, Group>;
  Control: ControlProps<OptionType, IsMulti, Group>;
  DropdownIndicator: DropdownIndicatorProps<OptionType, IsMulti, Group> | null;
  DownChevron: DownChevronProps;
  CrossIcon: CrossIconProps;
  Group: GroupProps<OptionType, IsMulti, Group>;
  GroupHeading: GroupHeadingProps<OptionType, IsMulti, Group>;
  IndicatorsContainer: IndicatorsContainerProps<OptionType, IsMulti, Group>;
  IndicatorSeparator: IndicatorSeparatorProps<OptionType, IsMulti, Group> | null;
  Input: InputProps<OptionType, IsMulti, Group>;
  LoadingIndicator: LoadingIndicatorProps<OptionType, IsMulti, Group>;
  Menu: MenuProps<OptionType, IsMulti, Group>;
  MenuList: MenuListProps<OptionType, IsMulti, Group>;
  MenuPortal: MenuPortalProps<OptionType, IsMulti, Group>;
  LoadingMessage: NoticeProps<OptionType, IsMulti, Group>;
  NoOptionsMessage: NoticeProps<OptionType, IsMulti, Group>;
  MultiValue: MultiValueProps<OptionType, IsMulti, Group>;
  MultiValueContainer: MultiValueGenericProps<OptionType, IsMulti, Group>;
  MultiValueLabel: MultiValueGenericProps<OptionType, IsMulti, Group>;
  MultiValueRemove: MultiValueRemoveProps<OptionType, IsMulti, Group>;
  Option: OptionProps<OptionType, IsMulti, Group>;
  Placeholder: PlaceholderProps<OptionType, IsMulti, Group>;
  SelectContainer: ContainerProps<OptionType, IsMulti, Group>;
  SingleValue: SingleValueProps<OptionType, IsMulti, Group>;
  ValueContainer: ValueContainerProps<OptionType, IsMulti, Group>;
}
