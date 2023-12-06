import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from 'utils/hooks/useAuth';
import { loginThunk } from 'store/auth/authThunks';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { s, m } = themes.indents;

  const handleDemo = () => {
    dispatch(loginThunk({ email: 'demo@mail.com', password: 'qweasd' }))
      .unwrap()
      .then(() => navigate('/cluster', { replace: true }))
      .catch(err => toast.error(err.message));
  };

  const handleLogIn = () => {
    navigate('/signin', { replace: true });
  };

  return (
    <FlexWrap $p={`${s} ${m}`} $d="flex" $fd="column" $ai="center" $jc="center">
      <MainLayout />

      {!isLoggedIn && (
        <GridWrap $m="20px" $gtc="1fr 1fr">
          <Button onClick={handleDemo}>Try demo</Button>
          <Button onClick={handleLogIn}>Log in</Button>
        </GridWrap>
      )}
    </FlexWrap>
  );
};

export default HomePage;
