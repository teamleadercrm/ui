export type Value = any;

export interface Option<V = Value> {
  label: string;
  value: V;
  [key: string]: any;
}
