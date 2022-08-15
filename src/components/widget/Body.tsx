import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Island from '../island';

export interface BodyProps {
  /** The content to display inside the widget body. */
  children?: ReactNode;
}

const Body: GenericComponent<BodyProps> = ({ children, ...others }) => {
  return <Island {...others}>{children}</Island>;
};

export default Body;
