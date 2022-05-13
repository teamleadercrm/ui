import { Suggestion, Suggestions } from './types';

export function selectContentEditable(element: HTMLElement) {
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

function filterArraySuggestions(filter: string, suggestions: Suggestion[]) {
  const lowerFilter = filter.toLowerCase();

  return suggestions.filter(
    (suggestion) =>
      suggestion.email !== filter &&
      (suggestion.email.toLowerCase().includes(lowerFilter) || suggestion.label?.toLowerCase().includes(lowerFilter)),
  );
}

export function filterSuggestions(filter: string, suggestions: Suggestions, maxLength = 5) {
  if (Array.isArray(suggestions)) {
    return filterArraySuggestions(filter, suggestions).slice(0, maxLength);
  }

  const filteredSuggestions: { [x: string]: Suggestion[] } = {};
  for (const key in suggestions) {
    const result = filterArraySuggestions(filter, suggestions[key]).slice(0, maxLength);
    if (result.length > 0) {
      filteredSuggestions[key] = result;
    }
  }
  return filteredSuggestions;
}

function excludeArraySuggestions(filter: string[], suggestions: Suggestion[]) {
  return suggestions.filter((suggestion) => !filter.includes(suggestion.email));
}

export function excludeSuggestions(filter: Suggestion[], suggestions: Suggestions) {
  const emails = filter.map((option) => option.email);

  if (Array.isArray(suggestions)) {
    return excludeArraySuggestions(emails, suggestions);
  }

  const filteredSuggestions: { [x: string]: Suggestion[] } = {};
  for (const key in suggestions) {
    const result = excludeArraySuggestions(emails, suggestions[key]);
    if (result.length > 0) {
      filteredSuggestions[key] = result;
    }
  }
  return filteredSuggestions;
}

export function validateSuggestion(filter: string, suggestion: Suggestion) {
  const lowerFilter = filter.toLowerCase();

  return (
    suggestion.email !== filter &&
    (suggestion.email.toLowerCase().includes(lowerFilter) ||
      (suggestion.label?.toLowerCase().includes(lowerFilter) ?? false))
  );
}

export function moveSuggestion(suggestions: Suggestions, selectedSuggestion: Suggestion | null, moveBy: number) {
  if (Array.isArray(suggestions)) {
    const index = selectedSuggestion ? suggestions.indexOf(selectedSuggestion) : -1;

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
    const index = selectedSuggestion ? group.indexOf(selectedSuggestion) : -1;
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
