import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schemas from 'utils/validation/yupSchemas';
// eslint-disable-next-line import/order
import { btn_submit, btn_link } from 'styles/common/Buttons.module.scss';
import css from './Forms.module.scss';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemas.signin) });

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
