import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../../constants';
import PropsType from 'props-type';

const props = {
  /** The color of the component */
  color: PropTypes.oneOf(COLORS),
  /** The size of the component */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'fullscreen']),
  /** The tint of the component */
  tint: PropTypes.oneOf(TINTS),
  /** The css class of the component */
  className: PropTypes.string,
};

const defaultProps = {
  color: 'neutral',
  size: 'medium',
  tint: 'normal',
};

type Props = Partial<PropsType<typeof props, typeof defaultProps>>;
const withTheme = (theme) => (WrappedComponent): React.ComponentClass<Props> => {
  class WithTheme extends PureComponent<Props> {
    static propTypes = props;
    static defaultProps = defaultProps;

    render() {
      const { color, size, tint, className, ...others } = this.props;

      const classNames = cx(theme[`is-${color}`], theme[`is-${size}`], theme[`is-${tint}`], className);

      return <WrappedComponent className={classNames} {...others} />;
    }
  }

  (WithTheme as React.ComponentClass).displayName = `WithTheme(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithTheme;
};

export default withTheme;
