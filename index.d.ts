declare module '@teamleader/ui' {
  import { ReactNode, RefObject, HTMLAttributes, CSSProperties } from 'react';

  type SpacingProps = {
    margin: Unit;
    marginTop: Unit;
    marginRight: Unit;
    marginBottom: Unit;
    marginLeft: Unit;
    marginVertical: Unit;
    marginHorizontal: Unit;
    padding: Unit;
    paddingTop: Unit;
    paddingRight: Unit;
    paddingBottom: Unit;
    paddingLeft: Unit;
    paddingVertical: Unit;
    paddingHorizontal: Unit;
  };

  type LayoutProps = Pick<CSSProperties, 'display' | 'position' | 'alignItems' | 'justifyContent'>;

  type BoxProps = HTMLAttributes<HTMLDivElement> &
    Partial<SpacingProps> &
    Partial<LayoutProps> & {
      ref?: RefObject<HTMLDivElement>;
      backgroundColor?: string;
      backgroundTint?: string;
      children?: ReactNode;
    };

  export const AdvancedCollapsible: React.ComponentType<any>;
  export const Avatar: React.ComponentType<any>;
  export const AvatarStack: React.ComponentType<any>;
  export const AsyncSelect: React.ComponentType<any>;
  export const Badge: React.ComponentType<any>;
  export const BadgedLink: React.ComponentType<any>;
  export const Banner: React.ComponentType<any>;
  export const InputBase: React.ComponentType<any>;
  export const Box: React.ComponentType<any>;
  export const Bullet: React.ComponentType<any>;
  export const Button: React.ComponentType<any>;
  export const ButtonGroup: React.ComponentType<any>;
  export const Checkbox: React.ComponentType<any>;
  export const Container: React.ComponentType<any>;
  export const Counter: React.ComponentType<any>;
  export const DataGrid: React.ComponentType<any> & {
    HeaderRowOverlay: React.ComponentType<any>;
    HeaderRow: React.ComponentType<any>;
    HeaderCell: React.ComponentType<any>;
    BodyRow: React.ComponentType<any>;
    Cell: React.ComponentType<any>;
    FooterRow: React.ComponentType<any>;
  };
  export const DatePicker: React.ComponentType<any>;
  export const DatePickerInput: React.ComponentType<any>;
  export const DatePickerInputRange: React.ComponentType<any>;
  export const DetailPage: React.ComponentType<any> & {
    Header: React.ComponentType<any>;
    Body: React.ComponentType<any>;
  };
  export const DetailPageBody: React.ComponentType<any>;
  export const DetailPageHeader: React.ComponentType<any>;
  export const Dialog: React.ComponentType<any>;
  export const DialogBase: React.ComponentType<any> & {
    Header: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    Footer: React.ComponentType<any>;
  };
  export const EmailSelector: React.ComponentType<any>;
  export const EmptyPassport: React.ComponentType<any>;
  export const EmptyState: React.ComponentType<any>;
  export const ErrorText: React.ComponentType<any>;
  export const FilterSelection: React.ComponentType<any>;
  export const Heading1: React.ComponentType<any>;
  export const Heading2: React.ComponentType<any>;
  export const Heading3: React.ComponentType<any>;
  export const Heading4: React.ComponentType<any>;
  export const Heading5: React.ComponentType<any>;
  export const HelpText: React.ComponentType<any>;
  export const Icon: React.ComponentType<any>;
  export const IconButton: React.ComponentType<any>;
  export const IconMenu: React.ComponentType<any>;
  export const Input: React.ComponentType<any>;
  export const Island: React.ComponentType<any>;
  export const IslandGroup: React.ComponentType<any>;
  export const Label: React.ComponentType<any>;
  export const LabelValuePair: React.ComponentType<any> & {
    Label: React.ComponentType<any>;
    Value: React.ComponentType<any>;
  };
  export const LabelValuePairGroup: React.ComponentType<any>;
  export const Link: React.ComponentType<any>;
  export const LoadingBar: React.ComponentType<any>;
  export const LoadingSpinner: React.ComponentType<any>;
  export const Marker: React.ComponentType<any>;
  export const MarketingButton: React.ComponentType<any>;
  export const MarketingLink: React.ComponentType<any>;
  export const MarketingLockBadge: React.ComponentType<any>;
  export const MarketingMarker: React.ComponentType<any>;
  export const MarketingStatusLabel: React.ComponentType<any>;
  export const MarketingHeading1: React.ComponentType<any>;
  export const MarketingHeading2: React.ComponentType<any>;
  export const MarketingTab: React.ComponentType<any>;
  export const Menu: React.ComponentType<any>;
  export const MenuItem: React.ComponentType<any>;
  export const MenuDivider: React.ComponentType<any>;
  export const MenuTitle: React.ComponentType<any>;
  export const Message: React.ComponentType<any>;
  export const Monospaced: React.ComponentType<any>;
  export const NumericInput: React.ComponentType<any>;
  export const Overlay: React.ComponentType<any>;
  export const OverviewPage: React.ComponentType<any>;
  export const OverviewPageBody: React.ComponentType<any>;
  export const OverviewPageHeader: React.ComponentType<any>;
  export const Passport: React.ComponentType<any>;
  export const Pagination: React.ComponentType<any>;
  export const Popover: React.ComponentType<any>;
  export const ProgressTracker: React.ComponentType<any>;
  export const PoweredByButton: React.ComponentType<any>;
  export const RadioButton: React.ComponentType<any>;
  export const RadioGroup: React.ComponentType<any>;
  export const Section: React.ComponentType<any>;
  export const Select: React.ComponentType<any>;
  export const SplitButton: React.ComponentType<any>;
  export const StatusLabel: React.ComponentType<any>;
  export const TextBody: React.ComponentType<any>;
  export const TextBodyCompact: React.ComponentType<any>;
  export const TextDisplay: React.ComponentType<any>;
  export const TextSmall: React.ComponentType<any>;
  export const TabGroup: React.ComponentType<any>;
  export const Tag: React.ComponentType<any>;
  export const Textarea: React.ComponentType<any>;
  export const TimeInput: React.ComponentType<any>;
  export const DurationInput: React.ComponentType<any>;
  export const Timer: React.ComponentType<any>;
  export const TitleTab: React.ComponentType<any>;
  export const Toast: React.ComponentType<any>;
  export const ToastContainer: React.ComponentType<any>;
  export const Toggle: React.ComponentType<any>;
  export const Tooltip: (component: React.ComponentType<any>) => React.ComponentType<any>;
  export const UITextDisplay: React.ComponentType<any>;
  export const UITextBody: React.ComponentType<any>;
  export const UITextSmall: React.ComponentType<any>;
  export const ValidationText: React.ComponentType<any>;
  export const Widget: React.ComponentType<any> & {
    Header: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    Footer: React.ComponentType<any>;
  };
  export const WysiwygEditor: React.ComponentType<any>;
  export const COLOR: Record<string, Record<string, string>>;
  export const COLORS: string[];
  export const TINTS: string[];
  export const colorsWithout: (...colorsToExclude: string[]) => string[];
  export const tintsWithout: (...tintsToExclude: string[]) => string[];
  export const SIZES: string[];
  export const sizesWithout: (...sizesToExclude: string[]) => string[];
  export const TINY: string;
  export const SMALL: string;
  export const MEDIUM: string;
  export const LARGE: string;
  export const FULLSCREEN: string;

  export type Unit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
