import { useSearchParams } from 'react-router-dom';

import ResetForm from 'components/AuthForms/ResetForm';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

const ForgotPage = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const pwdToken = searchParams.get('pwd_token');

  return (
    <FlexWrap $w="400px" $h="100vh" $p="0" $d="flex" $fd="column" $jc="center">
      <ResetForm id={id} pwdToken={pwdToken} />
    </FlexWrap>
  );
};

export default ForgotPage;
