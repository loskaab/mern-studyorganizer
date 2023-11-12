import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from 'layouts/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import { loadWebFonts } from 'styles/loadWebFonts';

const Cluster = lazy(() => import('pages/Cluster/Cluster'));
const ClusterElement = lazy(() => import('pages/ClusterElement/ClusterElement'));
const Profile = lazy(() => import('pages/Profile/Profile'));
const Signin = lazy(() => import('pages/Sign/Signin'));
const Signup = lazy(() => import('pages/Sign/Signup'));
const UserProfile = lazy(() => import('pages/Profile/Profile'));

// const { MODE, PROD, DEV, BASE_URL, VITE_BASE_URL_DEV, VITE_BASE_URL_PROD } = import.meta.env;

const App = () => {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cluster" element={<Cluster />} />
        <Route path="cluster/:id" element={<ClusterElement />} />
        <Route path="profile" element={<Profile />} />
        <Route path="auth/signin" element={<Signin />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="users" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
