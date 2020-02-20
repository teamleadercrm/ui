declare module '@teamleader/ui' {
  import { ReactNode, RefObject, HTMLAttributes, CSSProperties } from 'react';

  enum Color {
    aqua = 'aqua',
    gold = 'gold',
    neutral = 'neutral',
    mint = 'mint',
    ruby = 'ruby',
    teal = 'teal',
    violet = 'violet',
  }

  enum Tint {
    lightest = 'lightest',
    light = 'light',
    normal = 'normal',
    dark = 'dark',
    darkest = 'darkest',
  }

  enum Size {
    'tiny' = 'tiny',
    'small' = 'small',
    'medium' = 'medium',
    'large' = 'large',
    'hero' = 'hero',
  }

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

  enum BorderRadius {
    square = 'square',
    circle = 'circle',
    rounded = 'rounded',
  }

  type BorderProps = {
    borderWidth: number;
    borderBottomWidth: number;
    borderLeftWidth: number;
    borderRightWidth: number;
    borderTopWidth: number;
    borderColor: keyof typeof Color;
    borderTint: keyof typeof Tint;
    borderRadius: keyof typeof BorderRadius;
    borderTopLeftRadius: keyof typeof BorderRadius;
    borderTopRightRadius: keyof typeof BorderRadius;
    borderBottomLeftRadius: keyof typeof BorderRadius;
    borderBottomRightRadius: keyof typeof BorderRadius;
  };

  type LayoutProps = Pick<
    CSSProperties,
    | 'boxSizing'
    | 'display'
    | 'position'
    | 'alignContent'
    | 'alignItems'
    | 'alignSelf'
    | 'justifyContent'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'justifyContent'
    | 'order'
    | 'overflow'
    | 'overflowX'
    | 'overflowY'
    | 'textAlign'
  >;

  /**
   * @TODO Record<string, any> should be something like HTMLAttributes<element>
   * and be based on the element property, not sure how to create
   * a dynamic type like that
   */
  type BoxProps = Record<string, any> &
    Partial<SpacingProps> &
    Partial<LayoutProps> &
    Partial<BorderProps> & {
      ref?: RefObject<{ boxNode: RefObject<HTMLDivElement> }>;
      backgroundColor?: keyof typeof Color;
      backgroundTint?: keyof typeof Tint;
      children?: ReactNode;
      element?: ReactNode;
    };

  type AdvancedCollapsibleProps = BoxProps & {
    color?: Color.neutral | Color.teal;
    children?: ReactNode;
    title: string;
    size?: Size.small | Size.medium | Size.large;
  };
  export function AdvancedCollapsible(props: AdvancedCollapsibleProps): JSX.Element;

  type AvatarProps = BoxProps & {
    children?: ReactNode;
    className?: string;
    creatable?: boolean;
    editable?: boolean;
    imageUrl?: string;
    fullName?: string | null;
    id?: string;
    onClick?: Pick<BoxProps, 'onClick'>;
    onImageChange?: () => void;
    selected?: boolean;
    shape?: 'circle' | 'rounded';
    size?: keyof typeof Size;
  };
  export function Avatar(props: AvatarProps): JSX.Element;

  type AvatarStackProps = {
    children: ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
    displayMax?: number;
    inverse?: boolean;
    onOverflowClick?: React.MouseEvent<HTMLDivElement, 'onclick'>;
    size?: keyof typeof Size;
  };
  export function AvatarStack(props: AvatarStackProps): JSX.Element;

  type AsyncSelectProps = {
    loadOptions: (searchTerm: string, pageSize?: number, pageNumber?: number) => void;
    onMenuScrollToBottom?: () => void;
    onInputChange?: (term: string) => void;
    paginate?: boolean;
    pageSize?: number;
    cacheOptions?: boolean;
  };
  export function AsyncSelect(props: AsyncSelectProps): JSX.Element;

  type Badge = BoxProps & {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: ReactNode;
    iconPlacement?: 'left' | 'right';
    inherit?: boolean;
    inverse?: boolean;
    onMouseLeave?: Pick<BoxProps, 'onMouseLeave'>;
    onMouseUp?: Pick<BoxProps, 'onMouseUp'>;
    color?: Exclude<Color, Color.teal>;
  };
  export function Badge(props: Badge): JSX.Element;

  type BannerProps = BoxProps & {
    children: ReactNode;
    className?: string;
    color?: keyof typeof Color;
    icon?: ReactNode;
    onClose?: Pick<BoxProps, 'onClick'>;
    fullWidth?: boolean;
  };
  export function Banner(props: BannerProps): JSX.Element;
  export function Box(props: BoxProps): any;
  export function Bullet(props: any): any;
  export function Button(props: any): any;
  export function ButtonGroup(props: any): any;
  export function Checkbox(props: any): any;
  export function CompactMessage(props: any): any;
  export function Counter(props: any): any;
  export function DataGrid(props: any): any;
  export function DatePicker(props: any): any;
  export function DatePickerInput(props: any): any;
  export function DatePickerRange(props: any): any;
  export function DatePickerInputRange(props: any): any;
  export function Dialog(props: any): any;
  export function DialogBase(props: any): any;
  export function EmptyPassport(props: any): any;
  export function ErrorText(props: any): any;
  export function Heading1(props: any): any;
  export function Heading2(props: any): any;
  export function Heading3(props: any): any;
  export function Heading4(props: any): any;
  export function Heading5(props: any): any;
  export function HelpText(props: any): any;
  export function Icon(props: any): any;
  export function IconButton(props: any): any;
  export function IconMenu(props: any): any;
  export function IconTab(props: any): any;
  export function Input(props: any): any;
  export function InputBase(props: any): any;
  export function Island(props: any): any;
  export function IslandGroup(props: any): any;
  export function Label(props: any): any;
  export function Link(props: any): any;
  export function LoadingBar(props: any): any;
  export function LoadingMolecule(props: any): any;
  export function LoadingSpinner(props: any): any;
  export function Menu(props: any): any;
  export function MenuItem(props: any): any;
  export function MenuDivider(props: any): any;
  export function MenuTitle(props: any): any;
  export function Message(props: any): any;
  export function Monospaced(props: any): any;
  export function NumericInput(props: any): any;
  export function Overlay(props: any): any;
  export function Passport(props: any): any;
  export function Pagination(props: any): any;
  export function Popover(props: any): any;
  export function ProgressTracker(props: any): any;
  export function RadioButton(props: any): any;
  export function RadioGroup(props: any): any;
  export function ScrollContainer(props: any): any;
  export function Section(props: any): any;
  export function Select(props: any): any;
  export function SplitButton(props: any): any;
  export function StatusBullet(props: any): any;
  export function StatusLabel(props: any): any;
  export function TextBody(props: any): any;
  export function TextBodyCompact(props: any): any;
  export function TextDisplay(props: any): any;
  export function TextSmall(props: any): any;
  export function TabGroup(props: any): any;
  export function Tag(props: any): any;
  export function Textarea(props: any): any;
  export function TimeInput(props: any): any;
  export function TimerPulser(props: any): any;
  export function TitleTab(props: any): any;
  export function Toast(props: any): any;
  export function ToastContainer(props: any): any;
  export function Toggle(props: any): any;
  export function Tooltip(props: any): any;
  export function ValidationText(props: any): any;
  export function Widget(props: any): any;
  export function QTip(props: any): any;
  export const COLOR: any;
  export const COLORS: any;
  export const TINTS: any;
  export function colorsWithout(color: any): any;
  export function tintsWithout(color: any): any;
  export const SIZES: any;
  export function sizesWithout(color: any): any;
  export const TINY: any;
  export const SMALL: any;
  export const MEDIUM: any;
  export const LARGE: any;
  export const FULLSCREEN: any;

  export type Unit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
