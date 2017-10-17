import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentEditable from './ContentEditable';
import Counter from '../counter';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    counter: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    selection: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    iconPlacement: 'left',
    placeholder: '',
    selection: true,
    size: 'medium',
  };

  state = {
    value: this.props.value,
    isFocussed: false,
  };

  constructor(args) {
    super(args);

    this.onBlur = this.handleBlur.bind(this);
    this.onFocus = this.handleFocus.bind(this);
  }

  changeHandler(eventHandler) {
    return event => {
      this.setState({ value: event.target.value });

      return eventHandler({
        target: {
          value: event.target.value,
        },
      });
    };
  }

  handleFocus() {
    this.setState({ isFocussed: true });

    return this.changeHandler(this.props.onFocus);
  }

  handleBlur() {
    this.setState({ isFocussed: false });

    return this.changeHandler(this.props.onBlur);
  }

  renderContent() {
    const { counter, disabled, onChange } = this.props;
    const props = {
      className: theme.content,
      editable: !disabled,
      onBlur: this.onBlur,
      onChange: this.changeHandler(onChange),
      onFocus: this.onFocus,
    };

    return (
      <ContentEditable {...props}>
        {this.props.value}{' '}
        {counter && (
          <span className={theme.counter} contentEditable={false}>
            <Counter count={counter} color="ruby" />
          </span>
        )}
      </ContentEditable>
    );
  }

  renderPlaceholder() {
    if (this.state.value === '') {
      return <div className={theme.placeholder}>{this.props.placeholder}</div>;
    }
  }

  render() {
    const { bold, className, disabled, icon, iconPlacement, selection, size } = this.props;
    const wrapperClasses = cx(theme.wrapper, theme[size], className, {
      [theme[`has-icon-${iconPlacement}`]]: icon,
    });
    const inputClasses = cx(theme.input, {
      [theme['is-focussed']]: this.state.isFocussed,
      [theme['is-disabled']]: disabled,
      [theme['is-not-selectable']]: !selection,
      [theme['is-bold']]: bold,
    });

    return (
      <div className={wrapperClasses}>
        {icon &&
          createElement(icon, {
            className: theme.icon,
          })}
        <div className={inputClasses}>
          {this.renderContent()}
          {this.renderPlaceholder()}
        </div>
      </div>
    );
  }
}
