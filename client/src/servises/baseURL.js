const { DEV, VITE_DEV_BACK_URL, VITE_PROD_BACK_URL } = import.meta.env;

export const baseURL = DEV ? `${VITE_DEV_BACK_URL}/api` : `${VITE_PROD_BACK_URL}/api`;
