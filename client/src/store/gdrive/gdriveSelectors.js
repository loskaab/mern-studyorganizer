export const selectFiles = state => state.gdrive.files;
export const selectActiveFile = state => state.gdrive.active;
export const selectGdriveFilter = state => state.gdrive.filter;
export const selectGdriveSelect = state => state.gdrive.select;
export const selectGdriveCheck = state => state.gdrive.check;
export const selectGdriveTrash = state => state.gdrive.trash;

export const selectIsLoading = state => state.gdrive.isLoading;
export const selectError = state => state.gdrive.error;
