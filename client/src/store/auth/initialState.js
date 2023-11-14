export const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    verifiedEmail: null,
    accessToken: null,
    refreshToken: null,
  },

  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};
