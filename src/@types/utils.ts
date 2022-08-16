export type ElementProp<C extends React.ElementType> = {
  element?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (ElementProp<C> & P);

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & ElementProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropsWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProps<
  C,
  Props
> & { ref?: PolymorphicRef<C> };
