import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from 'utils/hooks/useAuth';
import OvalLoader from 'components/shared/Loader/OvalLoader';

const PrivateRoutes = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Suspense fallback={<OvalLoader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/" state={location} />
  );
};

export default PrivateRoutes;
