import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck, BsTextareaResize } from 'react-icons/bs';

import { updateElementThunk } from 'store/element/elementThunks';

import {
  Form,
  SubmitBtn,
  ResizeBtn,
  BtnWrap,
  Textarea,
} from './Element.styled';

const ElementEditForm = ({ el, isForm, setIsForm }) => {
  const dispatch = useDispatch();
  const { _id, element, caption } = el;
  const height = isForm + 35;

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: { element, caption },
  });

  const onSubmit = data => {
    dispatch(updateElementThunk({ _id, ...data }));
    setIsForm(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register('element')} style={{ height }} />

      <BtnWrap>
        <ResizeBtn type="button" onClick={() => setIsForm(height)}>
          <BsTextareaResize size="16px" />
        </ResizeBtn>
        <SubmitBtn>
          <BsSendCheck size="16px" />
        </SubmitBtn>
      </BtnWrap>

      <Textarea {...register('caption')} style={{ height }} />
    </Form>
  );
};

export default ElementEditForm;

ElementEditForm.propTypes = {
  el: PropTypes.object,
  isForm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setIsForm: PropTypes.func,
};
