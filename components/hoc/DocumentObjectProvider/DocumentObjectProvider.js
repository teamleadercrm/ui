import React, { PureComponent, createContext } from 'react';

export const Context = createContext();

const DocumentObjectProvider = WrappedComponent => {
  return class extends PureComponent {
    componentDidMount() {
      this.forceUpdate(); // force a re-render because we have the document ref now
    }

    render() {
      if (!this.documentRef) {
        return (
          <span
            style={{ display: 'none' }}
            ref={node => {
              if (!node) {
                return;
              }

              this.documentRef = node.ownerDocument;
            }}
          />
        );
      }

      return (
        <Context.Provider value={this.documentRef}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };
};

export default DocumentObjectProvider;
