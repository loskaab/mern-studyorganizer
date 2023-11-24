import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useClusters } from 'utils/hooks';
import { addClusterThunk } from 'store/cluster/clusterThunks';
import { titleSchema } from 'utils/validation';
import ButtonClr from 'components/shared/Button/ButtonClr';
import Select from 'components/shared/Select/Select';

import { Form, Label, Input, Hidden } from './ClusterForms.styled';

const AddClusterForm = ({ cluster, setIsModal }) => {
  const dispatch = useDispatch();
  const [group, setGroup] = useState('');
  const { clusterGroups } = useClusters();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(titleSchema),
    defaultValues: { cluster },
  });

  const onSubmit = data => {
    dispatch(addClusterThunk({ ...data, ...group }));
    setIsModal(false);
  };

  const options = clusterGroups.map(({ clusterGroup }) => {
    return { value: clusterGroup, label: clusterGroup };
  });

  const handleChange = data => setGroup({ group: data ? data.value : '' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        {cluster.length <= 39 ? cluster : cluster.substring(0, 39) + '...'}
        <Hidden {...register('cluster')} />
      </Label>

      <Label>
        Title <span> {errors.title?.message}</span>
        <Input {...register('title')} />
      </Label>

      <Label>
        Group
        <Select options={options} onChange={handleChange} isClearable={group} />
      </Label>

      <ButtonClr type="submit" $s="l" $h="41px">
        Submit
      </ButtonClr>
    </Form>
  );
};

export default AddClusterForm;

AddClusterForm.propTypes = {
  cluster: PropTypes.string.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
