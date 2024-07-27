// import { useState } from 'react';
// import reactLogo from 'assets/icons/react.svg';
// import viteLogo from 'assets/icons/vite.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { loginThunk } from 'store/auth/authThunks';

import { Wrap, LinkReact, LinkVite } from './ScreenSaver.styled';

const ScreenSaver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [count, setCount] = useState(0);

  const handleDemo = () => {
    dispatch(loginThunk({ email: 'demo@mail.com', password: 'qweasd' }))
      .unwrap()
      .then(() => navigate('/cluster', { replace: true }))
      .catch(err => toast.error(err.message));
  };

  return (
    <Wrap>
      <h1
        style={{ fontFamily: '"Montserrat", sans-serif', marginBottom: '20px' }}
      >
        Study Organizer
      </h1>

      {/* <div>
        <LinkReact href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React logo" />
        </LinkReact>
        <LinkVite href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite logo" />
        </LinkVite>
      </div>

      <Button onClick={() => setCount(count => count + 1)}>
        Count {count}
      </Button> */}

      <Button $w="100%" onClick={handleDemo}>
        Try demo
      </Button>
    </Wrap>
  );
};

export default ScreenSaver;
