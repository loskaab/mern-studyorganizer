import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const ListBtn = () => {
  const handleListFiles = () => {};

  return (
    <Button onClick={handleListFiles} $s="m" $bs={button}>
      List
    </Button>
  );
};

export default ListBtn;
