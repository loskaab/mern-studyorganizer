import PropTypes from 'prop-types';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GdriveList from 'components/GdriveList/GdriveList';
import GdriveEditBar from 'components/GdriveBars/GdriveEditBar';

import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const GdrivePage = ({ token }) => {
  return (
    <FlexWrap $p={`0 ${m} ${s} ${s}`}>
      <GdriveList />
      <GdriveEditBar token={token} />
    </FlexWrap>
  );
};

export default GdrivePage;

GdrivePage.propTypes = {
  token: PropTypes.object.isRequired,
};
