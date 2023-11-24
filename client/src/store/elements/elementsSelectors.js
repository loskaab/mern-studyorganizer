export const selectElements = state => state.elements.items;
export const selectElementsGroups = state => state.elements.groups;
export const selectElementsFilter = state => state.elements.filter;
export const selectActiveElement = state => state.elements.activeItem;

export const selectIsLoading = state => state.elements.isLoading;
export const selectError = state => state.elements.error;
