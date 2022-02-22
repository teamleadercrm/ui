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

function filterArraySuggestions(filter, suggestions) {
  const lowerFilter = filter.toLowerCase();

  return suggestions.filter(
    (suggestion) =>
      suggestion.email !== filter &&
      (suggestion.email.toLowerCase().includes(lowerFilter) || suggestion.label?.toLowerCase().includes(lowerFilter)),
  );
}

export function filterSuggestions(filter, suggestions, maxLength = 5) {
  if (Array.isArray(suggestions)) {
    return filterArraySuggestions(filter, suggestions).slice(0, maxLength);
  }

  const filteredSuggestions = {};
  for (const key in suggestions) {
    const result = filterArraySuggestions(filter, suggestions[key]).slice(0, maxLength);
    if (result.length > 0) {
      filteredSuggestions[key] = result;
    }
  }
  return filteredSuggestions;
}

