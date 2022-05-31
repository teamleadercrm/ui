import React from 'react';
import cx from 'classnames';

import theme from './theme.css';

const Grid = () => {
  const classNames = cx(theme['grid']);

  return <div className={classNames}>Grid</div>;
};

export default Grid;
