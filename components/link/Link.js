import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

let LinkComponent;

class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  static use (LinkComponentToUse) {
    LinkComponent = LinkComponentToUse;
  }

  render () {
    const {
      children,
      className,
    } = this.props;

    const classNames = cx(
      s['link'],
      className,
    );

    if (LinkComponent) {
      return <LinkComponent {...this.props} className={classNames} />;
    }

    return (
      <a {...this.props} className={classNames} data-teamleader-ui="link">
        {children}
      </a>
    );
  }
}

export default Link;
