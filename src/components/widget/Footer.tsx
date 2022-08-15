import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Island from '../island';

export interface FooterProps {
  /** The content to display inside the widget footer. */
  children?: ReactNode;
}

const Footer: GenericComponent<FooterProps> = ({ children, ...others }) => {
  return <Island {...others}>{children}</Island>;
};

export default Footer;
