import React from 'react';

const LogsList = ({ logs }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-4">Logs</h2>
      <ul className="space-y-4">
        {logs.map((log) => (
          <li key={log.id} className="bg-white p-4 shadow">
            <span className="font-semibold">{log.timestamp}</span>
            <p className="mt-2">{log.message}</p>
            <p className="text-gray-500">{log.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsList;

