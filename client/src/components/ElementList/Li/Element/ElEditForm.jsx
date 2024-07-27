import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck, BsTextareaResize } from 'react-icons/bs';
import { SiGoogletranslate } from 'react-icons/si';

import { translateText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';
import { updateElementThunk } from 'store/element/elementThunks';

import {
  Form,
  SubmitBtn,
  ResizeBtn,
  TranslateBtn,
  BtnWrap,
  Textarea,
} from './Element.styled';

const ElementEditForm = ({ el, isForm, setIsForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const { _id, element, caption } = el;
  const height = isForm + 24;

  const { register, watch, setValue, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: { element, caption },
  });

  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.key === '+') {
        e.preventDefault();
        await translateElement();
        handleSubmit(onSubmit)();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
      if (e.key === 'Escape') {
        setIsForm(false);
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onSubmit = data => {
    dispatch(updateElementThunk({ _id, lang: user.lang, ...data }));
    setIsForm(false);
  };

  const translateElement = async () => {
    const element = watch('element');
    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation);
    setValue('caption', caption);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register('element')} style={{ height }} />

      <BtnWrap>
        <SubmitBtn>
          <BsSendCheck size="16px" />
        </SubmitBtn>
        <ResizeBtn type="button" onClick={() => setIsForm(height)}>
          <BsTextareaResize size="16px" />
        </ResizeBtn>
        <TranslateBtn type="button" onClick={translateElement}>
          <SiGoogletranslate size="16px" />
        </TranslateBtn>
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
