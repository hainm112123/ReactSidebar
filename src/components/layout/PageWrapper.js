import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { setAppState } from '../../redux/features/appStateSlice'

const PageWrapper = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(props);
    if (props.state) {
      dispatch(setAppState(props.state));
    }
  }, [dispatch, props])

  return (
    <div>{props.children}</div>
  );
};

export default PageWrapper;