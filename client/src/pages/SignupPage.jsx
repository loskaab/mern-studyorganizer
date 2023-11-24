import { useState } from 'react';

import SignupForm from 'components/AuthForms/SignupForm';
import VerifyForm from 'components/AuthForms/VerifyForm';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import Modal from 'components/shared/Modal/Modal';
import { useAuth } from 'utils/hooks';

const SignupPage = () => {
  const { user } = useAuth();
  const [isVM, setIsVM] = useState(user.email && !user.verifiedEmail);

  return (
    <FlexWrap $w="400px" $p="0" $fd="column" $jc="center">
      <SignupForm />

      {isVM && (
        <Modal onClick={() => setIsVM(!isVM)}>
          <VerifyForm userEmail={user.email} />
        </Modal>
      )}
    </FlexWrap>
  );
};

export default SignupPage;
