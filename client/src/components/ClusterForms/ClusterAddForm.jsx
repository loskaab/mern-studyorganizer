import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { getGdiveId } from 'utils/helpers/getGdriveId';
import { addClusterThunk, addGroupThunk } from 'store/cluster/clusterThunks';
import { titleSchema } from 'utils/validation';
import ButtonClr from 'components/shared/Button/ButtonClr';
import CreatableSelect from 'components/shared/Select/CreatableSelect';

import { Form, Label, Input, Hidden } from './ClusterForms.styled';

const AddClusterForm = ({ cluster, group, setGroup, setIsModal }) => {
  const dispatch = useDispatch();
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
    const gdriveId = getGdiveId(data.cluster);
    dispatch(addClusterThunk({ ...data, group: group.value, gdriveId }));
    setIsModal(false);
  };

  const options = clusterGroups
    .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
    .sort((a, b) => a.value.localeCompare(b.value));

  const createGroup = groupValue => {
    if (!watch('title')) {
      toast.error('Title is required');
    } else {
      dispatch(addGroupThunk({ clusterGroup: groupValue }));
      setGroup({ group: groupValue, label: groupValue });
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
          value={group}
          options={options}
          onChange={data => setGroup(data ? data : '')}
          onCreateOption={createGroup}
          isClearable={group}
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
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGroup: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
