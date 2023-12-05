import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { resetPassThunk } from 'store/auth/authThunks';
import { resetSchema } from 'utils/validation';

import SignBtn from './AuthBtns/SignBtn';
import IconBtn from './IconBtn/IconBtn';
import {
  Form,
  ErrorMsg,
  Label,
  Field,
  FieldWrap,
  Title,
  SuccessIcon,
  ErrorIcon,
} from './AuthForms.styled';

const initialValues = { newPass: '', confirmPass: '' };

const ResetForm = ({ id, pwdToken }) => {
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

  const onSubmit = values => {
    dispatch(resetPassThunk({ ...values, id, pwdToken }))
      .unwrap()
      .then(() => navigate('/signin', { replace: true }))
      .catch(err => toast.error(err.message));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={resetSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Title>
            <h2>Reset password</h2>
          </Title>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() +
                  key.replace('Pass', ' password').substring(1)}
                <pre> </pre>
                <ErrorMsg name={key} component="span" />
              </Label>

              <FieldWrap>
                <Field
                  type={toggle}
                  name={key}
                  $validation={isValid({ values, errors, key })}
                />

                <IconBtn toggle={toggle} setToggle={setToggle} />
                {values[key] && errors[key] && <ErrorIcon />}
                {values[key] && !errors[key] && <SuccessIcon />}
              </FieldWrap>
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;

ResetForm.propTypes = {
  id: PropTypes.string.isRequired,
  pwdToken: PropTypes.string.isRequired,
};
