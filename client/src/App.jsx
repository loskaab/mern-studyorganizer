import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { loadWebFonts } from 'styles/loadWebFonts';

import Layout from 'layouts/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
const Items = lazy(() => import('pages/Items/Items'));
const ItemDetails = lazy(() => import('pages/ItemDetails/ItemDetails'));
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
      {/* SharedLayout ???? */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDetails />} />
        {/* вложить все в роут Аус */}
        <Route path="auth/signin" element={<Signin />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="users" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
