import { useState } from 'react';

import SigninForm from 'components/AuthForms/SigninForm';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ForgotForm from 'components/AuthForms/ForgotForm';
import Modal from 'components/shared/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

import { useAuth } from 'utils/hooks';

const SigninPage = () => {
  const { user } = useAuth();
  const [isVM, setIsVM] = useState(user.email && !user.verifiedEmail);
  const [isFM, setIsFM] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <FlexWrap $w="400px" $p="0" $fd="column" $jc="center">
      <SigninForm setIsFM={setIsFM} setEmail={setEmail} />

      {isVM && (
        <Modal onClick={() => setIsVM(!isVM)}>
          <VerifyForm userEmail={user.email} />
        </Modal>
      )}

      {isFM && (
        <Modal onClick={() => setIsFM(!isFM)}>
          <ForgotForm setIsFM={setIsFM} email={email} />
        </Modal>
      )}
    </FlexWrap>
  );
};

export default SigninPage;
