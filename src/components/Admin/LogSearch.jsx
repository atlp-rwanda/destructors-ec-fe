import React, { useState } from 'react';

const LogsSearch = ({ onSearch }) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(date, type);
  };

  return (
    <div className="container mx-auto mt-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="date" className="block font-semibold">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="type" className="block font-semibold">
            Type:
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LogsSearch;
