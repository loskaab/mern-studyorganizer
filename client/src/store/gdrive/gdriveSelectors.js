export const selectGdriveFiles = state => state.gdrive.files;
export const selectActiveFile = state => state.gdrive.active;
export const selectGdriveFolders = state => state.gdrive.folders;
export const selectGdriveFilter = state => state.gdrive.filter;
export const selectGdriveSelect = state => state.gdrive.select;
export const selectGdriveTrash = state => state.gdrive.trash;

export const selectIsLoading = state => state.gdrive.isLoading;
export const selectError = state => state.gdrive.error;
