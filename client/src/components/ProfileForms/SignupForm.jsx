import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { signupSchema } from 'utils/validation/userSchema';
import { btn_submit } from 'styles/common/Buttons.module.scss';

import css from './Forms.module.scss';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(signupSchema) });

  const onSubmit = data => {
    console.log(data);
    return data;
  };

  return (
    <form className={css.form_sign} onSubmit={handleSubmit(onSubmit)}>
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

      <button className={btn_submit}>Submit</button>
    </form>
  );
};

export default SignupForm;
