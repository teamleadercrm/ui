import React, { PureComponent, createContext, ComponentType } from 'react';

export const Context = createContext({});

const DocumentObjectProvider = (WrappedComponent: ComponentType, documentRef: Document) => {
  const Provider = class extends PureComponent {
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
