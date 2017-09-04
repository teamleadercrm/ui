import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';

class Toggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    teal: PropTypes.bool,
    mint: PropTypes.bool,
    violet: PropTypes.bool,
    ruby: PropTypes.bool,
    gold: PropTypes.bool,
    aqua: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    teal: false,
    mint: false,
    violet: false,
    ruby: false,
    gold: false,
    aqua: false,
  };

  constructor () {
    super(...arguments);
    this.handleToggle = ::this.handleToggle;
  }

  handleToggle () {
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, event);
    }
  };

  render () {
    const {
      checked,
      small,
      className,
      teal,
      mint,
      violet,
      ruby,
      gold,
      aqua,
    } = this.props;

    const classNames = cx(theme.toggle, className, {
      [theme.checked]: checked,
      [theme.small]: small,
      [theme.teal]: teal,
      [theme.mint]: mint,
      [theme.violet]: violet,
      [theme.ruby]: ruby,
      [theme.gold]: gold,
      [theme.aqua]: aqua,
    });

    return (
      <label data-teamleader-ui="toggle" className={classNames}>
        <input
          className={theme.input}
          type="checkbox"
          checked={checked}
          onClick={this.handleToggle}
          readOnly
        />
        <span className={theme.track}>
          <span className={theme.thumb} />
        </span>
      </label>
    );
  }
}

export default Toggle;
export { Toggle };
