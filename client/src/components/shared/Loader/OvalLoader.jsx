import { Oval } from 'react-loader-spinner';

import { themes } from 'styles/themes';

const { colors } = themes;

const OvalLoader = () => (
  <Oval
    height={40}
    width={40}
    color={colors.error}
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor={colors.error}
    strokeWidth={6}
    strokeWidthSecondary={6}
  />
);

export default OvalLoader;
