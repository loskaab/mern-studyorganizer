import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { verifySchema } from 'utils/validation';
import { refreshUserThunk, verifyEmailThunk } from 'store/auth/authThunks';
import { addGroupThunk } from 'store/cluster/clusterThunks';

import SignBtn from './AuthBtns/SignBtn';
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

const VerifyForm = ({ userEmail }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors }) => {
    const noValue = !Object.values(values)[0] && 'noValue';
    const isError = Object.values(errors).length ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    dispatch(verifyEmailThunk(values))
      .unwrap() // .then(pld =>  console.log(pld))
      .catch(err => err.includes('401') && toast.error('Unauthorized'))
      .then(() => dispatch(refreshUserThunk()))
      .then(() => dispatch(addGroupThunk({ clusterGroup: 'Common' })));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ verificationCode: '' }}
      validationSchema={verifySchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Title>
            <h2>Verify: {userEmail}</h2>
          </Title>

          <Fragment>
            <Label>
              Code
              <pre> </pre>
              <ErrorMsg name="verificationCode" component="span" />
            </Label>
            <FieldWrap>
              <Field
                type="text"
                name="verificationCode"
                $validation={isValid({ values, errors })}
              />

              {isValid({ values, errors }) === 'error' && <ErrorIcon />}
              {isValid({ values, errors }) === 'success' && <SuccessIcon />}
            </FieldWrap>
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyForm;

VerifyForm.propTypes = { userEmail: PropTypes.string.isRequired };
