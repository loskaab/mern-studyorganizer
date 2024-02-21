import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FiRefreshCcw } from 'react-icons/fi';

import { listFilesThunk } from 'store/gdrive/gdriveThunks';

import { Button } from './RefreshBtn.styled';

const RefreshBtn = () => {
  const dispatch = useDispatch();

  const signBtnEl = document.getElementById('customBtn');
  const isRefreshable = signBtnEl?.textContent !== 'Sign In';

  useEffect(() => {
    if (signBtnEl) {
      signBtnEl.style.paddingLeft = isRefreshable && '18px';
    }
  }, [isRefreshable, signBtnEl]);

  const handleRefresh = () => {
    dispatch(listFilesThunk()).then(toast.success('Refreshed'));
  };

  if (isRefreshable) {
    return (
      <Button onClick={handleRefresh} $colored={isRefreshable}>
        <FiRefreshCcw size="24px" />
      </Button>
    );
  }
};

export default RefreshBtn;
