import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

// import schemas from 'utils/validation/yupSchemas';
import { btn_submit } from 'styles/common/Buttons.module.scss';
import { previewImage } from 'utils/helpers/previewImage';

import css from './Forms.module.scss';

const ProfileForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemas.profile) });

  // Avatar image
  const isNewAvatar = useCallback(() => {
    const avatarValue = watch('avatar');
    previewImage(avatarValue);
    return avatarValue?.length > 0;
  }, [watch]);

  // Submit form
  const onSubmit = data => {
    Object.keys(data).forEach(key => {
      if (data[key] === '' || data[key] == null || data[key]?.length === 0) {
        delete data[key];
      }
    });
    console.log(data);
    return data;
  };

  return (
    <form className={css.form_profile} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.avatar}>
        {errors.avatar && 'Image file'} <span> {errors.avatar?.message}</span>
        <input
          className={isNewAvatar() ? (errors.avatar ? css.invalid : css.valid) : '_'}
          id="avatar"
          type="file"
          accept="image/*"
          {...register('avatar')}
        />
      </label>

      <label>
        Name <span> {errors.name?.message}</span>
        <input
          placeholder=""
          className={errors.name ? css.invalid : css.valid}
          {...register('name')}
        />
      </label>

      <label>
        Email <span> {errors.email?.message}</span>
        <input
          placeholder=""
          className={errors.email ? css.invalid : css.valid}
          {...register('email')}
        />
      </label>

      <label>
        Verify email <span> {errors.verifyEmail?.message}</span>
        <input
          placeholder=""
          className={errors.verifyEmail ? css.invalid : css.valid}
          {...register('verifyEmail')}
        />
      </label>

      <label>
        Password <span> {errors.password?.message}</span>
        <input
          placeholder=""
          className={errors.password ? css.invalid : css.valid}
          {...register('password')}
        />
      </label>

      <label>
        Confirm password <span> {errors.confirmPass?.message}</span>
        <input
          placeholder=""
          className={errors.confirmPass ? css.invalid : css.valid}
          {...register('confirmPass')}
        />
      </label>

      <label>
        Birthday <span> {errors.birthday?.message}</span>
        <input
          placeholder=""
          className={errors.birthday ? css.invalid : css.valid}
          {...register('birthday')}
        />
      </label>

      <label>
        Country <span> {errors.country?.message}</span>
        <input
          placeholder=""
          className={errors.country ? css.invalid : css.valid}
          {...register('country')}
        />
      </label>

      <label>
        WhatsApp <span> {errors.whatsapp?.message}</span>
        <input
          placeholder=""
          className={errors.whatsapp ? css.invalid : css.valid}
          {...register('whatsapp')}
        />
      </label>

      <label>
        Telegram <span> {errors.telegram?.message}</span>
        <input
          placeholder=""
          className={errors.telegram ? css.invalid : css.valid}
          {...register('telegram')}
        />
      </label>

      <button className={btn_submit}>Save changes</button>
    </form>
  );
};

export default ProfileForm;
