import { Oval } from 'react-loader-spinner';

import { themes } from 'styles/themes';

const styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const OvalLoader = () => (
  <Oval
    height={40}
    width={40}
    color={themes.colors.error}
    wrapperStyle={styles}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor={themes.colors.error}
    strokeWidth={6}
    strokeWidthSecondary={6}
  />
);

export default OvalLoader;
