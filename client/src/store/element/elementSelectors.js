export const selectElements = state => state.elements.items;
export const selectElementGroups = state => state.elements.groups;
export const selectElementFilter = state => state.elements.filter;
export const selectActiveElement = state => state.elements.activeItem;

export const selectIsLoading = state => state.elements.isLoading;
export const selectError = state => state.elements.error;
