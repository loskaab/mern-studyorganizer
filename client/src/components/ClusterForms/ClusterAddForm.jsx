import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { addClusterThunk, addGroupThunk } from 'store/cluster/clusterThunks';
import { titleSchema } from 'utils/validation';
import ButtonClr from 'components/shared/Button/ButtonClr';
import CreatableSelect from 'components/shared/Select/CreatableSelect';

import { Form, Label, Input, Hidden } from './ClusterForms.styled';

const AddClusterForm = ({ cluster, setIsModal }) => {
  const dispatch = useDispatch();
  const [stateGroup, setStateGroup] = useState('');
  const { clusterGroups } = useClusters();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(titleSchema),
    defaultValues: { cluster },
  });

  const onSubmit = data => {
    dispatch(addClusterThunk({ ...data, group: stateGroup.value }));
    setIsModal(false);
  };

  const options = clusterGroups
    .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
    .sort((a, b) => a.value.localeCompare(b.value));

  const createGroup = value => {
    if (!watch('title')) {
      toast.error('Title is required');
    } else {
      dispatch(addGroupThunk({ clusterGroup: value }));
      setStateGroup({ value, label: value });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        {cluster.length <= 45 ? cluster : cluster.substring(0, 45) + '...'}
        <Hidden {...register('cluster')} />
      </Label>

      <Label>
        Title <span> {errors.title?.message}</span>
        <Input autoFocus {...register('title')} />
      </Label>

      <Label>
        Group
        <CreatableSelect
          value={stateGroup}
          options={options}
          onChange={data => setStateGroup(data ? data : '')}
          onCreateOption={createGroup}
          isClearable={stateGroup}
        />
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
