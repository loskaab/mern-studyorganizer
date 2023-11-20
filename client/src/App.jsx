import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { loadWebFonts } from 'styles/loadWebFonts';
import { refreshUserThunk } from 'store/auth/authThunks';
import { useAuth } from 'utils/hooks/useAuth';
import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

import Toast from 'components/shared/Toast/Toast';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import SharedLayout from 'layouts/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
const SignupPage = lazy(() => import('pages/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const ClustersPage = lazy(() => import('pages/ClustersPage'));
const ElementsPage = lazy(() => import('pages/ElementsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoading } = useAuth();

  useEffect(() => {
    loadWebFonts();
  }, []);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      {!(isRefreshing || isLoading) && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoutes />}>
              <Route index element={<HomePage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="signin" element={<SigninPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="cluster" element={<ClustersPage />} />
              <Route path="cluster/:id" element={<ElementsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      {(isRefreshing || isLoading) && <OvalLoader />}

      <Toast />
    </>
  );
};

export default App;
