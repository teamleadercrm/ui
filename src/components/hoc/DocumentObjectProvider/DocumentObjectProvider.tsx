import React, { PureComponent, createContext, ComponentType } from 'react';

export const Context = createContext<Document | null>(null);

const DocumentObjectProvider = <T extends Record<string, any>>(
  WrappedComponent: ComponentType<T>,
  documentRef?: Document,
) => {
  const Provider = class extends PureComponent<T> {
    static displayName = 'Provider';

    componentDidMount() {
      this.forceUpdate(); // force a re-render because we have the document ref now
    }

    render() {
      if (!documentRef) {
        return (
          <span
            style={{ display: 'none' }}
            ref={(node) => {
              if (!node) {
                return;
              }

              documentRef = node.ownerDocument;
            }}
          />
        );
      }

      return (
        <Context.Provider value={documentRef}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };

  return Provider;
};

export default DocumentObjectProvider;
