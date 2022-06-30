import { ElementProp } from './ElementProp';

export type PropsToOmit<C extends React.ElementType, P> = keyof (ElementProp<C> & P);
