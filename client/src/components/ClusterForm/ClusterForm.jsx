import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addClusterThunk } from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';
import { clusterSchema } from 'utils/validation';
import ButtonClr from 'components/shared/Button/ButtonClr';

import { Form, Label, Input, SelectWrap, Hidden } from './ClusterForm.styled';

export const clusterGroups = ['common', 'study', 'work'];

const ClusterForm = ({ clipboardText, setIsModal }) => {
  const dispatch = useDispatch();
  const { allClusters } = useClusters();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(clusterSchema),
    defaultValues: { cluster: clipboardText },
  });

  const onSubmit = data => {
    dispatch(addClusterThunk(data));
    setIsModal(false);
  };

  const clusterImage = text =>
    text.length <= 50 ? text : text.substring(0, 40).concat('...');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        {clusterImage(clipboardText)} <br />
        <span>{errors.cluster?.message}</span>
        <Hidden {...register('cluster')} />
      </Label>

      <Label>
        Title: <span> {errors.title?.message}</span>
        <Input {...register('title')} />
      </Label>

      <Label>
        Group: <span> {errors.group?.message}</span>
        <SelectWrap>
          <select name="pets" id="pet-select" {...register('group')}>
            {clusterGroups.map(el => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <span></span>
        </SelectWrap>
      </Label>

      <ButtonClr type="submit" $s="l" $h="41px">
        Submit
      </ButtonClr>
    </Form>
  );
};

export default ClusterForm;

ClusterForm.propTypes = {
  clipboardText: PropTypes.string.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
