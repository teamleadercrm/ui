import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent, createContext } from 'react';
export var Context = createContext();

var DocumentObjectProvider = function DocumentObjectProvider(WrappedComponent) {
  return (
    /*#__PURE__*/
    (function(_PureComponent) {
      _inherits(_class, _PureComponent);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.forceUpdate(); // force a re-render because we have the document ref now
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this = this;

            if (!this.documentRef) {
              return React.createElement('span', {
                style: {
                  display: 'none',
                },
                ref: function ref(node) {
                  if (!node) {
                    return;
                  }

                  _this.documentRef = node.ownerDocument;
                },
              });
            }

            return React.createElement(
              Context.Provider,
              {
                value: this.documentRef,
              },
              React.createElement(WrappedComponent, this.props),
            );
          },
        },
      ]);

      return _class;
    })(PureComponent)
  );
};

export default DocumentObjectProvider;
