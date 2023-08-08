import { Link } from 'react-router-dom';

// eslint-disable-next-line import/order
import { btn_link } from 'styles/common/Buttons.module.scss';
import css from './Signin.module.scss';

const Signin = () => {
  return (
    <div className={css.login}>
      <Link className={btn_link} to="/auth/signup">
        Do not have an account?
      </Link>

      <h2>Sign in Pade</h2>
      <button className={btn_link} type="button">
        Forgot password?
      </button>
    </div>
  );
};

export default Signin;
