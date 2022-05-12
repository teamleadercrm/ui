import { ReactElement, ReactNode } from 'react';

export default function isReactElement(element: ReactNode): element is ReactElement {
  if (!element) {
    return false;
  }

  const reactElement = element as ReactElement;
  return reactElement.type !== undefined && reactElement.key !== undefined;
}
