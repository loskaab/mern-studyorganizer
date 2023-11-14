import { useState } from 'react';

import SigninForm from 'components/AuthForms/SigninForm';
import Container from 'components/shared/Container/Container';
import ForgotForm from 'components/AuthForms/ForgotForm';
import Modal from 'components/shared/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';
import { useAuth } from 'utils/hooks';

const SigninPage = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');
  const { user } = useAuth();

  return (
    <Container $w="400px" $p="0" $d="flex" $fd="column" $jc="center">
      <SigninForm setIsVerify={setIsVerify} setIsForgot={setIsForgot} setEmail={setEmail} />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm userEmail={user.email} />
        </Modal>
      )}

      {isForgot && (
        <Modal onClick={() => setIsForgot(!isForgot)}>
          <ForgotForm setIsForgot={setIsForgot} email={email} />
        </Modal>
      )}
    </Container>
  );
};

export default SigninPage;
