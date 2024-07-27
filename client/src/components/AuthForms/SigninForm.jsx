import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import { signinSchema } from 'utils/validation';
import { loginThunk } from 'store/auth/authThunks';

import GoogleBtn from './AuthBtns/GoogleBtn';
import LinkBtn from './AuthLinks/LinkBtn';
import IconBtn from './IconBtn/IconBtn';
import SignBtn from './AuthBtns/SignBtn';
import {
  Form,
  Field,
  ErrorMsg,
  Label,
  FieldWrap,
  Title,
  SuccessIcon,
  ErrorIcon,
} from './AuthForms.styled';

const initialValues = { email: '', password: '' };

const SigninForm = ({ setIsFM, setEmail }) => {
  const navigate = useNavigate();
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

  const onClick = ({ email }) => {
    setEmail(email);
    setIsFM(true);
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap() // .then(pld => setIsVM(!pld.result.user.verifiedEmail))
      .then(() => navigate('/cluster', { replace: true }))
      .catch(err => err.includes('401') && toast.error('Unauthorized'));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Title>
            <h2>Sign in</h2>
            <LinkRoute to="/signup">Don`t have an account?</LinkRoute>
          </Title>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() + key.substring(1)}
                <pre> </pre>
                <ErrorMsg name={key} component="span" />
                {key === 'password' && (
                  <LinkBtn onClick={() => onClick(values)}>
                    Forgot your pass?
                  </LinkBtn>
                )}
              </Label>

              <FieldWrap>
                <Field
                  type={key === 'password' ? toggle : key}
                  name={key}
                  $validation={isValid({ values, errors, key })}
                />

                {key === 'password' && (
                  <IconBtn toggle={toggle} setToggle={setToggle} />
                )}
                {values[key] && errors[key] && <ErrorIcon />}
                {values[key] && !errors[key] && <SuccessIcon />}
              </FieldWrap>
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Sign in</SignBtn>

          <GoogleBtn>Sign in with Google</GoogleBtn>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;

SigninForm.propTypes = {
  setIsFM: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};
