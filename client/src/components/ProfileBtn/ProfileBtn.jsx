import { useState } from 'react';

import { useAuth } from 'utils/hooks/useAuth';
import { getAbbreviation } from 'utils/helpers';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import ProfileForm from 'components/ProfileForm/ProfileForm';

import { BtnDiv } from './ProfileBtn.styled';

const ProfileBtn = () => {
  const [isProfileLayout, setIsProfileLayout] = useState(false);
  const { user } = useAuth();

  const { avatarUrl: url, name } = user;
  const abbr = getAbbreviation(name);

  const handleClick = () => setIsProfileLayout(!isProfileLayout);

  return (
    <>
      <BtnDiv onClick={handleClick} $url={url} $abbr={url ? '' : abbr} />

      {isProfileLayout && (
        <ProfileLayout onClick={handleClick}>
          <ProfileForm />
        </ProfileLayout>
      )}
    </>
  );
};

export default ProfileBtn;
