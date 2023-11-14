import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { btn_submit, btn_link } from 'styles/common/Buttons.module.scss';
import { signinSchema } from 'utils/validation/userSchema';

import css from './Forms.module.scss';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(signinSchema) });

  const onSubmit = data => {
    console.log(data);
    return data;
  };

  return (
    <form className={css.form_sign} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email <span> {errors.email?.message}</span>
        <input
          placeholder=""
          className={errors.email ? css.invalid : css.valid}
          {...register('email', { required: true })}
        />
      </label>

      <label className={css.pass_forgot}>
        <div>
          Password <span>⁣ {errors.password?.message}</span>
          <button className={btn_link} type="button">
            Forgot password?
          </button>
        </div>
        <input
          placeholder=""
          className={errors.password ? css.invalid : css.valid}
          {...register('password', { required: true })}
        />
      </label>

      <button className={btn_submit}>Submit</button>
    </form>
  );
};

export default SignupForm;
