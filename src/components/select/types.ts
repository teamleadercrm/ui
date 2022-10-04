export type Value = any;

export type Option<V = Value> = {
  label: string;
  value: V;
  [key: string]: any;
};
