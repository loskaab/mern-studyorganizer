import { useState } from 'react';

import { useAuth } from 'utils/hooks/useAuth';
import { getAbbreviation } from 'utils/helpers';
import Modal from 'components/shared/Modal/Modal';
import ProfileForm from 'components/ProfileForm/ProfileForm';
import { themes } from 'styles/themes';

import { BtnDiv } from './ProfileBtn.styled';

const ProfileBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const { user } = useAuth();

  const { avatarUrl: url, name } = user;
  const abbr = getAbbreviation(name);
  const { m, xl } = themes.indents;

  const handleClick = () => setIsModal(!isModal);

  return (
    <>
      <BtnDiv onClick={handleClick} $url={url} $abbr={url ? '' : abbr} />

      {isModal && (
        <Modal
          $x={`right: ${m}`}
          $y={`top: ${xl}`}
          $bd={false}
          onClick={handleClick}
        >
          <ProfileForm />
        </Modal>
      )}
    </>
  );
};

export default ProfileBtn;
