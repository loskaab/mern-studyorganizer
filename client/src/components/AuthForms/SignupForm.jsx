import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import { signupSchema } from 'utils/validation';
import { registerThunk } from 'store/auth/authOperations';

import GoogleBtn from './AuthBtns/GoogleBtn';
import IconBtn from './IconBtn/IconBtn';
import SignBtn from './AuthBtns/SignBtn';
import {
  Form,
  Field,
  ErrorMsg,
  Label,
  FieldWrap,
  Tittle,
  SuccessIcon,
  ErrorIcon,
} from './AuthForms.styled';

const initialValues = { name: '', email: '', password: '' };

const SignupForm = ({ setIsVerify }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState('password');

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors, values }) => {
    const isError = Object.keys(errors).length;
    const noValue = Object.keys(values).some(key => !values[key]);
    return noValue || isError;
  };

  const onSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(pld => setIsVerify(!pld.result.user.verifiedEmail))
      .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Sign up</h2>
            <LinkRoute to="/signin">Have an account?</LinkRoute>
          </Tittle>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() + key.substring(1) + ':'}
                <pre> </pre>
                <ErrorMsg name={key} component="span" />
              </Label>

              <FieldWrap>
                <Field
                  type={key === 'password' ? toggle : key}
                  name={key}
                  validation={isValid({ values, errors, key })}
                />

                {key === 'password' && <IconBtn toggle={toggle} setToggle={setToggle} />}
                {values[key] && errors[key] && <ErrorIcon />}
                {values[key] && !errors[key] && <SuccessIcon />}
              </FieldWrap>
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Sign up</SignBtn>

          <GoogleBtn>Sign up with Google</GoogleBtn>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

SignupForm.propTypes = {
  setIsVerify: PropTypes.func.isRequired,
};
