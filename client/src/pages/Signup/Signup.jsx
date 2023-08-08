import { Link } from 'react-router-dom';

import SignupForm from 'components/SignupForm/SignupForm';
// eslint-disable-next-line import/order
import { btn_link } from 'styles/common/Buttons.module.scss';
import css from './Signup.module.scss';

const Signup = () => {
  return (
    <div className={css.register}>
      <Link className={btn_link} to="/auth/signin">
        Already have an account?
      </Link>
      <SignupForm />
    </div>
  );
};

export default Signup;
