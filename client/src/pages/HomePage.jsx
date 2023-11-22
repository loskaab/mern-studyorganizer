import { useNavigate } from 'react-router-dom';

import { useAuth } from 'utils/hooks/useAuth';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { s, m } = themes.indents;

  const handleLogIn = () => {
    navigate('/signin', { replace: true });
  };

  return (
    <FlexWrap $p={`${s} ${m}`} $d="flex" $fd="column" $ai="center" $jc="center">
      <MainLayout />

      {!isLoggedIn && (
        <GridWrap $m="20px" $gtc="1fr 1fr">
          <Button onClick={() => console.log('demo')}>Try demo</Button>
          <Button onClick={handleLogIn}>Log in</Button>
        </GridWrap>
      )}
    </FlexWrap>
  );
};

export default HomePage;
