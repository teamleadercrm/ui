import { PolymorphicComponentProp } from './PolymorphicComponentProp';
import { PolymorphicRef } from './PolymorphicRef';

export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<
  C,
  Props
> & { ref?: PolymorphicRef<C> };
