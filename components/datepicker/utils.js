export const convertModifiersToClassnames = (modifiers, theme) => {
  if (!modifiers) {
    return;
  }

  return Object.keys(modifiers).reduce((convertedModifiers, key) => {
    return {
      ...convertedModifiers,
      [theme[key]]: modifiers[key],
    };
  }, {});
};
