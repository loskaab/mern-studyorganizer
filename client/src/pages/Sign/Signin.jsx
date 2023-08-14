import { Link } from 'react-router-dom';

import SigninForm from 'components/Forms/SigninForm';
// eslint-disable-next-line import/order
import { btn_link } from 'styles/common/Buttons.module.scss';
import css from './Sign.module.scss';

const Signin = () => {
  return (
    <div className={css.sign}>
      <div className={css.wrapper}>
        <h1>Sign in</h1>
        <Link className={btn_link} to="/auth/signup">
          Do not have an account?
        </Link>
      </div>

      <SigninForm />
    </div>
  );
};

export default Signin;
