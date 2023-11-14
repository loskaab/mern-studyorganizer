import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from 'layouts/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import { loadWebFonts } from 'styles/loadWebFonts';

const SignupPage = lazy(() => import('pages/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const ClusterPage = lazy(() => import('pages/ClusterPage'));
const ClusterElemPage = lazy(() => import('pages/ClusterElemPage'));

// const { MODE, PROD, DEV, BASE_URL, VITE_APP_DEV_BACK_URL, VITE__APP_PROD_BACK_URL } = import.meta.env;

const App = () => {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="cluster" element={<ClusterPage />} />
        <Route path="cluster/:id" element={<ClusterElemPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
