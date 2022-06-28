import { ReactElement } from 'react';

export interface GenericComponent<P = {}> {
  (props: P, context?: any): ReactElement<any, any> | null;
  displayName?: string | undefined;
}
