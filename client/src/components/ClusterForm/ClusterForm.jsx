import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'components/shared/Button/Button';
import { clusterSchema } from 'utils/validation';

import { Form, Label, Input } from './ClusterForm.styled';

const ClusterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(clusterSchema) });

  const onSubmit = data => console.log(data);

  console.log(watch('title')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Cluster: <span> {errors.cluster?.message}</span>
        <Input placeholder="" {...register('cluster')} />
      </Label>
      <Label>
        Title: <span> {errors.title?.message}</span>
        <Input placeholder="" {...register('title')} />
      </Label>
      <Label>
        Group: <span> {errors.group?.message}</span>
        <Input placeholder="" {...register('group')} />
      </Label>

      <Button type="submit" $s="m">
        Submit
      </Button>
    </Form>
  );
};

export default ClusterForm;
