export type Value = string | number | Record<string, any>;

interface SimpleOption {
  label?: string;
  value: Value;
  [key: string]: any;
}
interface GroupedOption {
  label?: string;
  options: SimpleOption[];
}
export type Option = SimpleOption | GroupedOption;
