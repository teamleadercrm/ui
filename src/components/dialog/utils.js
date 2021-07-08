const attemptFocus = (node) => {
  try {
    node.focus();
  } catch (exception) {
    return false;
  }

  return document.activeElement === node;
};

export const focusOnFirstDescendent = (node) => {
  if (attemptFocus(node)) {
    return true;
  }
  return Array.from(node.children).some((childNode) => focusOnFirstDescendent(childNode));
};

export const focusOnLastDescendent = (node) => {
  if (attemptFocus(node)) {
    return true;
  }

  return Array.from(node.children)
    .reverse()
    .some((childNode) => focusOnLastDescendent(childNode));
};
