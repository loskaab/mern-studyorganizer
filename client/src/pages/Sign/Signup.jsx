import { Link } from 'react-router-dom';

import SignupForm from 'components/Forms/SignupForm';
// eslint-disable-next-line import/order
import { btn_link } from 'styles/common/Buttons.module.scss';
import css from './Sign.module.scss';

const Signup = () => {
  return (
    <div className={css.sign}>
      <div className={css.wrapper}>
        <h1>Sign up</h1>
        <Link className={btn_link} to="/auth/signin">
          Already have an account?
        </Link>
      </div>

      <SignupForm />
    </div>
  );
};

export default Signup;
