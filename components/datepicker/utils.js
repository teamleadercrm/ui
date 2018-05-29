export const convertModifiersToClassnames = (modifiers, theme) => {
	if (!modifiers) {
		return;
	}

	const convertedModifiers = {};

	Object.keys(modifiers).forEach(key => {
		convertedModifiers[theme[key]] = modifiers[key];
	});

	return convertedModifiers;
};
