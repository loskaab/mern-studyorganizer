import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addGroupThunk } from 'store/clusters/clustersThunks';
import { groupSchema } from 'utils/validation';
import ButtonClr from 'components/shared/Button/ButtonClr';

import { Form, Label, Input } from './ClusterForms.styled';

const EditClusterForm = ({ setIsModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(groupSchema),
  });

  const onSubmit = data => {
    dispatch(addGroupThunk(data));
    setIsModal(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Group <span> {errors.clusterGroup?.message}</span>
        <Input {...register('clusterGroup')} />
      </Label>

      <ButtonClr type="submit" $s="l" $h="41px">
        Submit
      </ButtonClr>
    </Form>
  );
};

export default EditClusterForm;

EditClusterForm.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
