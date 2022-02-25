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

function excludeArraySuggestions(filter, suggestions) {
  return suggestions.filter((suggestion) => !filter.includes(suggestion.email));
}

export function excludeSuggestions(filter, suggestions) {
  const emails = filter.map((option) => option.email);

  if (Array.isArray(suggestions)) {
    return excludeArraySuggestions(emails, suggestions);
  }

  const filteredSuggestions = {};
  for (const key in suggestions) {
    const result = excludeArraySuggestions(emails, suggestions[key]);
    if (result.length > 0) {
      filteredSuggestions[key] = result;
    }
  }
  return filteredSuggestions;
}

export function validateSuggestion(filter, suggestion) {
  const lowerFilter = filter.toLowerCase();

  return (
    suggestion.email !== filter &&
    (suggestion.email.toLowerCase().includes(lowerFilter) ||
      (suggestion.label?.toLowerCase().includes(lowerFilter) ?? false))
  );
}

export function moveSuggestion(suggestions, selectedSuggestion, moveBy) {
  if (Array.isArray(suggestions)) {
    const index = suggestions.indexOf(selectedSuggestion);

    if (suggestions[index + moveBy]) {
      return suggestions[index + moveBy];
    }

    return suggestions[moveBy > 0 ? 0 : suggestions.length - 1] ?? null;
  }

  const keys = Object.keys(suggestions);
  if (keys.length === 0) {
    return null;
  }

  for (let i = 0; i < keys.length; i++) {
    const group = suggestions[keys[i]];
    const index = group.indexOf(selectedSuggestion);
    if (index === -1) {
      continue;
    }

    if (group[index + moveBy]) {
      return group[index + moveBy];
    }

    const nextGroup = suggestions[keys[i + moveBy]];
    if (nextGroup) {
      return nextGroup[moveBy > 0 ? 0 : nextGroup.length - 1];
    }
    break;
  }

  const group = suggestions[keys[moveBy > 0 ? 0 : keys.length - 1]];
  return group[moveBy > 0 ? 0 : group.length - 1] ?? null;
}