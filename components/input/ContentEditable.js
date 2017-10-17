import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ContentEditable extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    className: PropTypes.string,
    editable: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    editable: true,
  };

  componentDidMount() {
    this.onBlur = this.emitChange(this.props.onBlur).bind(this);
    this.onChange = this.emitChange(this.props.onChange).bind(this);
    this.onFocus = this.emitChange(this.props.onFocus).bind(this);
  }

  sanitizeInput(value) {
    return value.replace(/^\s+|\s+$/g, '');
  }

  emitChange(eventHandler) {
    return event => {
      const value = this.sanitizeInput(event.target.innerText);
      eventHandler({
        target: {
          value,
        },
      });
    };
  }

  render() {
    return (
      <div
        className={this.props.className}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onInput={this.onChange}
        contentEditable={this.props.editable}
        suppressContentEditableWarning
        role="textbox"
        style={{ outline: 'none' }}
      >
        {this.props.children}
      </div>
    );
  }
}
