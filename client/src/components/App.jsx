import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
const Items = lazy(() => import('pages/Items/Items'));
const ItemDetails = lazy(() => import('pages/ItemDetails/ItemDetails'));
const Signin = lazy(() => import('pages/Signin/Signin'));
const Signup = lazy(() => import('pages/Signup/Signup'));
const UserProfile = lazy(() => import('pages/UserProfile/UserProfile'));

import loadWebFonts from 'styles/Fonts';

const App = () => {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDetails />} />
        <Route path="auth/signin" element={<Signin />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="users" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
