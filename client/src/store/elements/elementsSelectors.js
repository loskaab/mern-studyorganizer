export const selectElements = state => state.elements.items;
export const selectActiveElement = state => state.elements.activeItem;
export const selectFilterValue = state => state.elements.filter;

export const selectIsLoading = state => state.elements.isLoading;
export const selectError = state => state.elements.error;
