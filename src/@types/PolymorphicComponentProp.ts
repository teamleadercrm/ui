import { ElementProp } from './ElementProp';
import { PropsToOmit } from './PropsToOmit';

export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & ElementProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
