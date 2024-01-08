export const selectElements = state => state.elements.items;
export const selectElementGroups = state => state.elements.groups;
export const selectActiveElement = state => state.elements.active;
export const selectElementFilter = state => state.elements.filter;
export const selectElementSelect = state => state.elements.select;
export const selectElementTrash = state => state.elements.trash;

export const selectIsLoading = state => state.elements.isLoading;
export const selectError = state => state.elements.error;
