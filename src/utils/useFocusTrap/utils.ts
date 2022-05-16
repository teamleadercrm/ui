function attemptFocus(node: HTMLElement) {
  try {
    node.focus();
  } catch (exception) {
    return false;
  }

  return document.activeElement === node;
}

function isElement(node: Element | Node | null): node is Element {
  return (node as Element | null)?.children !== undefined;
}

export function isHTMLElement(node: HTMLElement | Node | null): node is HTMLElement {
  return (node as HTMLElement | null)?.focus !== undefined;
}

export const focusOnFirstDescendent = (node: Node | null): boolean => {
  if (isHTMLElement(node) && attemptFocus(node)) {
    return true;
  }

  return isElement(node) && Array.from(node.children).some((childNode) => focusOnFirstDescendent(childNode));
};

export const focusOnLastDescendent = (node: Node): boolean => {
  if (isHTMLElement(node) && attemptFocus(node)) {
    return true;
  }

  return (
    isElement(node) &&
    Array.from(node.children)
      .reverse()
      .some((childNode) => focusOnLastDescendent(childNode))
  );
};
