/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Table = ({ data, columns, date }) => {
  return (
    <div className="table-container">
      <table className="w-[500px] divide-y divide-gray-200 mt-2 font-rubik text-[12px] table-fixed border border-black-300">
        <colgroup>
          {columns.map((column) => (
            <col key={column.field} style={{ width: column.width }} />
          ))}
        </colgroup>
        <thead className="bg-gray-50 w-28 border-black">
          <tr>
            {date?.map((column, index) => (
              <th
                scope="col"
                className={`px-3 py-1 text-${index === 0 ? 'left' : 'right'} text-xs font-medium text-gray-500 uppercase`}
                key={column.field}
                colSpan={2}
              >
                {column.field}
              </th>
            ))}
          </tr>
        </thead>
        <thead className="bg-gray-50 w-28 border-black">
          <tr>
            {columns.map((column) => (
              <th
                scope="col"
                className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                key={column.field}
              >
                {column.field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="table-row" style={{ height: '50px' }}>
              {columns.map((column) => {
                if (column.field === 'Image') {
                  return (
                    <td className="px-3 py-1" key={column.field}>
                      {item[column.value] && item[column.value].length > 0 ? (
                        <img
                          src={item[column.value][0]}
                          alt="Product"
                          className="w-10"
                        />
                      ) : (
                        'No Image'
                      )}
                    </td>
                  );
                }
                if (column.field === 'price') {
                  return (
                    <td className="px-3 py-1" key={column.field}>
                      RWF {item[column.value]}
                    </td>
                  );
                }
                return (
                  <td className="px-3 py-1" key={column.field}>
                    {item[column.value]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
