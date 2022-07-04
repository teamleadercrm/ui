import { ReactElement } from 'react';

export default (node: unknown): node is ReactElement => {
  const element = node as ReactElement;
  return element.type !== undefined && element.props !== undefined;
};
