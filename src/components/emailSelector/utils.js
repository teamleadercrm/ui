export function selectContentEditable(element) {
  element.focus();

  // Move the cursor to the end.
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();

    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.addRange(range);
  }
}

