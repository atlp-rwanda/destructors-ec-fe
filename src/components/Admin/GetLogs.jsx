import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs } from '../../redux/reducers/logs';
import LogsList from './DisplayLogs';
import LogsSearch from './LogSearch';

const LogsContainer = () => {
  const dispatch = useDispatch();
  const Logs = useSelector((state) => state.logs);

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  const handleSearch = (date, type) => {
  };

  return (
    <div>
      <LogsSearch onSearch={handleSearch} />
      <LogsList logs={Logs} />
    </div>
  );
};

export default LogsContainer;
