export interface Suggestion {
  email: string;
  id?: string;
  label?: string;
  valid?: boolean;
}

export type Suggestions = Suggestion[] | Record<string, Suggestion[]>;
